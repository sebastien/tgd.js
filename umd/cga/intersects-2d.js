(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './intersects-proper-2d', './is-between-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./intersects-proper-2d'), require('./is-between-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.intersectsProper2d, global.isBetween2d);
    global.intersects2d = mod.exports;
  }
})(this, function (module, _intersectsProper2d, _isBetween2d) {
  'use strict';

  var intersectsProper = _interopRequireWildcard(_intersectsProper2d);

  var isBetween = _interopRequireWildcard(_isBetween2d);

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
    if (intersectsProper(a, b, c, d)) {
      return true;
    } else if (isBetween(a, b, c) || isBetween(a, b, d) || isBetween(c, d, a) || isBetween(c, d, b)) {
      return true;
    }
    return false;
  };
});

