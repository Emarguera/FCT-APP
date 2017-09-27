(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('ProfesorController', ProfesorController);

  ProfesorController.$inject = ['UserService', 'AcademyService'];

  function ProfesorController(UserService, AcademyService) {
    var profesorCtrl = this;

    profesorCtrl.defaultStep = 1;
    profesorCtrl.date = new Date();
    loadProfessor();
    loadAcademys();

    function loadProfessor() {
      UserService.getUsers().then(function(response) {
        profesorCtrl.profesors = response.data;
      })
    }

    function loadAcademys() {
      AcademyService.getAcademys().then(function(response) {
        profesorCtrl.academys = response.data;

      });
    }

    function init() {
      profesorCtrl.profesor = [];
      profesorCtrl.academys = [];
    }
    init();

    profesorCtrl.activeStep = function(pStep) {
      return pStep == profesorCtrl.defaultStep;
    }

    profesorCtrl.setStep = function(pStep) {
      profesorCtrl.defaultStep = pStep;
    }

    profesorCtrl.save = function(pNewProfesor) {
      var newProfesor = {
        firstName: profesorCtrl.firstName,
        secondName: profesorCtrl.secondName,
        lastName: profesorCtrl.lastName,
        secondlastName: profesorCtrl.secondlastName,
        identification: profesorCtrl.identification,
        phone: profesorCtrl.phone,
        email: profesorCtrl.email,
        direction: profesorCtrl.direction,
        birthday: profesorCtrl.birthday,
        age: profesorCtrl.age,
        academy: profesorCtrl.academy,
        status: profesorCtrl.status,
        gender: profesorCtrl.gender,
        role: 'profesor',
        password: 'Abc123',
        accion: 'Se ha registrado un nuevo profesor',
        photo: 'http://res.cloudinary.com/blue-devs/image/upload/v1503728479/adduser_a%C3%B1adir_13238_iw1px5.png',
        regDate: new Date()
      };
      profesorCtrl.age = profesorCtrl.date.getFullYear() - profesorCtrl.birthday.getFullYear();
      newProfesor.age = profesorCtrl.age;
      var LimitAge = 18;
      var Validation = UserService.noRepeat(newProfesor, profesorCtrl.profesors);
      if (Validation === false && LimitAge <= newProfesor.age) {
        UserService.setUsers(newProfesor);
        swal(
          'Registro exitoso!',
          '',
          'success'
        )
        init();
        clear();
      } else {
        swal(
          'Usuario ya se encuentra registrado!',
          '',
          'warning'
        )

      }
    };

    profesorCtrl.getInfo = function(pProfesor) {
      profesorCtrl._id = pProfesor._id;
      profesorCtrl.firstName = pProfesor.firstName;
      profesorCtrl.secondName = pProfesor.secondName;
      profesorCtrl.lastName = pProfesor.lastName;
      profesorCtrl.secondlastName = pProfesor.secondlastName;
      profesorCtrl.identification = pProfesor.identification;
      profesorCtrl.phone = pProfesor.phone;
      profesorCtrl.email = pProfesor.email;
      profesorCtrl.birthday = new Date(pProfesor.birthday);
      profesorCtrl.age = pProfesor.age;
      profesorCtrl.direction = pProfesor.direction;
      profesorCtrl.academy = pProfesor.academy;
      profesorCtrl.status = pProfesor.status;
      profesorCtrl.gender = pProfesor.gender;
      profesorCtrl.weightCat = pProfesor.weightCat
      profesorCtrl.rank = pProfesor.rank

      $("#modalProfessors").modal();
    };
    profesorCtrl.getInfoStudent = function(pProfesor) {
      profesorCtrl._id = pProfesor._id;
      profesorCtrl.firstName = pProfesor.firstName;
      profesorCtrl.secondName = pProfesor.secondName;
      profesorCtrl.lastName = pProfesor.lastName;
      profesorCtrl.secondlastName = pProfesor.secondlastName;
      profesorCtrl.identification = pProfesor.identification;
      profesorCtrl.phone = pProfesor.phone;
      profesorCtrl.email = pProfesor.email;
      profesorCtrl.birthday = new Date(pProfesor.birthday);
      profesorCtrl.age = pProfesor.age;
      profesorCtrl.direction = pProfesor.direction;
      profesorCtrl.academy = pProfesor.academy;
      profesorCtrl.status = pProfesor.status;
      profesorCtrl.gender = pProfesor.gender;
      $("#modalProfessors").modal();
    };

    profesorCtrl.update = function() {
      var EditProfessor = {
        _id: profesorCtrl._id,
        firstName: profesorCtrl.firstName,
        secondName: profesorCtrl.secondName,
        lastName: profesorCtrl.lastName,
        secondlastName: profesorCtrl.secondlastName,
        identification: profesorCtrl.identification,
        phone: profesorCtrl.phone,
        email: profesorCtrl.email,
        direction: profesorCtrl.direction,
        birthday: profesorCtrl.birthday,
        age: profesorCtrl.age,
        academy: profesorCtrl.academy,
        status: profesorCtrl.status,
        gender: profesorCtrl.gender,
        role: 'profesor',
        password: 'Abc123',
        accion: 'Se ha actualizado un profesor',
        photo: 'http://res.cloudinary.com/blue-devs/image/upload/v1503728479/adduser_a%C3%B1adir_13238_iw1px5.png'
      };
      UserService.updateUser(EditProfessor).then(function(response) {
        loadProfessor();
        profesorCtrl.firstName = null;
        profesorCtrl.secondName = null;
        profesorCtrl.lastName = null;
        profesorCtrl.secondlastName = null;
        profesorCtrl.identification = null;
        profesorCtrl.phone = null;
        profesorCtrl.email = null;
        profesorCtrl.birthday = null;
        profesorCtrl.age = null;
        profesorCtrl.direction = null;
        profesorCtrl.academy = null;
        profesorCtrl.status = null;
        profesorCtrl.gender = null;
      });
      init();
      clear();
    };
    profesorCtrl.updateStudent = function() {
      var EditProfessor = {
        _id: profesorCtrl._id,
        firstName: profesorCtrl.firstName,
        secondName: profesorCtrl.secondName,
        lastName: profesorCtrl.lastName,
        secondlastName: profesorCtrl.secondlastName,
        identification: profesorCtrl.identification,
        phone: profesorCtrl.phone,
        email: profesorCtrl.email,
        direction: profesorCtrl.direction,
        birthday: profesorCtrl.birthday,
        age: profesorCtrl.age,
        academy: profesorCtrl.academy,
        status: profesorCtrl.status,
        gender: profesorCtrl.gender,
        weightCat: profesorCtrl.weightCat,
        rank: profesorCtrl.rank,
        regDate: new Date(),
        role: 'alumno',
        password: 'Abc123',
        accion: 'Se ha actualizado un estudiante'
      };
      UserService.updateUser(EditProfessor).then(function(response) {
        loadProfessor();
        profesorCtrl.firstName = null;
        profesorCtrl.secondName = null;
        profesorCtrl.lastName = null;
        profesorCtrl.secondlastName = null;
        profesorCtrl.identification = null;
        profesorCtrl.phone = null;
        profesorCtrl.email = null;
        profesorCtrl.birthday = null;
        profesorCtrl.age = null;
        profesorCtrl.direction = null;
        profesorCtrl.status = null;
        profesorCtrl.gender = null;
      });
      init();
      clear();
    };

    function clear() {
      profesorCtrl.firstName = '';
      profesorCtrl.secondName = '';
      profesorCtrl.lastName = '';
      profesorCtrl.secondlastName = '';
      profesorCtrl.identification = '';
      profesorCtrl.phone = '';
      profesorCtrl.email = '';
      profesorCtrl.birthday = '';
      profesorCtrl.age = '';
      profesorCtrl.direction = '';
      profesorCtrl.academy = '';
      profesorCtrl.status = '';
      profesorCtrl.gender = '';
      setTimeout(location.reload.bind(location), 1500);
    };
  };
})();
