(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './area2-2d', './greater-than-zero-1d', './is-zero-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./area2-2d'), require('./greater-than-zero-1d'), require('./is-zero-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.area22d, global.greaterThanZero1d, global.isZero1d);
    global.isLeftOn2d = mod.exports;
  }
})(this, function (module, _area22d, _greaterThanZero1d, _isZero1d) {
  'use strict';

  var area2 = _interopRequireWildcard(_area22d);

  var greaterThanZero = _interopRequireWildcard(_greaterThanZero1d);

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

  module.exports = function (a, b, c) {
    var res = area2(a, b, c);
    return greaterThanZero(res) || isZero(res);
  };
});

