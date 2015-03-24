describe('Map Component Tests', function() {
  var $compile, $rootScope, MapboxService, element;

  var fakeMap = {
    setView: jasmine.createSpy('setView-mock')
  };

  beforeEach(angular.mock.module('MapComponents'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _MapboxService_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    MapboxService = _MapboxService_;
  }));

  describe('Mapbox Leaflet Tests', function () {
    beforeEach(function () {
      spyOn(MapboxService.mapbox, 'map').and.returnValue(fakeMap);
    });

    it('should initialize the map', function() {
      compileElement();
      expect(MapboxService.mapbox.map).toHaveBeenCalledWith(element[0], 'examples.map-y7l23tes');
      expect(fakeMap.setView).toHaveBeenCalledWith([45.54, -122.63], 12);
    });

    it('should zoom the map if the zoom option changes', function () {
      compileElement({zoom: 10});
      expect(fakeMap.setView).toHaveBeenCalledWith([45.54, -122.63], 10);
      $rootScope.data.zoom = 14;
      $rootScope.$digest();
      expect(fakeMap.setView).toHaveBeenCalledWith([45.54, -122.63], 14);
    });

    it('should pane the map if the coordinate options change', function () {
      compileElement({lat: 13.4125, lng: 103.8667});
      $rootScope.data = {
        lat: 45.54,lng:  -122.63
      };
      $rootScope.$digest();
      expect(fakeMap.setView).toHaveBeenCalledWith([45.54, -122.63], 14);
    });

    function compileElement(data) {
      $rootScope.data = data;
      element = $compile("<map options='data'></map>")($rootScope);
      $rootScope.$digest();
    }
  });
});
