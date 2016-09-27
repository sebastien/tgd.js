(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'guf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('guf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.guf);
    global.stlSerializer = mod.exports;
  }
})(this, function (module, _guf) {
  'use strict';

  module.exports = function (input) {
    if (input.constructor === Array) {
      var output = "";
      for (var i = 0; i < input.length; i++) {
        output += serialize(input[0], i);
      }
      return output;
    } else {
      return serialize(input, 0);
    }
  };

  function serialize(input, index) {
    if (input.positions === undefined || input.cells === undefined) {
      throw "Input Not Valid: Does not contain any positions or cells";
    }
    var name = input.name === undefined ? "model" + index : input.name;
    var cells = input.cells[0].constructor === Array ? (0, _guf.normalizeArray)(input.cells) : input.cells;
    var positions = input.positions;
    var con = input.positions[0].constructor;
    if (con === Array || con == Float32Array) {
      positions = (0, _guf.normalizeArray)(input.positions);
    }

    var normals = undefined;
    if (input.normals != undefined) {
      normals = input.normals[0].constructor === Array ? (0, _guf.normalizeArray)(input.normals) : input.normals;
    } else {
      normals = (0, _guf.faceNormals)(positions, cells);
    }

    var i0, i1, i2, a, b, c;
    var stl = "solid " + name + "\n";
    for (var i = 0; i < cells.length; i += 3) {
      i0 = cells[i] * 3;
      i1 = cells[i + 1] * 3;
      i2 = cells[i + 2] * 3;
      stl += "facet normal " + normals[i] + " " + normals[i + 1] + " " + normals[i + 2] + "\n";
      stl += "\touter loop \n";
      stl += "\t\tvertex" + " " + positions[i0] + " " + positions[i0 + 1] + " " + positions[i0 + 2] + "\n";
      stl += "\t\tvertex" + " " + positions[i1] + " " + positions[i1 + 1] + " " + positions[i1 + 2] + "\n";
      stl += "\t\tvertex" + " " + positions[i2] + " " + positions[i2 + 1] + " " + positions[i2 + 2] + "\n";
      stl += "\tendloop \n";
      stl += "endfacet \n";
    }
    stl += 'endsolid\n';
    return stl;
  }
});

