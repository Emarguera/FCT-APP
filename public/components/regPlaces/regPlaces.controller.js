(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('PlacesController', PlacesController);

  PlacesController.$inject = ['PlacesService', 'ImageService', 'Upload'];

  function PlacesController(PlacesService, ImageService, Upload) {
    var placesctrl = this;
    placesctrl.cloudObj = ImageService.getConfiguration();
    loadPlaces();
    placesctrl.date = new Date();

    function loadPlaces(){
          PlacesService.getPlaces().then(function (response) {
            placesctrl.places = response.data;

          });
        }
    function init() {
      placesctrl.places = [];
    }
    init();

    placesctrl.preSave = function() {
      placesctrl.cloudObj.data.file = document.getElementById("photo").files[0];
      if (placesctrl.cloudObj.data.file == null) {
        placesctrl.save();
      }else{
      Upload.upload(placesctrl.cloudObj)
        .success(function(data) {
          placesctrl.save(data.url);
        });
      }
    }

    placesctrl.save = function(pimage) {
      var lat = document.querySelector('#lat').value;
      var log = document.querySelector('#long').value;
      var newPlaces = {
        name: placesctrl.name,
        capacity: placesctrl.address,
        number: placesctrl.number,
        contact: placesctrl.contact,
        secondName: placesctrl.secondName,
        lastName: placesctrl.lastName,
        secondlastName: placesctrl.secondlastName,
        ubication: placesctrl.ubication,
        latitude: lat,
        lenght: log,
        timestart: placesctrl.start,
        timeclose: placesctrl.close,
        image: pimage,
        accion: 'Se ha registrado un nuevo lugar',
        regDate: new Date()
      };
      var validation = PlacesService.check(newPlaces);
      if (validation == false) {
        PlacesService.setPlaces(newPlaces);
        init();
        clean();

      }
      swal(
      'Registro exitoso!',
      'Presiona el boton!',
      'success'
      )
    };

    placesctrl.getinfo = function(pnewPlaces) {
      placesctrl.name = pnewPlaces.name,
        placesctrl.address = pnewPlaces.address,
        placesctrl.number = pnewPlaces.number,
        placesctrl.contact = pnewPlaces.contact
    }

    placesctrl.update = function(pimage) {
      var PlaceEdit = {
        name: placesctrl.name,
        address: placesctrl.address,
        number: placesctrl.number,
        contact: placesctrl.contact,
        status: placesctrl.status,
        secondName: placesctrl.secondName,
        lastName: placesctrl.lastName,
        secondlastName: placesctrl.secondlastName,
        image: pimage,
        accion: 'Se ha actualizado un nuevo alumno'
      };
      PlacesService.objUpdate(PlaceEdit);
      init();
      clean();
    };
    function mostrarDatos(){
      var latitud = 9.6226648;
          longitud = -84.0572906;

        var coords = new google.maps.LatLng(latitud,longitud);

        var mapOptions = {
          zoom: 16,
          center: coords,
          mapTypeControl: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapita = new google.maps.Map(
          document.querySelector('#mapa'), mapOptions
        );


        var marker = new google.maps.Marker({
          position: coords,
          map: mapita,
          title: 'Posición actual'
        });
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(mapita);
      }

    function clean() {
      placesctrl.name = '';
      placesctrl.address = '';
      placesctrl.number = '';
      placesctrl.contact = '';
      placesctrl.secondName = '';
      placesctrl.lastName = '';
      placesctrl.secondlastName = '';
      placesctrl.start = '';
      placesctrl.close = '';
      placesctrl.ubication = '';
      setTimeout(location.reload.bind(location), 1500);
    };

  };
})();
