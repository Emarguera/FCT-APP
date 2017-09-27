(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('PlacesService', PlacesService);

  function PlacesService($http) {
    var Places = [

    ];
    var publicAPI = {
      setPlaces: _setPlaces,
      getPlaces: _getPlaces,
      objUpdate: _objUpdate,
      check: _check
    };
    return publicAPI;

    function _setPlaces(pnewPlaces) {
      return $http.post('http://localhost:3000/api/place',pnewPlaces)
    }

    function _getPlaces() {
      return $http.get('http://localhost:3000/api/place');
    }

    function _check(pnewPlaces) {
      var listPlaces = _getPlaces();
      var validate = false
      for (var i = 0; i < listPlaces.length; i++) {
        if (pnewPlaces.name == listPlaces[i].name) {
          validate = true;
        }
      }
      return validate;
    }

    function _objUpdate(pPlaceEdit) {
      var listPlaces = _getPlaces();
      for (var i = 0; i < listPlaces.length; i++) {
        if (pPlaceEdit.name == listPlaces[i].name) {
          listPlaces[i] = pPlaceEdit;
        }
      }
      localStorage.setItem('lsPlacesList', JSON.stringify(listPlaces));

    }

  }

})();
