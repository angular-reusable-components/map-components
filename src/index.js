var module = angular.module('MapComponents', []);

module.factory('MapboxService', require('./services/mapbox_service'));
module.directive('map', require('./directives/map_directive'));
