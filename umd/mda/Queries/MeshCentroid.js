(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix);
    global.MeshCentroid = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  module.exports = function (mesh) {
    var center = _glMatrix.vec3.create();
    var positions = mesh.positions;
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      _glMatrix.vec3.add(center, center, positions[i]);
    }
    _glMatrix.vec3.scale(center, center, 1.0 / plen);
    return center;
  };
});

