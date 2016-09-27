(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './Behavior', './../../../mhf', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Behavior'), require('./../../../mhf'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Behavior, global.mhf, global.glMatrix);
    global.Angles = mod.exports;
  }
})(this, function (module, _Behavior, _mhf, _glMatrix) {
  'use strict';

  var Behavior = _interopRequireWildcard(_Behavior);

  var mhf = _interopRequireWildcard(_mhf);

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

  var map = mhf.map;

  var _symbol = { symbol: symbol };
  var subsymbol = _symbol.subsymbol;


  var c0 = _glMatrix.vec3.create();
  var d0 = _glMatrix.vec3.create();
  var c0p2 = _glMatrix.vec3.create();
  var c0p3 = _glMatrix.vec3.create();
  var c0p2xy = _glMatrix.vec3.create();
  var c0p3xy = _glMatrix.vec3.create();
  var cx = _glMatrix.vec3.create();
  var angle = 0.0;
  var delta = 0.0;
  var other = false;
  var zAxis = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);

  function r2d(r) {
    return r * 180.0 / Math.PI;
  }
  function Angles() {};

  Angles.prototype = new Behavior();
  Angles.prototype.constructor = Angles;

  Angles.prototype.actUpon = function (particle, pos, vel, acc, dt) {
    var Angles = particle.getAngles();
    var slen = Angles.length;
    for (var i = 0; i < slen; i++) {
      var s = Angles[i];
      other = s.p2 === particle ? true : false;

      // center
      _glMatrix.vec3.add(c0, s.p0.getPrevPos(), s.p1.getPrevPos());
      _glMatrix.vec3.scale(c0, c0, 0.5);

      // axis
      _glMatrix.vec3.sub(d0, s.p0.getPrevPos(), s.p1.getPrevPos());
      _glMatrix.vec3.normalize(d0, d0);

      // vectors
      _glMatrix.vec3.subtract(c0p2, s.p2.getPrevPos(), c0);
      _glMatrix.vec3.subtract(c0p3, s.p3.getPrevPos(), c0);
      _glMatrix.vec3.normalize(c0p2, c0p2);
      _glMatrix.vec3.normalize(c0p3, c0p3);

      var ori = _glMatrix.quat.create();
      _glMatrix.quat.rotationTo(ori, d0, zAxis);

      _glMatrix.vec3.transformQuat(c0p2xy, c0p2, ori);
      _glMatrix.vec3.transformQuat(c0p3xy, c0p3, ori);

      var a = Math.atan2(c0p2xy[1], c0p2xy[0]);
      if (a < 0) {
        a = map(a, -Math.PI, 0.0, Math.PI, Math.PI * 2.0);
      }

      var b = Math.atan2(c0p3xy[1], c0p3xy[0]);
      if (b < 0) {
        b = map(b, -Math.PI, 0.0, Math.PI, Math.PI * 2.0);
      }

      if (a < b) {
        angle = b - a;
      } else {
        angle = Math.PI * 2 - (a - b);
      }

      delta = angle - s.angle;
      _glMatrix.vec3.cross(cx, c0p2, c0p3);
      if (Math.abs(delta) > _glMatrix.glMatrix) {
        // if( Math.abs( delta ) > EPSILON && other ) {
        // if( Math.abs( delta ) > EPSILON ) {

        _glMatrix.vec3.cross(cx, d0, other ? c0p2 : c0p3);
        _glMatrix.vec3.scaleAndAdd(acc, acc, cx, (other ? 1.0 - s.bias : -s.bias) * s.k * delta * this.magnitude * dt / slen);
      }
    }
  };

  module.exports = Angles;
});

