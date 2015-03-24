/*@ngInject*/
module.exports = function(MapboxService) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map-component"></div>',
    scope: {
      options: '='
    },
    link: function(scope, element, attrs) {
      var map;
      var defaultOptions = {
        zoom: 12,
        lat: 45.54,
        lng: -122.63
      };

      MapboxService.mapbox.accessToken = 'pk.eyJ1IjoiZWtudXRoIiwiYSI6InA5TFJabjAifQ.zOTDOdaBSMPwZY8ez12r_A';
      map = MapboxService.mapbox.map(element[0], 'examples.map-y7l23tes');

      scope.$watchCollection('options', goTo);

      function goTo(options) {
        var dest = angular.extend({}, defaultOptions, options);
        map.setView([
            dest.lat,
            dest.lng
          ],
          dest.zoom);
      }
    }
  };
};
