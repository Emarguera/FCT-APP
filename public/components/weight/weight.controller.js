(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('weightController', weightController);

  weightController.$inject = ['UserService'];

  function weightController(UserService) {
    var weightCtrl = this;
     loadWeight();

    function loadWeight(){
        UserService.getUsers().then(function (response){
          weightCtrl.weights = response.data;
        })
      }

    function init() {
      weightCtrl.weights = [];
    }
    init();
  }
})();
