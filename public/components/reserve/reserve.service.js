(function () {
  'use strict';
  angular
  .module('FCT-app')
  .service('reserveService', reserveService);

  function reserveService() {
    var Reserve =[

    ];

    var publicAPI = {
      setReserve: _setReserve,
      getReserve: _getReserve
    };
    return publicAPI;

    function _setReserve(pReserve){
      var reserveList = _getReserve();

      reserveList.push(pReserve);
      localStorage.setItem('lsReserveList', JSON.stringify(reserveList));
    }

    function _getReserve(){
      var reserveList = JSON.parse(localStorage.getItem('lsReserveList'));
      if (reserveList === null) {
        reserveList = Reserve;
      }
      return reserveList;
    }
  }
})();
