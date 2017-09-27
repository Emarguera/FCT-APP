(function() {
  'use strict';
  angular
    .module('FCT-app')
    .controller('UserController', UserController);

  UserController.$inject = ['UserService'];

  function UserController(UserService) {
    var vm = this;
    vm.usuarios = [];
    loadProfessor();

    function loadProfessor(){
        UserService.getUsers().then(function (response){
          vm.usuarios = response.data;
          console.log(vm.usuarios);
          mostrar();
        })
      }
      function mostrar(){
          var userLogin = localStorage.getItem('lsLoginUser');
          var infoUser = UserService.userInfo(userLogin,vm.usuarios);
          vm.user = infoUser;
      }

      vm.getInfo = function(pUserInfo){
        vm._id = pUserInfo._id;

        $("#modalUser").modal();
      }
      vm.update = function () {
        var EditUserInfo ={
          _id: vm._id
        }
      }

    vm.LogOut = function() {
      window.location.href = '#!/login';
      UserService.sessionDestroy()
    }

  };

})();
