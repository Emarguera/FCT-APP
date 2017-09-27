(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('UserService', UserService);

  UserService.$inject = ['$http'];
  function UserService($http){
    // var users = [{
    //   firstName: 'Andres',
    //   secondName: 'Josue',
    //   lastName: 'Vega',
    //   secondlastName: 'Gutierrez',
    //   identification: '305100526',
    //   phone: '85020374',
    //   email: 'avegag@ucenfotec.ac.cr',
    //   birthday: '07/6/1998',
    //   age: '18',
    //   direction: 'Cartago',
    //   academy: 'Yang Tang',
    //   status: 'activo',
    //   role: 'administrador',
    //   password: 'MonkeyD07',
    //   photo: 'http://res.cloudinary.com/blue-devs/image/upload/v1500529504/IMG_3576_o9ugut.jpg'
    // }, ];
    var publicAPI = {
      setUsers: _setUsers,
      getUsers: _getUsers,
      updateUser: _updateUser,
      noRepeat: _noRepeat,
      userInfo: _userInfo,
      sessionDestroy: _sessionDestroy
    };
    return publicAPI;

    function _setUsers(pUser) {
        return $http.post('http://localhost:3000/api/usersPost',pUser);
    }

    function _getUsers() {
      return $http.get('http://localhost:3000/api/usersGet');
    }

    function _updateUser(pobjUser) {
      return $http.put('http://localhost:3000/api/usersUpdate',pobjUser);
    }

    function _noRepeat(pEditUser,pList) {
      var userlist = pList;
      var Validation = false;
      for (var i = 0; i < userlist.length; i++) {
        if (userlist[i].identification == pEditUser.identification) {
          Validation = true;
        }
      }
      return Validation;
    }

    function _userInfo(puser,pList) {
      var userlist = pList;
      var userInfo = [];
      for (var i = 0; i < userlist.length; i++) {
        if (puser == userlist[i].email) {
          userInfo = userlist[i];
        }
      }
      return userInfo
    }

    function _sessionDestroy() {
      localStorage.removeItem('lsLoginUser');
    }
  }

})();
