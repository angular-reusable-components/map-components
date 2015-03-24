var mapbox = require('mapbox.js');

/*@ngInject*/
module.exports = function() {
  var mapbox = angular.extend({}, L);
  return mapbox;
};
