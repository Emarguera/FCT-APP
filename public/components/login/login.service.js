(function() {
  angular
    .module('FCT-app')
    .service('loginService', loginService);

  function loginService() {
    var publicAPI = {
      CheckUser: _checkUser
    };
    return publicAPI;


    function _checkUser(puserLogin, pusers) {
      var listUsers = pusers;
      var nTamanno = listUsers.length;
      var rol = 0;
      for (var i = 0; i < nTamanno; i++) {
        if (puserLogin.email == listUsers[i].email && puserLogin.password == listUsers[i].password) {
          localStorage.setItem('lsLoginUser', (listUsers[i].email));
          switch (listUsers[i].role) {
            case 'administrador':
              rol = 1;
              break;
            case 'asistente':
              rol = 2;
              break;
            case 'profesor':
              rol = 3;
              break;
            case 'alumno':
              rol = 4;
              break;
            case 'consejo':
              rol = 5;
              break;
            default:
              rol = 0;
              break;
          }
        }
      }
      return rol;
    }
  }

})();
