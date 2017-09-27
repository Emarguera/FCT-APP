(function(){
  'use strict';
  angular
  .module('FCT-app')
  .service('fightService', fightService);

  function fightService($http){
    var fight = [];
    var publicAPI = {
      setFight : _setFight,
      getFight : _getFight,
      updateFight : _updateFight,
      noRepeat: _noRepeat
    };
    return publicAPI;

    function _setFight(pFight){
      return $http.post('http://localhost:3000/api/fight', pFight)
    }

    function _getFight(){
      return $http.get('http://localhost:3000/api/fight');
    }

    function _updateFight(pobjFight){
      var fightList = _getFight();
      for(var i = 0; 1 < fightList.length; i++){
        if(fightList[i].identification == pobjFight.identification){
          fightList[i] = pobjFight;
        }
      }
      localStorage.setItem('lsFightList', JSON.stringify(fightList));
    }

    function _noRepeat(pEditFight) {
      var fightList = _getFight();
      var Validation = false;
      for (var i = 0; i < fightList.length; i++) {
        if (fightList[i].identification == pEditFight.identification) {
          Validation = true;
        }
      }
      return Validation;
    }
  }
})();
