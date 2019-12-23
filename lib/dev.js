'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var GERMAN = [{
  name: "Fusion Red",
  color: "rgb(252, 92, 101)"
}, {
  name: "Orange Hibiscus",
  color: "rgb(253, 150, 68)"
}, {
  name: "Flirtatious",
  color: "rgb(254, 211, 48)"
}, {
  name: "Reptile Green",
  color: "rgb(38, 222, 129)"
}, {
  name: "Maximum Blue Green",
  color: "rgb(43, 203, 186)"
}, {
  name: "Desire",
  color: "rgb(235, 59, 90)"
}, {
  name: "Beniukon Bronze",
  color: "rgb(250, 130, 49)"
}, {
  name: "NYC Taxi",
  color: "rgb(247, 183, 49)"
}, {
  name: "Algal Fuel",
  color: "rgb(32, 191, 107)"
}, {
  name: "Turquoise Topaz",
  color: "rgb(15, 185, 177)"
}, {
  name: "High Blue",
  color: "rgb(69, 170, 242)"
}, {
  name: "C64 NTSC",
  color: "rgb(75, 123, 236)"
}, {
  name: "Lighter Purple",
  color: "rgb(165, 94, 234)"
}, {
  name: "Twinkle Blue",
  color: "rgb(209, 216, 224)"
}, {
  name: "Blue Grey",
  color: "rgb(119, 140, 163)"
}, {
  name: "Boyzone",
  color: "rgb(45, 152, 218)"
}, {
  name: "Royal Blue",
  color: "rgb(56, 103, 214)"
}, {
  name: "Gloomy Purple",
  color: "rgb(136, 84, 208)"
}, {
  name: "Innuendo",
  color: "rgb(165, 177, 194)"
}, {
  name: "Blue Horizon",
  color: "rgb(75, 101, 132)"
}];

// Assumes that the name is a string separated by " "
// The purpose is to create a camelCase name that
// can be used in json objects
// "some name" -> "someName"
var makeName = function makeName(name) {
  return name.split(" ").map(function (word, index) {
    if (index === 0) {
      return word.toLowerCase();
    } // Make the inital letter capital


    return "".concat(word.charAt(0).toUpperCase()).concat(word.slice(1).toLowerCase());
  }).join("");
};

// color names as keys

var getColorsAsObject = function getColorsAsObject(palette) {
  return palette.reduce(function (accumulator, value) {
    return _objectSpread2({}, accumulator, _defineProperty({}, makeName(value.name), value.color));
  }, {});
};

var index = {
  german: _objectSpread2({
    list: GERMAN
  }, getColorsAsObject(GERMAN))
};

module.exports = index;
