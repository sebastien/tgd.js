(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Queries/VertexNeighbors', './../Queries/FaceVertices', './../Queries/FaceHalfEdges', './../Queries/VertexHalfEdges', './InsertVertex', './InsertEdge', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Queries/VertexNeighbors'), require('./../Queries/FaceVertices'), require('./../Queries/FaceHalfEdges'), require('./../Queries/VertexHalfEdges'), require('./InsertVertex'), require('./InsertEdge'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.VertexNeighbors, global.FaceVertices, global.FaceHalfEdges, global.VertexHalfEdges, global.InsertVertex, global.InsertEdge, global.glMatrix);
    global.CatmullClark = mod.exports;
  }
})(this, function (module, _VertexNeighbors, _FaceVertices, _FaceHalfEdges, _VertexHalfEdges, _InsertVertex, _InsertEdge, _glMatrix) {
  'use strict';

  var VertexNeighbors = _interopRequireWildcard(_VertexNeighbors);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var VertexHalfEdges = _interopRequireWildcard(_VertexHalfEdges);

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
    var newPositions = [];
    var positions = mesh.positions;
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      newPositions.push(_glMatrix.vec3.clone(positions[i]));
    }

    var tmp = _glMatrix.vec3.create();
    var newPos = _glMatrix.vec3.create();
    //calculate new original vertex positions
    var vertices = mesh.getVertices();
    var vlen = vertices.length;
    var kmap = {};

    for (var i = 0; i < 32; i++) {
      var beta = 3.0 / (2.0 * i);
      var rho = 1.0 / (4.0 * i);
      kmap[i] = [1.0 - beta - rho, beta / i, rho / i];
    }

    for (var i = 0; i < vlen; i++) {
      var vertex = vertices[i];
      var vertexIndex = vertex.getIndex();
      var vertexPos = positions[vertexIndex];

      var neighbors = VertexHalfEdges(vertex);
      var nlen = neighbors.length;

      var kernel = kmap[nlen];
      _glMatrix.vec3.copy(newPos, vertexPos);
      _glMatrix.vec3.scale(newPos, newPos, kernel[0]);

      for (var j = 0; j < nlen; j++) {
        var he = neighbors[j];

        var hen = he.getNextHalfEdge();
        var v0iPos = positions[hen.getVertex().getIndex()];
        _glMatrix.vec3.scaleAndAdd(newPos, newPos, v0iPos, kernel[1]);

        var henn = hen.getNextHalfEdge();
        var v1iPos = positions[henn.getVertex().getIndex()];
        _glMatrix.vec3.scaleAndAdd(newPos, newPos, v1iPos, kernel[2]);
      }
      _glMatrix.vec3.copy(newPositions[vertexIndex], newPos);
    }

    //Calculate Face Verts
    var faceVerticesPosHash = {};
    var faces = mesh.getFaces();
    var flen = faces.length;
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      var faceVertices = FaceVertices(face);
      var vlen = faceVertices.length;
      var faceVertexPos = _glMatrix.vec3.create();
      faceVerticesPosHash[face.getIndex()] = faceVertexPos;

      for (var j = 0; j < vlen; j++) {
        var vertex = faceVertices[j];
        var vertexIndex = vertex.getIndex();
        var vertexPos = positions[vertexIndex];
        _glMatrix.vec3.scaleAndAdd(faceVertexPos, faceVertexPos, vertexPos, 1.0 / 4.0);
      }
    }

    //Calculate Edge Verts
    var edgeVerticesPosHash = {};
    var edges = mesh.getEdges();
    var elen = edges.length;
    for (var i = 0; i < elen; i++) {
      var edge = edges[i];

      var edgeVertexPos = _glMatrix.vec3.create();
      edgeVerticesPosHash[edge.getIndex()] = edgeVertexPos;

      var he = edge.getHalfEdge();
      var heVertex = he.getVertex();
      var heVertexPos = positions[heVertex.getIndex()];
      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, heVertexPos, 6.0 / 16.0);

      var heVertexPos0 = positions[he.getNextHalfEdge().getNextHalfEdge().getVertex().getIndex()];
      var heVertexPos1 = positions[he.getNextHalfEdge().getNextHalfEdge().getNextHalfEdge().getVertex().getIndex()];

      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, heVertexPos0, 1.0 / 16.0);
      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, heVertexPos1, 1.0 / 16.0);

      var hef = he.getFlipHalfEdge();
      var hefVertex = hef.getVertex();
      var hefVertexPos = positions[hefVertex.getIndex()];
      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, hefVertexPos, 6.0 / 16.0);

      var hefVertexPos0 = positions[hef.getNextHalfEdge().getNextHalfEdge().getVertex().getIndex()];
      var hefVertexPos1 = positions[hef.getNextHalfEdge().getNextHalfEdge().getNextHalfEdge().getVertex().getIndex()];

      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, hefVertexPos0, 1.0 / 16.0);
      _glMatrix.vec3.scaleAndAdd(edgeVertexPos, edgeVertexPos, hefVertexPos1, 1.0 / 16.0);
    }

    // console.log( edgeVerticesPosHash );
    // insert edges and set vertex positions


    for (var i = 0; i < elen; i++) {
      var edge = edges[i];
      var edgeIndex = edge.getIndex();
      InsertVertex(mesh, edge.getIndex(), edgeVerticesPosHash[edgeIndex]);
    }

    var edgeVertices = {};
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      edgeVertices[face.getIndex()] = [];
      var vertices = FaceVertices(face);
      var vlen = vertices.length;
      for (var j = 0; j < vlen; j++) {
        var vertex = vertices[j];
        var neighbors = VertexNeighbors(vertex);
        if (neighbors.length == 2) {
          edgeVertices[face.getIndex()].push(vertex);
        }
      }
    }

    var keys = Object.keys(edgeVertices);
    for (var i = 0; i < keys.length; i++) {
      var faceIndex = keys[i];
      var vertices = edgeVertices[faceIndex];
      var v0 = vertices[0];
      var v1 = vertices[1];
      var v2 = vertices[2];
      var v3 = vertices[3];
      var result = InsertEdge(mesh, v0.getIndex(), v2.getIndex());
      var cv = InsertVertex(mesh, result.edge.getIndex(), faceVerticesPosHash[faceIndex]);
      edgeVertices[faceIndex].push(cv);
      InsertEdge(mesh, v1.getIndex(), cv.getIndex());
      InsertEdge(mesh, v3.getIndex(), cv.getIndex());
    }

    for (var i = 0; i < plen; i++) {
      _glMatrix.vec3.copy(positions[i], newPositions[i]);
    }
  };
});

