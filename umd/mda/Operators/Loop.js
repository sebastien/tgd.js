(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './../Queries/FaceVertices', './../Queries/VertexNeighbors', './InsertVertex', './InsertEdge'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./../Queries/FaceVertices'), require('./../Queries/VertexNeighbors'), require('./InsertVertex'), require('./InsertEdge'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.FaceVertices, global.VertexNeighbors, global.InsertVertex, global.InsertEdge);
    global.Loop = mod.exports;
  }
})(this, function (module, _glMatrix, _FaceVertices, _VertexNeighbors, _InsertVertex, _InsertEdge) {
  'use strict';

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var VertexNeighbors = _interopRequireWildcard(_VertexNeighbors);

  var InsertVertex = _interopRequireWildcard(_InsertVertex);

  var InsertEdge = _interopRequireWildcard(_InsertEdge);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    var positions = mesh.positions;
    var plen = positions.length;
    var newPositions = [];
    for (var i = 0; i < plen; i++) {
      newPositions.push(_glMatrix.vec3.create());
    }

    var vertices = mesh.getVertices();
    var vlen = vertices.length;
    var beta;
    for (var i = 0; i < vlen; i++) {
      var vertex = vertices[i];
      var vertexIndex = vertex.getIndex();
      var vertexPos = positions[vertexIndex];
      var newPos = newPositions[vertexIndex];

      var neighbors = VertexNeighbors(vertex);
      var nlen = neighbors.length;

      if (nlen === 3) {
        beta = 3.0 / 16.0;
      } else if (nlen > 3) {
        beta = (5.0 / 8.0 - Math.pow(0.375 + 0.25 * Math.cos(Math.PI * 2.0 / nlen), 2.0)) / nlen;
      }

      _glMatrix.vec3.scaleAndAdd(newPos, newPos, vertexPos, 1.0 - nlen * beta);

      for (var j = 0; j < nlen; j++) {
        var neighborPos = positions[neighbors[j].getIndex()];
        _glMatrix.vec3.scaleAndAdd(newPos, newPos, neighborPos, beta);
      }
    }

    var edges = mesh.getEdges();
    var len = edges.length;
    var newVerts = [];
    var vertexAdjacentFactor = 0.375;
    var vertexOppositeFactor = 0.125;

    var newPos = _glMatrix.vec3.create();
    for (var i = 0; i < len; i++) {
      _glMatrix.vec3.set(newPos, 0, 0, 0);
      var edge = edges[i];
      var halfEdge = edge.getHalfEdge();
      var halfEdgeFlip = halfEdge.getFlipHalfEdge();
      var halfEdgeTop = halfEdge.getNextHalfEdge().getNextHalfEdge();
      var halfEdgeFlipTop = halfEdgeFlip.getNextHalfEdge().getNextHalfEdge();

      var halfEdgeVertex = halfEdge.getVertex();
      var halfEdgeFlipVertex = halfEdgeFlip.getVertex();
      var halfEdgeTopVertex = halfEdgeTop.getVertex();
      var halfEdgeFlipTopVertex = halfEdgeFlipTop.getVertex();

      var halfEdgeVertexPos = positions[halfEdgeVertex.getIndex()];
      var halfEdgeFlipVertexPos = positions[halfEdgeFlipVertex.getIndex()];
      var halfEdgeTopVertexPos = positions[halfEdgeTopVertex.getIndex()];
      var halfEdgeFlipTopVertexPos = positions[halfEdgeFlipTopVertex.getIndex()];

      _glMatrix.vec3.scaleAndAdd(newPos, newPos, halfEdgeVertexPos, vertexAdjacentFactor);
      _glMatrix.vec3.scaleAndAdd(newPos, newPos, halfEdgeFlipVertexPos, vertexAdjacentFactor);
      _glMatrix.vec3.scaleAndAdd(newPos, newPos, halfEdgeTopVertexPos, vertexOppositeFactor);
      _glMatrix.vec3.scaleAndAdd(newPos, newPos, halfEdgeFlipTopVertexPos, vertexOppositeFactor);

      newVerts.push(InsertVertex(mesh, edge.getIndex(), newPos));
    }

    var faces = mesh.getFaces();
    var flen = faces.length;
    var result;
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      var vertices = FaceVertices(face);
      var vlen = vertices.length;

      var v1 = vertices[1];
      var v3 = vertices[3];
      var v5 = vertices[5];

      result = InsertEdge(mesh, v1.getIndex(), v3.getIndex());
      result = InsertEdge(mesh, v3.getIndex(), v5.getIndex());
      result = InsertEdge(mesh, v5.getIndex(), v1.getIndex());
    }

    for (var i = 0; i < plen; i++) {
      _glMatrix.vec3.copy(positions[i], newPositions[i]);
    }
  };
});

