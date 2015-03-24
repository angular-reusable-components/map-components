require('./');

var app = angular.module('MapDemo', ['MapComponents']);

/*@ngInject*/
app.controller('MapDemoCtrl', function ($scope) {
  $scope.mapOptions = {
    zoom: 14,
    lat: 45.5085,
    lng: -122.6494
  };
});
