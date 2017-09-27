(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('RankingService', RankingService);

  function RankingService($http) {
    var userRaking = [];
    var publicAPI = {
      setUsers: _setUsers,
      getUsers: _getUsers,
      search: _search
    };
    return publicAPI;

    function _setUsers(pUser) {
     return $http.post('http://localhost:3000/api/usersPost',pUser);
    }

    function _getUsers() {
     return $http.get('http://localhost:3000/api/usersGet');
    }

    function _search(pFighter)  {
      var userlist = _getUsers();
      for (var i = 0; i < userlist.length; i++) {
        if (userlist[i].identification == pFighter.winner) {
          userlist[i].score = userlist[i].score + 1;
        }      
        localStorage.setItem('lsUsersRanking', JSON.stringify(userlist));
    }
  }
}

})();
