                        (function(){
  'use strict';
  angular
  .module('FCT-app')
  .controller('fightController', fightController);

  fightController.$inject = ['fightService','inscriptionService','eventService','RankingService','UserService'];
  function fightController(fightService,inscriptionService,eventService,RankingService,UserService){
    var fightCtrl = this;
    loadInscription();
    loadEvents();
    loadFight();

    function loadEvents() {
      eventService.getEvents().then(function(response) {
        fightCtrl.eventsList = response.data;
        getCombats();
      });
    }
    function loadFight() {
      fightService.getFight().then(function(response) {
        fightCtrl.fights = response.data;
      });
    }
    function loadInscription(){
        inscriptionService.getInscription().then(function (response){
           fightCtrl.inscriptions = response.data;
        })
      }
    function init(){
      fightCtrl.fights = [];
      fightCtrl.fight = {};
      fightCtrl.competitors = [];
      fightCtrl.event = [];
      fightCtrl.users = [];
      fightCtrl.eventsList = [];
      fightCtrl.combats = [];
    }init();

      fightCtrl.save = function(pNewFight){
         var image = getImage(fightCtrl.eventComp);
        var newFight = {
          eventCombat: fightCtrl.combat,
          eventComp: fightCtrl.eventComp,
          fighter1: fightCtrl.fighter1,
          fighter2: fightCtrl.fighter2,
          fighter3: fightCtrl.fighter3,
          fighter4: fightCtrl.fighter4,
          fighter5: fightCtrl.fighter5,
          winner: fightCtrl.winner,
          photo: image
        }
        // var Validation = fightService.noRepeat(newFight)
        // if( Validation == false){

          fightService.setFight(newFight);
          // RankingService.search(newFight)
          init();
          clean();
        // }
        // swal(
        // 'Registro exitoso!',
        // 'Presiona el boton!',
        // 'success'
        // )
      }

      function getImage(pEvent){
        var list = fightCtrl.eventsList ;
        var image = '';
        for(var i = 0; i < list.length; i++ ){
          if (pEvent == list[i].eventName) {
            image = list[i].eventImage
          }
        }
        return image;
      }
      fightCtrl.getInfo = function(pfight){
        fightCtrl.identification = pfight.identification;
        fightCtrl.events = pfight.events;
        fightCtrl.fighter1 = pfight.fighter1;
        fightCtrl.fighter2 = pfight.fighter2;
        fightCtrl.fighter3 = pfight.fighter3;
        fightCtrl.fighter4 = pfight.fighter4;
        fightCtrl.fighter5 = pfight.fighter5;
      }

      fightCtrl.update = function(){
        var editedFight = {
          identification: fightCtrl.identification,
          events: fightCtrl.events,
          fighter1: fightCtrl.fighter1,
          fighter2: fightCtrl.fighter2,
          fighter3: fightCtrl.fighter3,
          fighter4: fightCtrl.fighter4,
          fighter5: fightCtrl.fighter5
        }

        fightService.updateFight(editedFight);
        init();
        clean();
      }

        function getCombats(){
        var eventList = fightCtrl.eventsList
            for (var i = 0; i < eventList.length; i++) {
              eventList[i].combats.push(fightCtrl.combats)
            }
            return fightCtrl.combats;
          }

      function clean(){
        fightCtrl.identification = '';
        fightCtrl.eventCombat = '';
        fightCtrl.eventComp = '';
        fightCtrl.fighter1 = '';
        fightCtrl.fighter2 = '';
        fightCtrl.fighter3 = '';
        fightCtrl.fighter4 = '';
        fightCtrl.fighter5 = '';
        fightCtrl.winner = '';
      }

  }
})();