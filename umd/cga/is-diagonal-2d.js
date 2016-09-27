(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './in-cone-2d', './is-diagonalie-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./in-cone-2d'), require('./is-diagonalie-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.inCone2d, global.isDiagonalie2d);
    global.isDiagonal2d = mod.exports;
  }
})(this, function (module, _inCone2d, _isDiagonalie2d) {
  'use strict';

  var inCone = _interopRequireWildcard(_inCone2d);

  var isDiagonalie = _interopRequireWildcard(_isDiagonalie2d);

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

  module.exports = function (i, j, polygon) {
    var len = polygon.length;
    var a0 = polygon[i - 1 < 0 ? len - 1 : i - 1];
    var a = polygon[i];
    var a1 = polygon[(i + 1) % len];

    var b0 = polygon[j - 1 < 0 ? len - 1 : j - 1];
    var b = polygon[j];
    var b1 = polygon[(j + 1) % len];

    if (inCone(a0, a, a1, b) && inCone(b0, b, b1, a) && isDiagonalie(a, b, polygon)) {
      return true;
    }
    return false;
  };
});

