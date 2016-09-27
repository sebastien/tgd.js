(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-zero-1d', './area2-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-zero-1d'), require('./area2-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isZero1d, global.area22d);
    global.isColinear2d = mod.exports;
  }
})(this, function (module, _isZero1d, _area22d) {
  'use strict';

  var isZero = _interopRequireWildcard(_isZero1d);

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
    return isZero(area2(a, b, c));
  };
});

