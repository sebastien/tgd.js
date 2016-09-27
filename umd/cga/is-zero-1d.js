(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.isZero1d = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a) {
    return a === 0 || Math.abs(a) < 0.000001;
  };
});

