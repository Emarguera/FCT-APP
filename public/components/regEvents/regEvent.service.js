(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('eventService', eventService);

  function eventService($http) {
    var events = [

    ];
    var publicAPI = {
      setEvents : _setEvents,
      getEvents : _getEvents,
    };
    return publicAPI;

    function _setEvents(pnewEvent) {
      //users.push(pUser);
      return $http.post('http://localhost:3000/api/event',pnewEvent)
    }

    function _getEvents() {
    return $http.get('http://localhost:3000/api/event');
    }

  }

})();
