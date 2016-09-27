(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './intersection-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./intersection-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.intersection2d);
    global.expandPolygon2d = mod.exports;
  }
})(this, function (module, _glMatrix, _intersection2d) {
  'use strict';

  var intersection = _interopRequireWildcard(_intersection2d);

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

  module.exports = function (polygon, amount) {
    amount = amount == undefined ? 0.5 : amount;
    var result = [];
    var len = polygon.length;
    var cpr = _glMatrix.vec3.create();
    var zdir = _glMatrix.vec3.fromValues(0.0, 0.0, 1.0);
    var cdir = _glMatrix.vec3.create();
    var a = _glMatrix.vec2.create();
    var b = _glMatrix.vec2.create();
    var c = _glMatrix.vec2.create();
    var d = _glMatrix.vec2.create();

    var dir = _glMatrix.vec2.create();
    var at, bt, ct, t;
    // Preform first a, b, calculation so we optimise loop
    at = polygon[len - 1];
    bt = polygon[0];
    _glMatrix.vec2.copy(a, at);
    _glMatrix.vec2.copy(b, bt);
    _glMatrix.vec2.subtract(dir, b, a);
    _glMatrix.vec3.set(cdir, dir[0], dir[1], 0.0);
    _glMatrix.vec3.cross(cpr, cdir, zdir);
    _glMatrix.vec3.normalize(cpr, cpr);
    _glMatrix.vec3.scale(cpr, cpr, amount);
    _glMatrix.vec2.copy(dir, cpr);
    _glMatrix.vec2.add(a, a, dir);
    _glMatrix.vec2.add(b, b, dir);

    for (var i = 0; i < len; i++) {
      bt = polygon[i];
      ct = polygon[(i + 1) % len];

      _glMatrix.vec2.copy(c, bt);
      _glMatrix.vec2.copy(d, ct);

      _glMatrix.vec2.subtract(dir, d, c);
      _glMatrix.vec3.set(cdir, dir[0], dir[1], 0.0);
      _glMatrix.vec3.cross(cpr, cdir, zdir);
      _glMatrix.vec3.normalize(cpr, cpr);
      _glMatrix.vec3.scale(cpr, cpr, amount);
      _glMatrix.vec2.copy(dir, cpr);
      _glMatrix.vec2.add(c, c, dir);
      _glMatrix.vec2.add(d, d, dir);

      result.push(intersection(a, b, c, d));

      _glMatrix.vec2.copy(a, c);
      _glMatrix.vec2.copy(b, d);
    }
    return result;
  };
});

