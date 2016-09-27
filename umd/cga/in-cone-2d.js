(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-left-on-2d', './is-left-2d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-left-on-2d'), require('./is-left-2d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isLeftOn2d, global.isLeft2d);
    global.inCone2d = mod.exports;
  }
})(this, function (module, _isLeftOn2d, _isLeft2d) {
  'use strict';

  var isLeftOn = _interopRequireWildcard(_isLeftOn2d);

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

  module.exports = function (a0, a, a1, b) {
    if (isLeftOn(a, a1, a0)) {
      return isLeft(a, b, a0) && isLeft(b, a, a1);;
    }
    return !(isLeftOn(b, a, a0) && isLeftOn(a, b, a1));
  };
});

