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
    global.Angle = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  var cx = _glMatrix.vec3.create();
  var d0 = _glMatrix.vec3.create();
  var c0 = _glMatrix.vec3.create();
  var c0p2 = _glMatrix.vec3.create();
  var c0p3 = _glMatrix.vec3.create();

  function Angle(particle0, particle1, particle2, particle3, opts) {
    opts = opts ? opts : {};
    this.p0 = particle0;
    this.p1 = particle1;
    this.p2 = particle2;
    this.p3 = particle3;
    this.k = opts.k != undefined ? opts.k : 1.0;
    this.bias = opts.bias != undefined ? opts.bias : 0.5;
    this.angle = 0.0;
    if (opts.angle != undefined) {
      this.angle = opts.angle;
    } else {
      _glMatrix.vec3.add(c0, this.p0.getPrevPos(), this.p1.getPrevPos());
      _glMatrix.vec3.scale(c0, c0, 0.5);
      _glMatrix.vec3.subtract(c0p2, this.p2.getPrevPos(), c0);
      _glMatrix.vec3.subtract(c0p3, this.p3.getPrevPos(), c0);
      _glMatrix.vec3.normalize(c0p2, c0p2);
      _glMatrix.vec3.normalize(c0p3, c0p3);
      _glMatrix.vec3.sub(d0, this.p0.getPrevPos(), this.p1.getPrevPos());
      _glMatrix.vec3.normalize(d0, d0);
      _glMatrix.vec3.cross(cx, c0p2, c0p3);
      var c = _glMatrix.vec3.length(cx);
      var d = _glMatrix.vec3.dot(c0p2, c0p3);
      this.angle = Math.atan2(c, d);
    }
    // particle0.addAngle( this );
    // particle1.addAngle( this );
    particle2.addAngle(this);
    particle3.addAngle(this);
  };

  module.exports = Angle;
});

