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
    global.Force = mod.exports;
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

  function Force(options) {
    options = options ? options : {};
    this.force = options.force ? options.force : _glMatrix.vec3.fromValues(0.0, -1.0, 0.0);
  };

  Force.prototype = new Behavior();
  Force.prototype.constructor = Force;

  Force.prototype.actUpon = function (particle, pos, vel, acc, dt) {

    _glMatrix.vec3.scaleAndAdd(acc, acc, this.force, this.magnitude * dt);
  };

  module.exports = Force;
});

