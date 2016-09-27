(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.glMatrix);
    global.Springs = mod.exports;
  }
})(this, function (module, _Behavior, _glMatrix) {
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

  var tmp = _glMatrix.vec3.create();

  function Springs() {};

  Springs.prototype = new Behavior();
  Springs.prototype.constructor = Springs;

  Springs.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    var springs = particle.getSprings();
    var slen = springs.length;
    for (var i = 0; i < slen; i++) {
      var s = springs[i];
      var other = s.p0 === particle ? s.p1 : s.p0;
      _glMatrix.vec3.subtract(tmp, particle.getPrevPos(), other.getPrevPos());
      var dist = _glMatrix.vec3.length(tmp);
      _glMatrix.vec3.normalize(tmp, tmp);
      var delta = s.length - dist;
      _glMatrix.vec3.scale(tmp, tmp, s.k * delta * this.magnitude * dt / slen);
      _glMatrix.vec3.add(acc, acc, tmp);
    }
  };

  module.exports = Springs;
});

