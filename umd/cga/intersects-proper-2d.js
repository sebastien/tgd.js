(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-colinear-2d', './is-left-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-colinear-2d'), require('./is-left-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isColinear2d, global.isLeft2d);
    global.intersectsProper2d = mod.exports;
  }
})(this, function (module, _isColinear2d, _isLeft2d) {
  'use strict';

  var isColinear = _interopRequireWildcard(_isColinear2d);

  var isLeft = _interopRequireWildcard(_isLeft2d);

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
    if (isColinear(a, b, c) || isColinear(a, b, d) || isColinear(c, d, a) || isColinear(c, d, b)) {
      return false;
    }
    if (isLeft(a, b, c) != isLeft(a, b, d) && isLeft(c, d, a) != isLeft(c, d, b)) {
      return true;
    }
    return false;
  };
});

