(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Edge', './../Core/HalfEdge', './../Core/Face'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Edge'), require('./../Core/HalfEdge'), require('./../Core/Face'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Edge, global.HalfEdge, global.Face);
    global.CreateFace = mod.exports;
  }
})(this, function (module, _Edge, _HalfEdge, _Face) {
  'use strict';

  var Edge = _interopRequireWildcard(_Edge);

  var HalfEdge = _interopRequireWildcard(_HalfEdge);

  var Face = _interopRequireWildcard(_Face);

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

  module.exports = function (mesh, vertices, face) {
    var meshEdgeMap = mesh.getEdgeMap();
    var meshFaces = mesh.getFaces();
    var meshHalfEdges = mesh.getHalfEdges();
    var meshEdges = mesh.getEdges();

    if (!face) {
      face = new Face();
      face.setIndex(meshFaces.length);
    }

    var vlen = vertices.length;
    var hel;
    var hes = [];
    for (var i = 0; i < vlen; i++) {
      var v0 = vertices[i];
      var v1 = vertices[(i + 1) % vlen];
      var i0 = v0.getIndex();
      var i1 = v1.getIndex();

      var he = new HalfEdge();
      var edge = mesh.getEdge(i0, i1);
      if (edge) {
        var het = edge.getHalfEdge();
        var hetv = het.getVertex();
        if (hetv == v0) {
          he = het;
        } else {
          he.setFlipHalfEdge(het);
          het.setFlipHalfEdge(he);
        }
      } else {
        edge = new Edge();
        var keys = mesh.getEdgeKeys(i0, i1);
        edge.setIndex(meshEdges.length);
        meshEdges.push(edge);
        edge.setHalfEdge(he);
        meshEdgeMap[keys[0]] = edge;
        meshEdgeMap[keys[1]] = edge;
      }

      //he
      he.setEdge(edge);
      he.setFace(face);
      he.setVertex(v0);
      if (hel) {
        hel.setNextHalfEdge(he);
      }

      //v
      v0.setHalfEdge(he);

      hes.push(he);
      hel = he;
      meshHalfEdges.push(he);
    }
    face.setHalfEdge(hes[0]);
    hel.setNextHalfEdge(hes[0]);
    return face;
  };
});

