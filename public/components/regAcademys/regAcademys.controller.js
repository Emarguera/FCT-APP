(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('AcademyController', AcademyController);

  AcademyController.$inject = ['AcademyService', 'ImageService', 'Upload'];

  function AcademyController(AcademyService, ImageService, Upload) {
    var academyCtrl = this;

    academyCtrl.defaultStep = 1;
    academyCtrl.cloudObj = ImageService.getConfiguration();
    academyCtrl.date = new Date();
    loadAcademys();

    function loadAcademys() {
      AcademyService.getAcademys().then(function(response) {
        academyCtrl.Academys = response.data;

      });
    }

    function init() {
      academyCtrl.Academys = [];
    }
    init();

    academyCtrl.activeStep = function(pStep) {
      return pStep == academyCtrl.defaultStep;
    }

    academyCtrl.setStep = function(pStep) {
      academyCtrl.defaultStep = pStep;
    }

    academyCtrl.preSave = function() {
      academyCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
      if (academyCtrl.cloudObj.data.file == null) {
        academyCtrl.save();
      } else {
        Upload.upload(academyCtrl.cloudObj)
          .success(function(data) {
            academyCtrl.save(data.url);
          });
      }

    }

    academyCtrl.save = function(pimage) {
      var newAcademy = {
        name: academyCtrl.name,
        address: academyCtrl.address,
        number: academyCtrl.number,
        contact: academyCtrl.contact,
        status: academyCtrl.status,
        secondName: academyCtrl.secondName,
        lastName: academyCtrl.lastName,
        secondlastName: academyCtrl.secondlastName,
        image: pimage,
        accion: 'Se ha registrado una nueva academia',
        regDate: new Date()
      };
      var validation = AcademyService.check(newAcademy);
      if (validation == false) {
        AcademyService.setAcademys(newAcademy);
        init();
        clean();
      }
    };

    academyCtrl.getInfo = function(pAcademy) {
      academyCtrl._id = pAcademy._id;
      academyCtrl.name = pAcademy.name;
      academyCtrl.address = pAcademy.address;
      academyCtrl.number = pAcademy.number;
      academyCtrl.contact = pAcademy.contact;
      academyCtrl.status = pAcademy.status;
      academyCtrl.secondName = pAcademy.secondName;
      academyCtrl.lastName = pAcademy.lastName;
      academyCtrl.secondlastName = pAcademy.secondlastName;

      document.querySelector('#Name').disabled = true;

      $("#modalAcademy").modal();
    }

    academyCtrl.update = function(pimage) {
      var AcademyEdit = {
        _id: academyCtrl._id,
        name: academyCtrl.name,
        address: academyCtrl.address,
        number: academyCtrl.number,
        contact: academyCtrl.contact,
        status: academyCtrl.status,
        secondName: academyCtrl.secondName,
        lastName: academyCtrl.lastName,
        secondlastName: academyCtrl.secondlastName,
        image: pimage,
        accion: 'Se ha actualizado una academia'
      };
      AcademyService.objUpdate(AcademyEdit).then(function(response) {
        loadAcademys();
        academyCtrl.name = null;
        academyCtrl.address = null;
        academyCtrl.number = null;
        academyCtrl.contact = null;
        academyCtrl.status = null;
        academyCtrl.secondName = null;
        academyCtrl.lastName = null;
        academyCtrl.secondlastName = null;
      });
      init();
      clean();
      document.querySelector('#Name').disabled = false;

    };

    function clean() {
      academyCtrl.name = '';
      academyCtrl.address = '';
      academyCtrl.number = '';
      academyCtrl.contact = '';
      academyCtrl.secondName = '';
      academyCtrl.lastName = '';
      academyCtrl.secondlastName = '';
      setTimeout(location.reload.bind(location), 1500);
    };

    academyCtrl.preUpdate = function() {
      academyCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
      if (academyCtrl.cloudObj.data.file == null) {
        academyCtrl.update();
      } else {
        Upload.upload(academyCtrl.cloudObj)
          .success(function(data) {
            academyCtrl.update(data.url);
          });
      }

    }

  };
})();
