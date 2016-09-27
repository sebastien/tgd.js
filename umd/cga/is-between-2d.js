(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-colinear-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-colinear-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isColinear2d);
    global.isBetween2d = mod.exports;
  }
})(this, function (module, _isColinear2d) {
  'use strict';

  var isColinear = _interopRequireWildcard(_isColinear2d);

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

  module.exports = function (a, b, c) {
    if (!isColinear(a, b, c)) {
      return false;
    }
    if (a[0] !== b[0]) {
      return a[0] <= c[0] && c[0] <= b[0] || a[0] >= c[0] && c[0] >= b[0];
    } else {
      return a[1] <= c[1] && c[1] <= b[1] || a[1] >= c[1] && c[1] >= b[1];
    }
    return false;
  };
});

