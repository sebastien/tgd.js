(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-zero-1d', './is-equal-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-zero-1d'), require('./is-equal-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isZero1d, global.isEqual1d);
    global.isEqual2d = mod.exports;
  }
})(this, function (module, _isZero1d, _isEqual1d) {
  'use strict';

  var isZero = _interopRequireWildcard(_isZero1d);

  var isEqual = _interopRequireWildcard(_isEqual1d);

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

  module.exports = function (a, b) {
    if (isEqual(a[0], b[0]) && isEqual(a[1], b[1])) {
      return true;
    }
    return false;
  };
});

