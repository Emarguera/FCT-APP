(function() {
  'use strict'
  angular
    .module('FCT-app')
    .controller('sponsorController', sponsorController);

  sponsorController.$inject = ['sponsorService', 'ImageService', 'Upload', 'eventService', '$scope', '$element'];

  function sponsorController(sponsorService, ImageService, Upload, eventService, $scope, $element) {
    var sponsorctrl = this;

    sponsorctrl.defaultStep = 1;

    loadSponsors();
    sponsorctrl.date = new Date();
    sponsorctrl.cloudObj = ImageService.getConfiguration();
    $scope.patrocinio = ['Dinero', 'Implementos Deportivos', 'Alimentación/Productos'];
    $element.find('input').on('keydown', function(ev) {
      ev.stopPropagation();
    });

    function loadSponsors() {
      sponsorService.getSponsor().then(function(response) {
        sponsorctrl.sponsorInfo = response.data;

      });
    }

    function init() {
      sponsorctrl.sponsorInfo = [];
    }
    init();

    sponsorctrl.activeStep = function(pStep) {
      return pStep == sponsorctrl.defaultStep;
    }
    sponsorctrl.setStep = function(pStep) {
      sponsorctrl.defaultStep = pStep;
    }

    sponsorctrl.preSave = function() {
      sponsorctrl.cloudObj.data.file = document.getElementById("logo").files[0];
      if (sponsorctrl.cloudObj.data.file == null) {
        sponsorctrl.save();
      } else {
        Upload.upload(sponsorctrl.cloudObj)
          .success(function(data) {
            sponsorctrl.save(data.url);
          });
      }

    }
    sponsorctrl.save = function(pimage) {
      var newSponsor = {
        commercialName: sponsorctrl.commercialName,
        realName: sponsorctrl.realName,
        sponsor: sponsorctrl.sponsor,
        photo: pimage,
        accion: 'Se ha registrado un nuevo patrocinador',
        regDate: new Date()
      };
      var Validate = sponsorService.noRepeat(newSponsor);
      if (Validate === false) {
        sponsorService.setSponsor(newSponsor);
        init();
        clean();
        swal(
          'Registro exitoso!',
          '',
          'success'
        )
      } else {
        swal(
          'Usuario ya se encuentra registrado!',
          '',
          'warning'
        )
      }
    };
    sponsorctrl.getInfo = function(pSponsor) {
      sponsorctrl._id = pSponsor._id;
      sponsorctrl.commercialName = pSponsor.commercialName;
      sponsorctrl.realName = pSponsor.realName;
      sponsorctrl.sponsor = pSponsor.sponsor;
      sponsorctrl.photo = pSponsor.photo;
      $("#modalSponsors").modal();
    };

    sponsorctrl.update = function() {
      var editedSponsor = {
        _id: sponsorctrl._id,
        commercialName: sponsorctrl.commercialName,
        realName: sponsorctrl.realName,
        sponsor: sponsorctrl.sponsor,
        photo: sponsorctrl.photo,
        accion: 'Se ha actualizado un patrocinador'
      };
      sponsorService.updateSponsor(editedSponsor).then(function(response) {
        loadSponsors();
        sponsorctrl.commercialName = null;
        sponsorctrl.realName = null;
        sponsorctrl.sponsor = null;
      });
      init();
      clean();
    };

    function clean() {
      sponsorctrl.commercialName = '';
      sponsorctrl.realName = '';
      sponsorctrl.sponsor = '';
      sponsorctrl.photo = '';
    }
  }
})();
