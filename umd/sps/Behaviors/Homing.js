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
    global.Homing = mod.exports;
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

  function Homing() {};

  Homing.prototype = new Behavior();
  Homing.prototype.constructor = Homing;

  Homing.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    _glMatrix.vec3.subtract(tmp, particle.getHome(), pos);
    _glMatrix.vec3.scaleAndAdd(acc, acc, tmp, this.magnitude * dt);
  };

  module.exports = Homing;
});

