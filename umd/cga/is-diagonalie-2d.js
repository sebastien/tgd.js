(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-equal-2d', './intersects-proper-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-equal-2d'), require('./intersects-proper-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isEqual2d, global.intersectsProper2d);
    global.isDiagonalie2d = mod.exports;
  }
})(this, function (module, _isEqual2d, _intersectsProper2d) {
  'use strict';

  var isEqual = _interopRequireWildcard(_isEqual2d);

  var intersectsProper = _interopRequireWildcard(_intersectsProper2d);

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

  module.exports = function (a, b, polygon) {
    var c,
        c1,
        len = polygon.length;
    for (var i = 0; i < len; i++) {
      c = polygon[i];
      c1 = polygon[(i + 1) % len];
      if (!isEqual(c, a) && !isEqual(c1, a) && !isEqual(c, b) && !isEqual(c1, b) && intersectsProper(a, b, c, c1)) {
        return false;
      }
    }
    return true;
  };
});

