(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Queries/FaceVertices', 'guf', 'cga', 'gl-matrix', './InsertEdge'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Queries/FaceVertices'), require('guf'), require('cga'), require('gl-matrix'), require('./InsertEdge'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.FaceVertices, global.guf, global.cga, global.glMatrix, global.InsertEdge);
    global.Triangulate = mod.exports;
  }
})(this, function (module, _FaceVertices, _guf, _cga, _glMatrix, _InsertEdge) {
  'use strict';

  var FaceVertices = _interopRequireWildcard(_FaceVertices);

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
    // console.log( 'starting triangulation' );
    var positions = mesh.positions;
    var faces = mesh.getFaces();
    var flen = faces.length;
    var zAxis = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);
    var res = {};
    for (var i = 0; i < flen; i++) {
      var face = faces[i];
      var vertices = FaceVertices(face);
      var vlen = vertices.length;
      if (vlen === 3) {
        continue;
      }

      var v0 = positions[vertices[0].getIndex()];
      var v1 = positions[vertices[1].getIndex()];
      var v2 = positions[vertices[2].getIndex()];

      var normal = (0, _guf.calculateNormal)(v0, v1, v2);
      var faceOri = _glMatrix.quat.create();
      _glMatrix.quat.rotationTo(faceOri, normal, zAxis);

      var polygon = [];
      var indicies = [];
      for (var j = 0; j < vlen; j++) {
        var vertex = vertices[j];
        var vertexIndex = vertex.getIndex();
        var vertexPos = _glMatrix.vec3.clone(positions[vertexIndex]);
        _glMatrix.vec3.transformQuat(vertexPos, vertexPos, faceOri);
        polygon.push([vertexPos[0], vertexPos[1]]);
        indicies.push(vertexIndex);
      }

      var results = (0, _cga.triangulatePolygon2)(polygon);
      var rlen = results.length;
      for (var k = 0; k < rlen; k++) {
        var result = results[k];

        var i1 = indicies[result[1]];
        var i2 = indicies[result[2]];

        InsertEdge(mesh, i1, i2);
      }
    }
  };
});

