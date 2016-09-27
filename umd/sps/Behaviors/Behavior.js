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
    global.Behavior = mod.exports;
  }
})(this, function (module) {
  "use strict";

  function Behavior() {
    this.enabled = true;
    this.magnitude = 1.0;
  };

  Behavior.prototype.update = function () {};

  Behavior.prototype.actUpon = function (particle, pos, vel, acc, dt) {};

  Behavior.prototype.getEnabled = function () {
    return this.enabled;
  };

  Behavior.prototype.setEnabled = function (enabled) {
    this.enabled = enabled;
  };

  Behavior.prototype.getMagnitude = function () {
    return this.magnitude;
  };

  Behavior.prototype.setMagnitude = function (magnitude) {
    this.magnitude = magnitude;
  };

  module.exports = Behavior;
});

