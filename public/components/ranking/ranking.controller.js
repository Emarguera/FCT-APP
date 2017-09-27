(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('rankingController', rankingController);

  rankingController.$inject = ['UserService','RankingService'];

  function rankingController(UserService,RankingService) {
    var rankingCtrl = this;
    loadRanking();

    function loadRanking(){
         RankingService.getUsers().then(function (response){
          rankingCtrl.rankings = response.data;
        })
      }

    function init() {
      rankingCtrl.rankings = [];
    }
    init();
  }
})();
