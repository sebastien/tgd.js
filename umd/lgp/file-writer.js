(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.fileWriter = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (filename, data) {
    var pom = document.createElement('a');
    pom.href = URL.createObjectURL(new Blob([data], { type: 'text/plain' }));
    pom.download = filename;
    document.body.appendChild(pom);

    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  };
});

