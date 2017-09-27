(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('inscriptionService', inscriptionService);

  inscriptionService.$inject = ['$http'];

  function inscriptionService($http) {
    var publicAPI = {
      setInscription: _setInscription,
      getInscription: _getInscription
    };
    return publicAPI;

    function _setInscription(pInscription) {
      return $http.post('http://localhost:3000/api/inscriptionPost', pInscription);
    }

    function _getInscription() {
      return $http.get('http://localhost:3000/api/inscriptionGet');

    }
  }
})();
