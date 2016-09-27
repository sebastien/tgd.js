(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Solver', 'gl-matrix', 'mhf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Solver'), require('gl-matrix'), require('mhf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Solver, global.glMatrix, global.mhf);
    global.Verlet = mod.exports;
  }
})(this, function (module, _Solver, _glMatrix, _mhf) {
  'use strict';

  var Solver = _interopRequireWildcard(_Solver);

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

  function Verlet() {};

  Verlet.prototype = new Solver();
  Verlet.prototype.constructor = Verlet;

  Verlet.prototype.update = function (particle, behaviors, physics) {
    if (particle.getFixed()) {
      return;
    }

    var dt = physics.dt;
    var ppos = particle.getPrevPos();
    var pos = particle.getPos();
    var vel = particle.getVel();
    var acc = particle.getAcc();
    _glMatrix.vec3.copy(ppos, pos);

    _glMatrix.vec3.subtract(vel, pos, ppos);
    this.calculateAcceleration(particle, pos, vel, acc, physics, behaviors);
    _glMatrix.vec3.add(vel, vel, acc);
    (0, _mhf.limit3)(vel, vel, physics.velLimit);
    _glMatrix.vec3.add(pos, pos, vel);
    _glMatrix.vec3.set(acc, 0, 0, 0);
  };

  module.exports = Verlet;
});

