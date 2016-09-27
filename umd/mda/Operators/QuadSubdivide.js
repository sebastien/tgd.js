(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './../Queries/VertexNeighbors', './../Queries/FaceVertices', './InsertVertex', './InsertEdge'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./../Queries/VertexNeighbors'), require('./../Queries/FaceVertices'), require('./InsertVertex'), require('./InsertEdge'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.VertexNeighbors, global.FaceVertices, global.InsertVertex, global.InsertEdge);
    global.QuadSubdivide = mod.exports;
  }
})(this, function (module, _glMatrix, _VertexNeighbors, _FaceVertices, _InsertVertex, _InsertEdge) {
  'use strict';

  var VertexNeighbors = _interopRequireWildcard(_VertexNeighbors);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

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
    var edges = mesh.getEdges();
    var elen = edges.length;
    var edgeVertices = {};

    for (var i = 0; i < elen; i++) {
      var edge = edges[i];
      InsertVertex(mesh, edge.getIndex());
    }

    var faces = mesh.getFaces();
    var flen = faces.length;
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
      var cv = InsertVertex(mesh, result.edge.getIndex());
      edgeVertices[faceIndex].push(cv);
      InsertEdge(mesh, v1.getIndex(), cv.getIndex());
      InsertEdge(mesh, v3.getIndex(), cv.getIndex());
    }
  };
});

