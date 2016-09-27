(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Solver.js', 'gl-matrix', './Derivative', 'mhf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Solver.js'), require('gl-matrix'), require('./Derivative'), require('mhf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Solver, global.glMatrix, global.Derivative, global.mhf);
    global.RungeKutta = mod.exports;
  }
})(this, function (module, _Solver, _glMatrix, _Derivative, _mhf) {
  'use strict';

  var Solver = _interopRequireWildcard(_Solver);

  var Derivative = _interopRequireWildcard(_Derivative);

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

  var tmpPos = _glMatrix.vec3.create();
  var tmpVel = _glMatrix.vec3.create();
  var tmpAcc = _glMatrix.vec3.create();

  function RungeKutta() {
    this.zero = new Derivative();
    this.one = new Derivative();
    this.two = new Derivative();
    this.three = new Derivative();
    this.four = new Derivative();
  };

  RungeKutta.prototype = new Solver();
  RungeKutta.prototype.constructor = RungeKutta;

  RungeKutta.prototype.evaluate = function (out, input, particle, pos, vel, acc, dt, physics, behaviors) {
    _glMatrix.vec3.scaleAndAdd(tmpPos, pos, input.dpdt, dt);
    _glMatrix.vec3.scaleAndAdd(tmpVel, vel, input.dvdt, dt);

    this.calculateAcceleration(particle, tmpPos, tmpVel, acc, physics, behaviors);
    (0, _mhf.limit3)(tmpVel, tmpVel, physics.velLimit);

    _glMatrix.vec3.copy(out.dpdt, tmpVel);
    _glMatrix.vec3.copy(out.dvdt, acc);
  };

  RungeKutta.prototype.update = function (particle, behaviors, physics) {
    if (particle.getFixed()) {
      return;
    }

    var zero = this.zero;
    var one = this.one;
    var two = this.two;
    var three = this.three;
    var four = this.four;

    var dt = physics.dt;
    var dt2 = dt * 0.5;
    var dt6 = dt / 6.0;

    var ppos = particle.getPrevPos();
    var pos = particle.getPos();
    var vel = particle.getVel();
    var acc = particle.getAcc();
    _glMatrix.vec3.copy(ppos, pos);

    _glMatrix.vec3.set(tmpAcc, 0, 0, 0);
    this.evaluate(one, zero, particle, pos, vel, tmpAcc, 0.0, physics, behaviors);
    _glMatrix.vec3.set(tmpAcc, 0, 0, 0);
    this.evaluate(two, one, particle, pos, vel, tmpAcc, dt2, physics, behaviors);
    _glMatrix.vec3.set(tmpAcc, 0, 0, 0);
    this.evaluate(three, two, particle, pos, vel, tmpAcc, dt2, physics, behaviors);
    _glMatrix.vec3.set(tmpAcc, 0, 0, 0);
    this.evaluate(four, three, particle, pos, vel, tmpAcc, dt, physics, behaviors);

    _glMatrix.vec3.copy(tmpPos, two.dpdt);
    _glMatrix.vec3.add(tmpPos, tmpPos, three.dpdt);
    _glMatrix.vec3.scale(tmpPos, tmpPos, 2.0);
    _glMatrix.vec3.add(tmpPos, tmpPos, one.dpdt);
    _glMatrix.vec3.add(tmpPos, tmpPos, four.dpdt);
    _glMatrix.vec3.scaleAndAdd(pos, pos, tmpPos, dt6);

    _glMatrix.vec3.copy(tmpVel, two.dvdt);
    _glMatrix.vec3.add(tmpVel, tmpVel, three.dvdt);
    _glMatrix.vec3.scale(tmpVel, tmpVel, 2.0);
    _glMatrix.vec3.add(tmpVel, tmpVel, one.dvdt);
    _glMatrix.vec3.add(tmpVel, tmpVel, four.dvdt);
    _glMatrix.vec3.scaleAndAdd(vel, vel, tmpVel, dt6);
    (0, _mhf.limit3)(vel, vel, physics.velLimit);
  };

  module.exports = RungeKutta;
});

