(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './Particle', './Physics', './../Solvers/Verlet'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./Particle'), require('./Physics'), require('./../Solvers/Verlet'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.Particle, global.Physics, global.Verlet);
    global.ParticleSystem = mod.exports;
  }
})(this, function (module, _glMatrix, _Particle, _Physics, _Verlet) {
  'use strict';

  var Particle = _interopRequireWildcard(_Particle);

  var Physics = _interopRequireWildcard(_Physics);

  var Solver = _interopRequireWildcard(_Verlet);

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

  // import * as Solver from './../Solvers/Euler';

  function ParticleSystem(opt) {
    opt = opt ? opt : {};
    this.particles = [];
    this.positions = [];
    this.ppositions = [];
    this.velocities = [];
    this.homes = [];
    this.behaviors = [];
    this.solver = opt.solver ? opt.solver : new Solver();
    this.physics = opt.physics ? opt.physics : new Physics();
  }
  // import * as Solver from './../Solvers/RungeKutta';
  ;

  ParticleSystem.prototype.addParticle = function () {
    var particle = new Particle();
    particle.setIndex(this.particles.length);
    this.particles.push(particle);
    this.positions.push(particle.getPos());
    this.ppositions.push(particle.getPrevPos());
    this.velocities.push(particle.getVel());
    this.homes.push(particle.getHome());
    return particle;
  };

  ParticleSystem.prototype.getParticles = function () {
    return this.particles;
  };

  ParticleSystem.prototype.addBehavior = function (behavior) {
    this.behaviors.push(behavior);
  };

  ParticleSystem.prototype.getPositions = function () {
    return this.positions;
  };

  ParticleSystem.prototype.setPosition = function (particle, position) {
    var offset = particle.getIndex();
    this.positions[offset][0] = position[0];
    this.positions[offset][1] = position[1];
    this.positions[offset][2] = position[2];
  };

  ParticleSystem.prototype.getPosition = function (particle) {
    var offset = particle.getIndex();
    return this.positions[offset];
  };

  ParticleSystem.prototype.getVelocities = function () {
    return this.velocities;
  };

  ParticleSystem.prototype.setVelocity = function (particle, velocity) {
    var offset = particle.getIndex();
    this.velocities[offset][0] = velocity[0];
    this.velocities[offset][1] = velocity[1];
    this.velocities[offset][2] = velocity[2];
  };

  ParticleSystem.prototype.getVelocity = function (particle) {
    var offset = particle.getIndex();
    return this.velocities[offset];
  };

  ParticleSystem.prototype.getHomes = function () {
    return this.homes;
  };

  ParticleSystem.prototype.setHome = function (particle, home) {
    var offset = particle.getIndex();
    this.homes[offset][0] = home[0];
    this.homes[offset][1] = home[1];
    this.homes[offset][2] = home[2];
  };

  ParticleSystem.prototype.getHome = function (particle) {
    var offset = particle.getIndex();
    return this.homes[offset];
  };

  ParticleSystem.prototype.getSolver = function () {
    return this.solver;
  };

  ParticleSystem.prototype.setSolver = function (solver) {
    this.solver = solver;
  };

  ParticleSystem.prototype.update = function () {
    var behaviors = this.behaviors;
    var springs = this.springs;
    var physics = this.physics;
    var solver = this.solver;
    var particles = this.particles;

    var blen = behaviors.length;
    for (var i = 0; i < blen; i++) {
      var b = behaviors[i];
      if (b.getEnabled()) {
        b.update();
      }
    }

    var plen = particles.length;
    for (var i = 0; i < plen; i++) {
      var particle = particles[i];
      solver.update(particle, behaviors, physics);
    }
  };

  module.exports = ParticleSystem;
});

