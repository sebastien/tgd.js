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
    global.imageWriter = mod.exports;
  }
})(this, function (module) {
  'use strict';

  module.exports = function (filename, data) {
    var pom = document.createElement('a');
    pom.href = URL.createObjectURL(dataURItoBlob(data));
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

  function dataURItoBlob(data) {
    var byteString;
    if (data.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(data.split(',')[1]);
    } else {
      byteString = unescape(data.split(',')[1]);
    }

    var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
    var dataOut = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      dataOut[i] = byteString.charCodeAt(i);
    }

    return new Blob([dataOut], { type: mimeString });
  }
});

