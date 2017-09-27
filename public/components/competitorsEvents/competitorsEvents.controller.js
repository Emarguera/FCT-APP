(function() {
  'use strict'
  angular
    .module('FCT-app')
    .controller('consultController', consultController);

  consultController.$inject = ['inscriptionService'];

  function consultController(inscriptionService) {
    var consultCtrl = this;
    loadConsultCompetitors();

    function loadConsultCompetitors(){
       inscriptionService.getInscription().then(function (response){
           consultCtrl.events = response.data;
        })
      }

    function init() {
      consultCtrl.events = [];
    }
    init();
  }
})();
