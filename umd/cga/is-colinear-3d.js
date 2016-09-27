(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './is-zero-1d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./is-zero-1d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.isZero1d);
    global.isColinear3d = mod.exports;
  }
})(this, function (module, _isZero1d) {
  'use strict';

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
    var cax = c[0] - a[0];
    var cay = c[1] - a[1];
    var caz = c[2] - a[2];
    var bax = b[0] - a[0];
    var bay = b[1] - a[1];
    var baz = b[2] - a[2];
    return isZero(caz * bay - baz * cay) && isZero(baz * cax - bax * caz) && isZero(bax * cay - bay * cax);
  };
});

