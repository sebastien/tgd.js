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
    global.Attractor = mod.exports;
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

  var tmp = _glMatrix.vec3.create();

  function Attractor() {
    this.pos = _glMatrix.vec3.create();
    this.fallOff = 0.5;
  };

  Attractor.prototype = new Behavior();
  Attractor.prototype.constructor = Attractor;

  Attractor.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    _glMatrix.vec3.subtract(tmp, this.pos, pos);
    var length = _glMatrix.vec3.length(tmp);
    var env = (0, _mhf.gaussian)(length, this.magnitude * dt, 0.0, this.fallOff);
    _glMatrix.vec3.scaleAndAdd(acc, acc, tmp, env);
  };

  module.exports = Attractor;
});

