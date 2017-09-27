(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('inscriptionController', inscriptionController);

  inscriptionController.$inject = ['inscriptionService', 'UserService', 'eventService'];

  function inscriptionController(inscriptionService, UserService, eventService) {
    var inscriptionCtrl = this;
    loadInscription();
    loadEvents();
    loadStudent();

    function loadInscription(){
        inscriptionService.getInscription().then(function (response){
           inscriptionCtrl.inscriptions = response.data;
        })
      }

    function loadEvents(){
        eventService.getEvents().then(function (response){
          inscriptionCtrl.event = response.data;
        })
      }
      function loadStudent(){
        UserService.getUsers().then(function (response){
         inscriptionCtrl.student = response.data;
        })
      }

    function init() {
      inscriptionCtrl.inscriptions = [];
      inscriptionCtrl.inscription = {};
      inscriptionCtrl.student = [];
      inscriptionCtrl.event = [];
    }
    init();

    inscriptionCtrl.save = function(combat, student) {
      var newInscription = {
        competitors: inscriptionCtrl.competitors,
        eventCombat: inscriptionCtrl.eventCombat,
        eventComp: inscriptionCtrl.eventComp
        }
      // var validate= false;
      // var validate = validateCompetitor(pNewInscription);
      // if (validate==  true) {
        
           inscriptionService.setInscription(newInscription);
      init();
      clear();
      swal(
      'Inscripción exitosa !',
      '',
      'success'
      )
      // }else{
      //    init();
      //   clear();
      //   swal(
      //   'ICompetidor no cumple los requisitos !',
      //   '',
      //   'warning'
      //   )
      // };
    
    };
    // function validateCompetitor(validateinscription) {
    //   var studentList = inscriptionCtrl.student;
    //   var student = '';
    //   for (var i = 0 ; i < studentList.length ;  i++) {
    //     if (validateinscription == studentList[i].identification) {
    //       student = studentList[i];
    //     }        
    //   }
    //   console.log(student);
    //   console.log(validateinscription);
    //   console.log(studentList);

    // }
    function clear() {
      inscriptionCtrl.competitors = '';
      inscriptionCtrl.eventCombat ='';
      inscriptionCtrl.eventComp = '';
      setTimeout(location.reload.bind(location), 1500);
    };
  };
})();
