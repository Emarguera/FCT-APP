(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('AssociationController', AssociationController);

  AssociationController.$inject = ['AssociationService'];

  function AssociationController(AssociationService) {
    var associatedCtrl = this;

    associatedCtrl.defaultStep = 1;
    associatedCtrl.date = new Date();
    loadAssociation();

    function loadAssociation() {
      AssociationService.getAssociated().then(function(response) {
        associatedCtrl.associated = response.data;
      })
    }

    function init() {
      associatedCtrl.associated = [];
    }
    init();

    associatedCtrl.activeStep = function(pStep) {
      return pStep == associatedCtrl.defaultStep;
    }

    associatedCtrl.setStep = function(pStep) {
      associatedCtrl.defaultStep = pStep;
    }

    associatedCtrl.save = function(pNewAssociated) {
      var newAssociated = {
        firstName: associatedCtrl.firstName,
        secondName: associatedCtrl.secondName,
        lastName: associatedCtrl.lastName,
        secondlastName: associatedCtrl.secondlastName,
        legal: associatedCtrl.legal,
        email: associatedCtrl.email,
        associationTipe: associatedCtrl.associationTipe,
        descriptionAsso: associatedCtrl.descriptionAsso,
        accion: 'Se ha registrado una nueva asociacion',
        regDate: new Date()
      };
      var Validation = AssociationService.noRepeat(newAssociated);

      if (Validation === false) {
        AssociationService.setAssociated(newAssociated);
        init();
        clear();
        swal(
          'Registro exitoso!',
          '!',
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

    associatedCtrl.getInfo = function(pAssociated) {
      associatedCtrl._id = pAssociated._id;
      associatedCtrl.firstName = pAssociated.firstName;
      associatedCtrl.secondName = pAssociated.secondName;
      associatedCtrl.lastName = pAssociated.lastName;
      associatedCtrl.secondlastName = pAssociated.secondlastName;
      associatedCtrl.legal = pAssociated.legal;
      associatedCtrl.email = pAssociated.email;
      associatedCtrl.associationTipe = pAssociated.associationTipe;
      associatedCtrl.descriptionAsso = pAssociated.descriptionAsso;

      $("#modalAssociation").modal();
    };

    associatedCtrl.update = function() {
      var EditAssociated = {
        _id: associatedCtrl._id,
        firstName: associatedCtrl.firstName,
        secondName: associatedCtrl.secondName,
        lastName: associatedCtrl.lastName,
        secondlastName: associatedCtrl.secondlastName,
        legal: associatedCtrl.legal,
        email: associatedCtrl.email,
        associationTipe: associatedCtrl.associationTipe,
        descriptionAsso: associatedCtrl.descriptionAsso,
        accion: 'Se ha actualizado un nuevo asociación'
      };
      AssociationService.updateAssociated(EditAssociated).then(function(response) {
        loadAssociation();
        associatedCtrl.firstName = null;
        associatedCtrl.secondName = null;
        associatedCtrl.lastName = null;
        associatedCtrl.secondlastName = null;
        associatedCtrl.legal = null;
        associatedCtrl.email = null;
        associatedCtrl.associationTipe = null;
        associatedCtrl.descriptionAsso = null;
      });
      init();
      clear();
    };

    function clear() {
      associatedCtrl.firstName = '';
      associatedCtrl.secondName = '';
      associatedCtrl.lastName = '';
      associatedCtrl.secondlastName = '';
      associatedCtrl.legal = '';
      associatedCtrl.email = '';
      associatedCtrl.associationTipe = '';
      associatedCtrl.descriptionAsso = '';
      
    };
  };
})();
