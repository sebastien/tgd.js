(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'gl-matrix', './cross-2d', './is-zero-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('gl-matrix'), require('./cross-2d'), require('./is-zero-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.glMatrix, global.cross2d, global.isZero1d);
    global.intersection2d = mod.exports;
  }
})(this, function (module, _glMatrix, _cross2d, _isZero1d) {
  'use strict';

  var cross = _interopRequireWildcard(_cross2d);

  var isZero = _interopRequireWildcard(_isZero1d);

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

  module.exports = function (a, b, c, d) {
    var p = _glMatrix.vec2.clone(a);
    var r = _glMatrix.vec2.clone(b);
    _glMatrix.vec2.subtract(r, r, p);

    var q = _glMatrix.vec2.clone(c);
    var s = _glMatrix.vec2.clone(d);
    _glMatrix.vec2.subtract(s, s, q);

    var dqp = _glMatrix.vec2.create();
    _glMatrix.vec2.subtract(dqp, q, p);

    var t = -1.0;
    var rxs = cross(r, s);
    var qpxr = cross(dqp, r);
    var qpxs = cross(dqp, s);
    if (rxs != 0) {
      t = qpxs / rxs;
    } else if (isZero(qpxr) && isZero(rxs)) {
      var t = _glMatrix.vec2.dot(dqp, r) / _glMatrix.vec2.dot(r, r);
    } else if (!isZero(qpxr) && isZero(rxs)) {
      throw 'lines are parallel and do no intersect';
    }
    return _glMatrix.vec2.fromValues(p[0] + t * r[0], p[1] + t * r[1]);
  };
});

