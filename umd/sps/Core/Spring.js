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
    global.Spring = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  var tmp = _glMatrix.vec3.create();

  function Spring(particle0, particle1, opts) {
    opts = opts ? opts : {};
    this.p0 = particle0;
    this.p1 = particle1;
    this.k = opts.k != undefined ? opts.k : 1.0;
    this.length = 0.0;
    if (opts.length != undefined) {
      this.length = opts.length;
    } else {
      _glMatrix.vec3.subtract(tmp, this.p0.getPos(), this.p1.getPos());
      this.length = _glMatrix.vec3.length(tmp);
    }
    particle0.addSpring(this);
    particle1.addSpring(this);
  };

  module.exports = Spring;
});

