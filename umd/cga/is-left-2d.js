(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './greater-than-zero-1d', './area2-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./greater-than-zero-1d'), require('./area2-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.greaterThanZero1d, global.area22d);
    global.isLeft2d = mod.exports;
  }
})(this, function (module, _greaterThanZero1d, _area22d) {
  'use strict';

  var greaterThanZero = _interopRequireWildcard(_greaterThanZero1d);

  var area2 = _interopRequireWildcard(_area22d);

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
    return greaterThanZero(area2(a, b, c));
  };
});

