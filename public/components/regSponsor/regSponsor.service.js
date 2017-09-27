(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('sponsorService', sponsorService);

  function sponsorService($http) {
    var sponsor = [

    ];

    var publicAPI = {
      setSponsor: _setSponsor,
      getSponsor: _getSponsor,
      updateSponsor: _updateSponsor,
      noRepeat: _noRepeat
    };
    return publicAPI;

    function _setSponsor(pSponsor) {
      return $http.post('http://localhost:3000/api/sponsor', pSponsor);
    }

    function _getSponsor() {
      return $http.get('http://localhost:3000/api/sponsor');
    }

    function _updateSponsor(pobgSponsor) {
       return $http.put('http://localhost:3000/api/sponsorUpdate', pobgSponsor);
    }

    function _noRepeat(peditedSponsor) {
      var sponsorList = _getSponsor();
      var Validate = false;
      for (var i = 0; i < sponsorList.length; i++) {
        if (sponsorList[i].commercialName == peditedSponsor.commercialName) {
          Validate = true;
        }
      }
      return Validate;
    }
  }
})();
