(function() {
  'use strict'
  angular
  .module('FCT-app')
  .controller('reserveController', reserveController);

  reserveController.$inject = ['reserveService', 'eventService', '$scope'];

  function reserveController(reserveService, eventService, $scope){
    var reservectrl = this;
    loadEvents();

    function loadEvents() {
      eventService.getEvents().then(function(response) {
        reservectrl.listEvent = response.data;
      });
    }

    function init() {
      reservectrl.reserveInfo = reserveService.getReserve();
      reservectrl.listEvent = [];
    }
    init();
    reservectrl.save =function(newReserve) {
      var tickets = document.querySelector('#tickets');
      var event = document.querySelector('#event');
      var newReserve = {
        tickets: reservectrl.tickets,
        events: reservectrl.event
      };
      tickets.innerHTML = 'Cantidad de entradas: ' + newReserve.tickets;
      event.innerHTML = 'Evento: ' + newReserve.events;
      reserveService.setReserve(newReserve);
      init();
      clean();
    };

    reservectrl.getInfo = function(pReserve){
      reservectrl.tickets = pReserve.tickets;
      reservectrl.event = pReserve.event;
    };

    function clean(){
      reservectrl.tickets = '';
      reservectrl.event = '';
    }
    reservectrl.destroy = function(){
      localStorage.removeItem('lsReserveList');
      init();
    }
  }
})();
