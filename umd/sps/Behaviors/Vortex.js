(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', 'gl-matrix', 'mhf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('gl-matrix'), require('mhf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.glMatrix, global.mhf);
    global.Vortex = mod.exports;
  }
})(this, function (module, _Behavior, _glMatrix, _mhf) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

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

  var sp = _glMatrix.vec3.create();
  var ptOnWire = _glMatrix.vec3.create();
  var rv = _glMatrix.vec3.create();
  var rvn = _glMatrix.vec3.create();
  var f = _glMatrix.vec3.create();

  function Vortex() {
    this.startPt = _glMatrix.vec3.fromValues(0, 0, 1);
    this.endPt = _glMatrix.vec3.fromValues(0, 0, -1);
    this.se = _glMatrix.vec3.create();
    this.sen = _glMatrix.vec3.create();
    this.fallOff = 1.0;
    this.magnitude = 0.1;
  };

  Vortex.prototype = new Behavior();
  Vortex.prototype.constructor = Vortex;

  Vortex.prototype.update = function () {
    _glMatrix.vec3.subtract(this.se, this.startPt, this.endPt);
    _glMatrix.vec3.normalize(this.sen, this.se);
  };

  Vortex.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    var startPt = this.startPt;
    var se = this.se;
    var sen = this.sen;

    _glMatrix.vec3.subtract(sp, startPt, pos);
    var length = _glMatrix.vec3.dot(sp, sen);
    _glMatrix.vec3.subtract(ptOnWire, startPt, sen);
    _glMatrix.vec3.scale(ptOnWire, ptOnWire, length);
    _glMatrix.vec3.subtract(rv, pos, ptOnWire);
    var rvLength = _glMatrix.vec3.length(rv);
    _glMatrix.vec3.cross(f, rv, se);
    var env = (0, _mhf.gaussian)(rvLength, this.magnitude, 0.0, this.fallOff);
    _glMatrix.vec3.scaleAndAdd(acc, acc, f, env * dt);
  };

  module.exports = Vortex;
});

