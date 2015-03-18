module.exports = function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map-component"></div>',
    scope: {},
    link: function(scope, element, attrs) {
      L.mapbox.accessToken = 'pk.eyJ1IjoiZWtudXRoIiwiYSI6InA5TFJabjAifQ.zOTDOdaBSMPwZY8ez12r_A';
      var map = L.mapbox.map(element[0], 'examples.map-y7l23tes')
          .setView([45.54, -122.63], 12);

    }
  };
};
