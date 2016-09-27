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
    global.Particle = mod.exports;
  }
})(this, function (module, _glMatrix) {
  'use strict';

  function Particle() {
    this.index = -1;
    this.fixed = false;
    this.home = _glMatrix.vec3.create();
    this.pos = _glMatrix.vec3.create();
    this.ppos = _glMatrix.vec3.create();
    this.vel = _glMatrix.vec3.create();
    this.acc = _glMatrix.vec3.create();
    this.springs = [];
    this.angles = [];
  };

  Particle.prototype.setIndex = function (index) {
    this.index = index;
  };

  Particle.prototype.setIndex = function () {
    return this.index;
  };

  Particle.prototype.getFixed = function () {
    return this.fixed;
  };

  Particle.prototype.getFixed = function () {
    return this.fixed;
  };

  Particle.prototype.setFixed = function (fixed) {
    this.fixed = fixed;
  };

  Particle.prototype.setHome = function (home) {
    _glMatrix.vec3.copy(this.home, home);
  };

  Particle.prototype.getHome = function () {
    return this.home;
  };

  Particle.prototype.setPos = function (pos) {
    _glMatrix.vec3.copy(this.pos, pos);
  };

  Particle.prototype.getPos = function () {
    return this.pos;
  };

  Particle.prototype.setPrevPos = function (ppos) {
    _glMatrix.vec3.copy(this.ppos, ppos);
  };

  Particle.prototype.getPrevPos = function () {
    return this.ppos;
  };

  Particle.prototype.setVel = function (vel) {
    _glMatrix.vec3.copy(this.vel, vel);
  };

  Particle.prototype.getVel = function () {
    return this.vel;
  };

  Particle.prototype.setAcc = function (acc) {
    _glMatrix.vec3.copy(this.acc, acc);
  };

  Particle.prototype.getAcc = function () {
    return this.acc;
  };

  Particle.prototype.addForce = function (force) {
    var acc = this.acc;
    _glMatrix.vec3.add(acc, acc, force);
  };

  Particle.prototype.addSpring = function (spring) {
    this.springs.push(spring);
  };

  Particle.prototype.getSprings = function () {
    return this.springs;
  };

  Particle.prototype.addAngle = function (angle) {
    this.angles.push(angle);
  };

  Particle.prototype.getAngles = function () {
    return this.angles;
  };

  module.exports = Particle;
});

