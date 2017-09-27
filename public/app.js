(function() {
  'use strict';
  angular
    .module('FCT-app', ['appRoutes', 'ngMaterial', 'ngFileUpload', 'ngMap', 'smDateTimeRangePicker'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('light-blue');
    })

    .run(function($rootScope, $location, $state, UserService, loginService) {

      $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        var isLogin = localStorage.getItem('lsLoginUser');
        var publicRoutes = ['/landing', '/login','/reserve-landing'];
        var authRequired = true;
        var path = $location.path();

        angular.forEach(publicRoutes, function(publicRoute, key) {
          if (publicRoute === path) {
            authRequired = false;
          };
        });

        if (authRequired && !isLogin) {
          e.preventDefault();
          // window.history.forward(1);
          $location.path('/login');
        };
        //
        // // now, redirect only not authenticated
        //
        // var userInfo = authenticationSvc.getUserInfo();
        //
        // if(userInfo.authenticated === false) {
        //     e.preventDefault(); // stop current execution
        //     $state.go('login'); // go to login
        // }
      });
    });

    function appCtrl($mdDialog){
      var self = this;
        self.show= function(ev){
          $mdDialog.show({
            templateUrl: 'temp.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false
          });
        }
      }

  //red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
})();
