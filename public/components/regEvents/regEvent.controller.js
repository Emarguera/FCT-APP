(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('eventController', eventController);

  eventController.$inject = ['$scope', '$element', 'ImageService', 'Upload', 'AcademyService', 'PlacesService', 'AssociationService', 'sponsorService', 'eventService'];

  function eventController($scope, $element, ImageService, Upload, AcademyService, PlacesService, AssociationService, sponsorService, eventService) {
    var eventCtrl = this;
    eventCtrl.cloudObj = ImageService.getConfiguration();
    eventCtrl.date = new Date();
    loadAcademys();
    loadPlaces();
    loadAssociation();
    loadSponsors();
    loadEvents();

    function loadAcademys() {
      AcademyService.getAcademys().then(function(response) {
        eventCtrl.academys = response.data;
      });
    }

    function loadSponsors() {
      sponsorService.getSponsor().then(function(response) {
        eventCtrl.sponsorInfo = response.data;
      });
    }

    function loadEvents() {
      eventService.getEvents().then(function(response) {
        eventCtrl.eventsList = response.data;
        console.log(eventCtrl.eventsList)
      });
    }

    function loadAssociation() {
      AssociationService.getAssociated().then(function(response) {
        eventCtrl.associated = response.data;
      })
    }

    function loadPlaces() {
      PlacesService.getPlaces().then(function(response) {
        eventCtrl.places = response.data;
      });
    }

    function init() {
      eventCtrl.academys = [];
      eventCtrl.places = [];
      eventCtrl.associated = [];
      eventCtrl.sponsorInfo = [];
      eventCtrl.combatList = [];
      eventCtrl.eventsList = [];
    }
    init();

    eventCtrl.preSave = function() {
      eventCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
      if (eventCtrl.cloudObj.data.file == null) {
        eventCtrl.save();
      } else {
        Upload.upload(eventCtrl.cloudObj)
          .success(function(data) {
            eventCtrl.save(data.url);
          });
      }
    }

    eventCtrl.addCategoryCombat = function() {
      var newCombat = {
        combatGender: eventCtrl.combatGender,
        combatWeight: eventCtrl.combatWeight,
        combatAge: eventCtrl.combatAge
      }
      eventCtrl.combatList.push(newCombat)
    }

    eventCtrl.save = function(peventImage) {
      var eventDates = moment(eventCtrl.eventStartDate);
      var location = {
        place: eventCtrl.eventLocationName
      };
      var coordinates = seachLatLog(location);
      var newEvent = {
        eventName: eventCtrl.eventName,
        eventLocationName: eventCtrl.eventLocationName,
        eventAsociation: eventCtrl.eventAsociation,
        eventTicketPrice: eventCtrl.eventTicketPrice,
        eventType: eventCtrl.eventType,
        eventAcademys: eventCtrl.eventAcademys,
        eventInscriptionCost: eventCtrl.eventInscriptionCost,
        eventDescription: eventCtrl.eventDescription,
        eventGuest1: eventCtrl.eventGuest1,
        eventGuest2: eventCtrl.eventGuest2,
        eventGuest3: eventCtrl.eventGuest3,
        eventOrganizer: eventCtrl.eventOrganizer,
        eventNameContact: eventCtrl.eventNameContact,
        eventPhone: eventCtrl.eventPhone,
        eventContactEmail: eventCtrl.eventContactEmail,
        eventSponsor: eventCtrl.eventSponsor,
        eventDescriptionSponsor: eventCtrl.eventDescriptionSponsor,
        combats: eventCtrl.combatList,
        eventImage: peventImage,
        lat: coordinates.lat,
        log: coordinates.log,
        eventStartDate: eventDates._i.startDate._d,
        eventEndDate: eventDates._i.endDate._d,
        accion: 'Se ha registrado un nuevo evento',
        regDate: new Date()
      }
      eventService.setEvents(newEvent);
      clean();
    };

    function seachLatLog(pLocation) {
      var placesList = eventCtrl.places;
      var coordinates = {
        lat: '',
        log: ''
      };

      for (var i = 0; i < placesList.length; i++) {
        if (pLocation.place == placesList[i].name) {
          coordinates.lat = placesList[i].latitude;
          coordinates.log = placesList[i].lenght;
        }
      }

      return coordinates;
    }

    function clean() {
      eventCtrl.eventName = '';
      eventCtrl.eventLocationName = '';
      eventCtrl.eventAsociation = '';
      eventCtrl.eventTicketPrice = '';
      eventCtrl.eventType = '';
      eventCtrl.eventAcademys = '';
      eventCtrl.eventInscriptionCost = '';
      eventCtrl.eventDescription = '';
      eventCtrl.eventGuest1 = '';
      eventCtrl.eventGuest2 = '';
      eventCtrl.eventGuest3 = '';
      eventCtrl.eventOrganizer = '';
      eventCtrl.eventNameContact = '';
      eventCtrl.eventPhone = '';
      eventCtrl.eventContactEmail = '';
      eventCtrl.eventSponsor = '';
      eventCtrl.eventDescriptionSponsor = '';
      eventCtrl.combatList = '';
      coordinates.lat = '';
      coordinates.log = '';
      eventCtrl.combatAge = '';
      eventCtrl.combatWeight = '';
      eventCtrl.combatGender = '';
    }

  };
})();
