(function() {
  'use strict';
  angular
    .module('FCT-app')
    .service('eventPropService', eventPropService);

  function eventPropService($http) {

    var eventProp = [{}, ];

    var publicAPI = {
      setEventProps: _setEventProps,
      getEventProps: _getEventProps,
      objUpdateEventProp: _objUpdateEventProp,
      checkEventProp: _checkEventProp
    };
    return publicAPI;

    function _setEventProps(pEventProp) {
      return $http.post('http://localhost:3000/api/propevents', pEventProp)
    }

    function _getEventProps() {
      return $http.get('http://localhost:3000/api/propevents');
    }

    function _objUpdateEventProp(pEventProp) {
      return $http.put('http://localhost:3000/api/propeventsUpdate', pEventProp);

    }

    function _checkEventProp(pEventProp) {
      var listEventProp = _getEventProps();
      var validate = false;
      for (var i = 0; i < listEventProp.length; i++) {
        if (listEventProp[i].eventPropName == pEventProp.eventPropName) {
          validate = true;
        }
      }
      return validate;
    }

  }

})();
