(function(){
  'use strict';
  angular
  .module('FCT-app')
  .controller('logbookController', logbookController);

  logbookController.$inject = ['UserService', 'AcademyService', 'eventService', 'sponsorService', ];

  function logbookController(UserService, AcademyService, eventService, sponsorService){
    var logbookCtrl = this;

    function init(){
      logbookCtrl.logbook = {};
      logbookCtrl.profesors = UserService.getUsers();
      logbookCtrl.users = UserService.getUsers();
      logbookCtrl.academys = AcademyService.getAcademys();
      logbookCtrl.event = eventService.getEvents();
      logbookCtrl.sponsorInfo = sponsorService.getSponsor();
    }
    init();
  }
})();
