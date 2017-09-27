(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('eventPropController', eventPropController);

  eventPropController.$inject = ['eventPropService', 'PlacesService'];

  function eventPropController(eventPropService, PlacesService, $scope) {
    var eventPropCtrl = this;

    loadPlaces();
    eventProp();

    function loadPlaces() {
      PlacesService.getPlaces().then(function(response) {
        eventPropCtrl.places = response.data;
      });
    }

    function eventProp() {
      eventPropService.getEventProps().then(function(response) {
      eventPropCtrl.eventProp = response.data;
      });
    }

    function init() {
      eventPropCtrl.eventProp = [];
      eventPropCtrl.eventProps = {};
      eventPropCtrl.places = [];
    }
    init();

    eventPropCtrl.saveEventProp = function(pNewEventProp) {
      var eventPropDates = moment(eventPropCtrl.eventPropDates);
      var newEventProp = {
      eventPropName: eventPropCtrl.eventPropName,
      eventPropCapacity: eventPropCtrl.eventPropCapacity,
      eventPropStartDate: eventPropDates._i.startDate._d,
      eventPropFinishDate: eventPropDates._i.endDate._d,
      eventPropLocationName: eventPropCtrl.eventPropLocationName,
      eventPropInscriptionCost: eventPropCtrl.eventPropInscriptionCost,
      eventPropOrganize: eventPropCtrl.eventPropOrganize,
      eventPropContactName: eventPropCtrl.eventPropContactName,
      eventPropContactNumber: eventPropCtrl.eventPropContactNumber,
      eventPropContactEmail: eventPropCtrl.eventPropContactEmail,
      eventPropState: "Procesando",
      role: 'eventProp'
      };
      var validation = eventPropService.checkEventProp(newEventProp);
      if (validation === false) {
        eventPropService.setEventProps(newEventProp);
        init();
        clear();
        
      }
    };

    eventPropCtrl.getInfo = function(pEventProp) {
      eventPropCtrl.eventPropState = pEventProp.eventPropState;
      eventPropCtrl.eventPropName = pEventProp.eventPropName;
    };

    // eventPropCtrl.getinfo = function(pEventProp) {
    //   eventPropCtrl.eventPropName = pEventProp.eventPropName;
    //   eventPropCtrl.eventPropCapacity = pEventProp.eventPropCapacity;
    //   eventPropCtrl.eventPropStartDate = pEventProp.eventPropStartDate;
    //   eventPropCtrl.eventPropFinishDate = pEventProp.eventPropFinishDate;
    //   eventPropCtrl.eventPropLocationName = pEventProp.eventPropLocationName;
    //   eventPropCtrl.eventPropInscriptionCost = pEventProp.eventPropInscriptionCost;
    //   eventPropCtrl.eventPropOrganize = pEventProp.eventPropOrganize;
    //   eventPropCtrl.eventPropContactName = pEventProp.eventPropContactName;
    //   eventPropCtrl.eventPropContactNumber = pEventProp.eventPropContactNumber;
    //   eventPropCtrl.eventPropContactEmail = pEventProp.eventPropContactEmail;
    //   eventPropCtrl.eventPropState = pEventProp.eventPropState;
    //   document.querySelector('#eventPropName').disabled = true;
    // };

    eventPropCtrl.updateEventProp = function() {

      var eventPropEdit = {
        eventPropState: eventPropCtrl.eventPropState,
        eventPropName: eventPropCtrl.eventPropName,
        accion: 'Se ha actualizado el estado de una propuesta de evento'
      };
      eventPropService.objUpdateEventProp(eventPropEdit);
      document.querySelector('#eventPropName').disabled = false;
      init();
      clear();
    };


    function clear() {
      eventPropCtrl.eventPropName = '';
      eventPropCtrl.eventPropCapacity = '';
      // eventPropCtrl.eventPropStartDate = '';
      // eventPropCtrl.eventPropFinishDate = '';
      eventPropCtrl.eventPropLocationName = '';
      eventPropCtrl.eventPropInscriptionCost = '';
      eventPropCtrl.eventPropOrganize = '';
      eventPropCtrl.eventPropContactName = '';
      eventPropCtrl.eventPropContactNumber = '';
      eventPropCtrl.eventPropContactEmail = '';
      eventPropCtrl.eventPropState = '';
    };
  };
})();
