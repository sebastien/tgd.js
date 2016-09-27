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
    global.greaterThanZero1d = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (a) {
    return a > 0.00001;
  };
});

