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
    global.fileReader = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (filePath, callback) {
    var client = new XMLHttpRequest();
    client.open('GET', filePath);
    client.onreadystatechange = function () {
      if (client.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      if (client.status !== 200) {
        return;
      }

      if (callback) {
        callback(client.responseText);
      }
    };
    client.send();
  };
});

