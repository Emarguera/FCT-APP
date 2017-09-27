(function() {
  angular
    .module('FCT-app')
    .controller('studentController', studentController);

    studentController.$inject = ['UserService', 'AcademyService', 'RankingService'];

  function studentController(UserService, AcademyService,RankingService) {
    var userCtrl = this;
    userCtrl.date = new Date();
    loadAcademys();
    loadProfessor();

    function loadAcademys(){
        AcademyService.getAcademys().then(function (response) {
          userCtrl.academys = response.data;

        });
      }
      function loadProfessor(){
        UserService.getUsers().then(function (response){
          userCtrl.profesors = response.data;
        })
      }
    function init() {
      userCtrl.users = [];
      userCtrl.academys = [];
      userCtrl.to = {};
      userCtrl.profesors = [];
    }
    init();

    userCtrl.save = function() {
      var newUser = {
        role: 'alumno',
        firstName: userCtrl.firstName,
        secondName: userCtrl.secondName,
        lastName: userCtrl.lastName,
        secondlastName: userCtrl.secondlastName,
        identification: userCtrl.identification,
        phone: userCtrl.phone,
        email: userCtrl.email,
        birthday: userCtrl.birthday,
        age: userCtrl.age,
        direction: userCtrl.direction,
        weight: userCtrl.weight,
        weightCat: userCtrl.weightCat,
        rank: userCtrl.rank,
        academy: userCtrl.academy,
        status: userCtrl.status,
        gender: userCtrl.gender,
        password: 'Abc123',
        accion: 'Se ha registrado un nuevo estudiante',
        photo: 'http://res.cloudinary.com/blue-devs/image/upload/v1503728479/adduser_a%C3%B1adir_13238_iw1px5.png',
        regDate: new Date()
      }
      var userRaking = {
        role: 'alumno',
        firstName: userCtrl.firstName,
        secondName: userCtrl.secondName,
        lastName: userCtrl.lastName,
        secondlastName: userCtrl.secondlastName,
        identification: userCtrl.identification,
        age: userCtrl.age,
        weightCat: userCtrl.weightCat,
        score: 0
      }
      userCtrl.age = userCtrl.date.getFullYear() - userCtrl.birthday.getFullYear();
      newUser.age = userCtrl.age;
      var Validation =  UserService.noRepeat(newUser,userCtrl.profesors);
      if (Validation === false) {
        RankingService.setUsers(userRaking);
        UserService.setUsers(newUser);

      init();
      clean();

      swal(
      'Registro exitoso!',
      'Presiona el boton!',
      'success'
      )

      }else{
        swal(
      'Usuario ya se encuentra registrado!',
      '',
      'warning'
      )
      }

    }

    userCtrl.getInfo = function(puser) {
      userCtrl.firstName = puser.firstName;
      userCtrl.secondName = puser.secondName;
      userCtrl.lastName = puser.lastName;
      userCtrl.secondlastName = puser.secondlastName;
      userCtrl.identification = puser.identification;
      userCtrl.phone = puser.phone;
      userCtrl.email = puser.email;
      userCtrl.birthday = new Date(puser.birthday);
      userCtrl.age = puser.age;
      userCtrl.direction = puser.direction;
      userCtrl.weight = puser.weight;
      userCtrl.weightCat = puser.weightCat;
      userCtrl.rank = puser.rank;
      userCtrl.academy = puser.academy;
      userCtrl.status = puser.status;
      userCtrl.gender = puser.gender;
    }

    userCtrl.update = function() {
      var editedUser = {
        firstName: userCtrl.firstName,
        secondName: userCtrl.secondName,
        lastName: userCtrl.lastName,
        secondlastName: userCtrl.secondlastName,
        identification: userCtrl.identification,
        phone: userCtrl.phone,
        email: userCtrl.email,
        birthday: userCtrl.birthday,
        age: userCtrl.age,
        direction: userCtrl.direction,
        weight: userCtrl.weight,
        weightCat: userCtrl.weightCat,
        rank: userCtrl.rank,
        academy: userCtrl.academy,
        status: userCtrl.status,
        gender: userCtrl.gender,
        role: 'alumno',
        password: 'Abc12345',
        accion: 'Se ha actualizado un estudiante',
        photo: 'http://res.cloudinary.com/blue-devs/image/upload/v1503728479/adduser_a%C3%B1adir_13238_iw1px5.png'
      }

      UserService.updateUser(editedUser);
      init();
      clean();
    }

    function clean() {
      userCtrl.firstName = '';
      userCtrl.secondName = '';
      userCtrl.lastName = '';
      userCtrl.secondlastName = '';
      userCtrl.identification = '';
      userCtrl.phone = '';
      userCtrl.email = '';
      userCtrl.birthday = '';
      userCtrl.age = '';
      userCtrl.direction = '';
      userCtrl.weight = '';
      userCtrl.weightCat = '';
      userCtrl.rank = '';
      userCtrl.academy = '';
      userCtrl.status = '';
      userCtrl.gender = '';
      setTimeout(location.reload.bind(location), 1500);
    }
  }
})();
