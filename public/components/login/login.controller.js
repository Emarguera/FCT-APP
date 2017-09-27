(function() {
  angular
    .module('FCT-app')
    .controller('loginController', loginController);

  function loginController(loginService, UserService) {

    var vm = this;
    loadUsers();

    function loadUsers(){
        UserService.getUsers().then(function (response){
          vm.users = response.data;
        })
      }

    function init() {
      var divError = document.querySelector('#divError');
      divError.classList.add('ocultar');
      vm.users = [];
    }
    init();

    vm.Cerrar = function() {
      var Logueado = localStorage.getItem('lsLoginUser');
    }

    vm.GetUser = function() {
      var userLogin = {
        email: vm.email,
        password: vm.password
      }
      var userList = vm.users;
      var rol = 0;
      rol = loginService.CheckUser(userLogin, userList);
      switch (rol) {
        case 1:
          window.location.href = '#!/admin';
          break;
        case 2:
          window.location.href = '#!/assistant';
          break;
        case 3:
          window.location.href = '#!/professor';
          break;
        case 4:
          window.location.href = '#!/student';
          break;
        case 5:
          window.location.href = '#!/consejo'
          break;
        default:
          divError.innerHTML = 'Usuario o contraseña inválidos';
          divError.classList.remove('ocultar');
          break;
      }
    }
  }

})();
