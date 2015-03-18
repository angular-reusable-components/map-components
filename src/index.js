var mapbox    = require('mapbox.js');
var toque     = require('torque.js');

var module = angular.module('MapComponents', []);

module.directive('map', require('./directives/map_directive'));
