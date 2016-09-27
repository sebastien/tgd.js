(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Queries/MeshCentroid', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Queries/MeshCentroid'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.MeshCentroid, global.glMatrix);
    global.Scale = mod.exports;
  }
})(this, function (module, _MeshCentroid, _glMatrix) {
  'use strict';

  var MeshCentroid = _interopRequireWildcard(_MeshCentroid);

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

  var tmp = _glMatrix.vec3.create();

  module.exports = function (mesh, scale) {
    if (scale.constructor != Array) {
      scale = [scale, scale, scale];
    }
    _glMatrix.vec3.set(tmp, 0.0, 0.0, 0.0);
    var centroid = MeshCentroid(mesh);
    var positions = mesh.positions;
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      var pos = positions[i];
      _glMatrix.vec3.subtract(pos, pos, centroid);
      _glMatrix.vec3.multiply(pos, pos, scale);
      _glMatrix.vec3.add(pos, pos, centroid);
    }
  };
});

