(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('AssociationService', AssociationService);

  AssociationService.$inject = ['$http'];

  function AssociationService($http) {
    var publicAPI = {
      setAssociated: _setAssociated,
      getAssociated: _getAssociated,
      updateAssociated: _updateAssociated,
      noRepeat: _noRepeat,
      associatedInfo: _associatedInfo
    };
    return publicAPI;

    function _setAssociated(pAssociated) {
      return $http.post('http://localhost:3000/api/associationsPost', pAssociated);
    }

    function _getAssociated() {
      return $http.get('http://localhost:3000/api/associationsGet');
    }

    function _updateAssociated(pobjAssociated) {
      return $http.put('http://localhost:3000/api/associationsUpdate', pobjAssociated);
    }

    function _noRepeat(pEditAssociated) {
      var associationlist = _getAssociated();
      var Validation = false;
      for (var i = 0; i < associationlist.length; i++) {
        if (associationlist[i].email == pEditAssociated.email) {
          Validation = true;
        }
      }
      return Validation;
    }

    function _associatedInfo(pAssociated) {
      var associationlist = _getAssociated();
      var associatedInfo = [];
      for (var i = 0; i < associationlist.length; i++) {
        if (pAssociated == associationlist[i].email) {
          associatedInfo = associationlist[i];
        }
      }
      return associatedInfo
    }
  }
})();
