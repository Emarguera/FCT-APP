(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('AcademyService', AcademyService);

  function AcademyService($http) {
    var Academys = [

    ];
    var publicAPI = {
      setAcademys: _setAcademys,
      getAcademys: _getAcademys,
      objUpdate: _objUpdate,
      check: _check
    };
    return publicAPI;

    function _setAcademys(pAcademy) {
      //users.push(pUser);
      return $http.post('http://localhost:3000/api/academy', pAcademy)
    }

    function _getAcademys() {
      return $http.get('http://localhost:3000/api/academy');
    }

    function _objUpdate(pAcademy) {
      return $http.put('http://localhost:3000/api/academyUpdate', pAcademy);
    }

    function _check(pAcademy) {
      var listAcademy = _getAcademys();
      var validate = false
      for (var i = 0; i < listAcademy.length; i++) {
        if (pAcademy.name == listAcademy[i].name) {
          validate = true;
        }
      }
      return validate;
    }

  }

})();
