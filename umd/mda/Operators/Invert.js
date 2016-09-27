(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Mesh', './../Queries/FaceHalfEdges', './../Queries/FaceVertices', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Mesh'), require('./../Queries/FaceHalfEdges'), require('./../Queries/FaceVertices'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh, global.FaceHalfEdges, global.FaceVertices, global.glMatrix);
    global.Invert = mod.exports;
  }
})(this, function (module, _Mesh, _FaceHalfEdges, _FaceVertices, _glMatrix) {
  'use strict';

  var Mesh = _interopRequireWildcard(_Mesh);

  var FaceHalfEdges = _interopRequireWildcard(_FaceHalfEdges);

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

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
    var faces = mesh.getFaces();
    var flen = faces.length;
    for (var i = 0; i < flen; i++) {
      var hes = FaceHalfEdges(faces[i]);
      var vts = FaceVertices(faces[i]);
      var hlen = hes.length;
      for (var j = 0; j < hlen; j++) {
        var i0 = j;
        var i1 = (j + 1) % hlen;

        var v0 = vts[i0];
        var v1 = vts[i1];

        var h0 = hes[i0];
        var h1 = hes[i1];
        h1.setNextHalfEdge(h0);
        h0.setVertex(v1);
        v1.setHalfEdge(h0);
      }
    }
  };
});

