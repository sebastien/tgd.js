(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Mesh', './../Core/Vertex', './../Core/Edge', './../Core/HalfEdge', './../Core/Face', './../Queries/FaceHalfEdges', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Mesh'), require('./../Core/Vertex'), require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Core/Face'), require('./../Queries/FaceHalfEdges'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh, global.Vertex, global.Edge, global.HalfEdge, global.Face, global.FaceHalfEdges, global.glMatrix);
    global.Combine = mod.exports;
  }
})(this, function (module, _Mesh, _Vertex, _Edge, _HalfEdge, _Face, _FaceHalfEdges, _glMatrix) {
  'use strict';

  var Mesh = _interopRequireWildcard(_Mesh);

  var Vertex = _interopRequireWildcard(_Vertex);

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var Face = _interopRequireWildcard(_Face);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

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

  module.exports = function (mesh, other) {
    var meshPositions = mesh.positions;
    var mplen = meshPositions.length;
    var meshVerticies = mesh.getVertices();
    var mvlen = meshVerticies.length;
    var meshFaces = mesh.getFaces();
    var mflen = meshFaces.length;
    var meshEdges = mesh.getEdges();
    var melen = meshEdges.length;
    var meshEdgeMap = mesh.getEdgeMap();

    var otherPositions = other.positions;
    var oplen = otherPositions.length;
    var otherVertices = other.getVertices();
    var ovlen = otherVertices.length;

    var otherCells = other.getCells();
    var oclen = otherCells.length;

    for (var i = 0; i < oplen; i++) {
      var v = new Vertex();
      v.setIndex(meshVerticies.length);
      meshVerticies.push(v);
      var p = _glMatrix.vec3.clone(otherPositions[i]);
      meshPositions.push(p);
    }

    for (var i = 0; i < oclen; i++) {
      var cell = otherCells[i];
      var clen = cell.length;
      var face = new Face();
      face.setIndex(meshFaces.length);
      meshFaces.push(face);
      var lhe = undefined;
      var hes = [];
      for (var j = 0; j < clen; j++) {
        var i0 = mvlen + cell[j];
        var i1 = mvlen + cell[(j + 1) % clen];

        var vertex = meshVerticies[i0];
        var edge = mesh.getEdge(i0, i1);
        var hasEdge = edge ? true : false;
        var he = new HalfEdge();

        if (!hasEdge) {
          edge = new Edge();
          edge.setIndex(meshEdges.length);
          edge.setHalfEdge(he);
          meshEdges.push(edge);
          var keys = mesh.getEdgeKeys(i0, i1);
          meshEdgeMap[keys[0]] = edge;
          meshEdgeMap[keys[1]] = edge;
        } else {
          var hef = edge.getHalfEdge();
          hef.setFlipHalfEdge(he);
          he.setFlipHalfEdge(hef);
        }

        //he
        he.setFace(face);
        he.setEdge(edge);

        he.setVertex(vertex);
        if (lhe) {
          lhe.setNextHalfEdge(he);
        }
        hes.push(he);
        lhe = he;

        //vertex
        vertex.setHalfEdge(he);
      }
      face.setHalfEdge(lhe);
      lhe.setNextHalfEdge(hes[0]);
    }
  };
});

