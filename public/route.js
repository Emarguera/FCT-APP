(function() {
  'use strict'
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS', 'ngMessages', 'ngFileUpload'])
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: './components/landing/landing.view.html',
      })
      .state('admin', {
        url: '/admin',
        templateUrl: './components/admin/admin.view.html',
        css: './css/styleAdmin.css'

      })
      .state('login',{
      url: '/login',
      templateUrl: './components/login/login.view.html',
      css : './css/styleLogin.css',
      resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/login/login.controller.js')
          }]
        },
        controller: 'loginController',
        controllerAs: 'vm'
    })
      .state('regEvent', {
        url: '/regEvent',
        templateUrl: './components/regEvents/regEvent.view.html',
        css: ['./css/styleReg.css', './css/styleDatepicker.css'],
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regEvents/regEvent.controller.js')
          }]
        },
        controller: 'eventController',
        controllerAs: 'academyctrl'
      })
      .state('regAcademys', {
        url: '/regAcademys',
        templateUrl: './components/regAcademys/regAcademys.view.html',
        css: './css/styleAcademys.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regAcademys/regAcademys.controller.js')
          }]
        },
        controller: 'AcademyController',
        controllerAs: 'eventCtrl'
      })
      .state('academysList', {
        url: '/academysList',
        templateUrl: './components/regAcademys/academysList.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regAcademys/regAcademys.controller.js')
          }]
        },
        controller: 'AcademyController',
        controllerAs: 'academyctrl'
      })
      .state('regProfessor', {
        url: '/regProfessor',
        templateUrl: 'components/regProfessor/regProfessor.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
          }]
        },
        controller: 'ProfesorController',
        controllerAs: 'ctrl'
      })
      .state('userList', {
        url: '/userList',
        templateUrl: './components/userList/userList.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
          }]
        },
        controller: 'ProfesorController',
        controllerAs: 'ctrl'
      })
      .state('regStudent', {
        url: '/regStudent',
        templateUrl: './components/regStudent/regStudent.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regStudent/student.controller.js')
          }]
        },
        controller: 'studentController',
        controllerAs: 'ctrl'
      })
      .state('professor', {
        url: '/professor',
        templateUrl: './components/professor/professor.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/userController/user.controller.js')
          }]
        },
        controller: 'UserController',
        controllerAs: 'vm'
      })
      .state('student', {
        url: '/student',
        templateUrl: './components/student/student.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/userController/user.controller.js')
          }]
        },
        controller: 'UserController',
        controllerAs: 'vm'
      })
      .state('regSponsor', {
        url: '/regSponsor',
        templateUrl: './components/regSponsor/regSponsor.view.html',
        css: './css/styleSponsor.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regSponsor/regSponsor.controller.js')
          }]
        },
        controller: 'sponsorController',
        controllerAs: 'sponsorctrl'
      })
      .state('inscription', {
        url: '/inscription',
        templateUrl: './components/inscription/inscription.view.html',
         css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/inscription/inscription.controller.js')
          }]
        },
        controller: 'inscriptionController',
        controllerAs: 'ctrl'
      })
      .state('competitorsEvents', {
        url: '/competitorsEvents',
        css: './css/styleReg.css',
        templateUrl: './components/competitorsEvents/competitorsEvents.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/competitorsEvents/competitorsEvents.controller.js')
          }]
        },
        controller: 'consultController',
        controllerAs: 'ctrl'
      })
      .state('consultEvent', {
        url: '/consultEvent',
        templateUrl: './components/regEvents/consultEvent.view.html',
        css: './css/styleLists.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regEvents/regEvent.controller.js')
          }]
        },
        controller: 'eventController',
        controllerAs: 'eventCtrl'
      })
      .state('regFight', {
        url: '/regFight',
        templateUrl: './components/regFight/regFight.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regFight/regFight.controller.js')
          }]
        },
        controller: 'fightController',
        controllerAs: 'ctrl'
      })
      .state('fightList', {
        url: '/fightList',
        templateUrl: './components/regFight/fightList.view.html',
        css: './css/sponsorList.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regFight/regFight.controller.js')
          }]
        },
        controller: 'fightController',
        controllerAs: 'ctrl'
      })
      .state('ranking', {
        url: '/ranking',
        templateUrl: './components/ranking/ranking.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/ranking/ranking.controller.js')
          }]
        },
        controller: 'rankingController',
        controllerAs: 'ctrl'
      })
      .state('weight', {
        url: '/weight',
        templateUrl: './components/weight/weight.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/weight/weight.controller.js')
          }]
        },
        controller: 'weightController',
        controllerAs: 'ctrl'
      })
      .state('propEvent', {
        url: '/propEvent',
        templateUrl: './components/propEvents/propEvent.view.html',
        css: ['./css/styleReg.css', './css/styleDatepicker.css'],
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/propEvents/propEvent.controller.js')
          }]
        },
        controller: 'eventPropController',
        controllerAs: 'eventPropCtrl'
      })
      .state('reserve',{
          url: '/reserve',
          templateUrl: './components/reserve/reserve.view.html',
          resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('./components/reserve/reserve.controller.js')
              }]
            },
            controller: 'reserveController',
            controllerAs: 'reservectrl'
        })
      .state('profile',{
          url: '/profile',
          templateUrl: './components/profile/profile.view.html',

        })
      .state('consultPropEvent', {
        url: '/consultPropEvent',
        templateUrl: './components/propEvents/consultPropEvent.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/propEvents/propEvent.controller.js')
          }]
        },
        controller: 'eventPropController',
        controllerAs: 'eventPropCtrl'
      })
      .state('regAssociation', {
        url: '/regAssociation',
        templateUrl: 'components/regAssociation/regAssociation.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regAssociation/regAssociation.controller.js')
          }]
        },
        controller: 'AssociationController',
        controllerAs: 'ctrl'
      })

      // inicio de route de vistas de logbook

      .state('logbook', {
        url: '/logbook',
        templateUrl: './components/logbook/logbook.view.html',
        css: ['./css/styleLists.css', './css/styleLogbook.css'],
        resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load(['./components/regProfessor/regProfessor.controller.js', './components/regAcademys/regAcademys.controller.js', './components/regEvents/regEvent.controller.js', './components/regSponsor/regSponsor.controller.js', './components/regAssociation/regAssociation.controller.js'])
              }]
            },
      })
      .state('logbookAcademy', {
        url: '/logbookAcademy',
        templateUrl: './components/logbook/logbookAcademy.html',
        css: ['./css/styleLists.css', './css/styleLogbook.css'],
        resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load(['./components/regProfessor/regProfessor.controller.js', './components/regAcademys/regAcademys.controller.js', './components/regEvents/regEvent.controller.js', './components/regSponsor/regSponsor.controller.js', './components/regAssociation/regAssociation.controller.js'])
              }]
            },
      })
      .state('logbookEvent', {
        url: '/logbookEvent',
        templateUrl: './components/logbook/logbookEvent.html',
        css: ['./css/styleLists.css', './css/styleLogbook.css'],
        resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load(['./components/regProfessor/regProfessor.controller.js', './components/regAcademys/regAcademys.controller.js', './components/regEvents/regEvent.controller.js', './components/regSponsor/regSponsor.controller.js', './components/regAssociation/regAssociation.controller.js'])
              }]
            },
      })
      .state('logbookAsoc', {
        url: '/logbookAsoc',
        templateUrl: './components/logbook/logbookAsoc.html',
        css: ['./css/styleLists.css', './css/styleLogbook.css'],
        resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load(['./components/regProfessor/regProfessor.controller.js', './components/regAcademys/regAcademys.controller.js', './components/regEvents/regEvent.controller.js', './components/regSponsor/regSponsor.controller.js', './components/regAssociation/regAssociation.controller.js'])
              }]
            },
      })
      .state('logbookPlace', {
        url: '/logbookPlace',
        templateUrl: './components/logbook/logbookPlace.html',
        css: ['./css/styleLists.css', './css/styleLogbook.css'],
        resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load(['./components/regProfessor/regProfessor.controller.js', './components/regAcademys/regAcademys.controller.js', './components/regEvents/regEvent.controller.js', './components/regSponsor/regSponsor.controller.js', './components/regAssociation/regAssociation.controller.js'])
              }]
            },
      })
      .state('logbookSponsor', {
        url: '/logbookSponsor',
        templateUrl: './components/logbook/logbookSponsor.html',
        css: ['./css/styleLists.css', './css/styleLogbook.css'],
        resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load(['./components/regProfessor/regProfessor.controller.js', './components/regAcademys/regAcademys.controller.js', './components/regEvents/regEvent.controller.js', './components/regSponsor/regSponsor.controller.js', './components/regAssociation/regAssociation.controller.js'])
              }]
            },
      })

      // fin de route de vistas de logbook


      .state('regPlaces', {
        url: '/regPlaces',
        templateUrl: './components/regPlaces/regPlaces.view.html',
        css: './css/styleAcademys.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regPlaces/regPlaces.controller.js')
          }]
        },
        controller: 'PlacesController',
        controllerAs: 'placesctrl'
        })
      .state('professorList', {
        url: '/professorList',
        templateUrl: 'components/regProfessor/professorList.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
          }]
        },
        controller: 'ProfesorController',
        controllerAs: 'ctrl'
        })
      .state('placesList', {
        url: '/placesList',
        templateUrl: './components/regPlaces/PlacesList.view.html',
        css: './css/styleCard.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regPlaces/regPlaces.controller.js')
          }]
        },
        controller: 'PlacesController',
        controllerAs: 'placesctrl'
        })
      .state('associationList', {
        url: '/associationList',
        templateUrl: 'components/regAssociation/associationList.view.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regAssociation/regAssociation.controller.js')
          }]
        },
        controller: 'AssociationController',
        controllerAs: 'ctrl'
      })
      .state('sponsorList', {
        url: '/sponsorList',
        templateUrl: 'components/regSponsor/sponsorList.html',
        css: './css/sponsorList.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regSponsor/regSponsor.controller.js')
          }]
        },
        controller: 'sponsorController',
        controllerAs: 'sponsorctrl'
        })
        .state('studentList', {
          url: '/studentList',
          templateUrl: 'components/regStudent/studentList.html',
          css: './css/styleReg.css',
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
            }]
          },
          controller: 'ProfesorController',
          controllerAs: 'ctrl'
          })
        .state('assistant', {
        url: '/assistant',
        templateUrl: './components/assistant/assistant.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/userController/user.controller.js')
          }]
        },
        controller: 'UserController',
        controllerAs: 'vm'
      })

        //------Vistas Duplicadas ---------

        .state('regStudent-Professor', {
        url: '/regStudent-Professor',
        templateUrl: './components/regStudent/regStudent.view.professor.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regStudent/student.controller.js')
          }]
        },
        controller: 'studentController',
        controllerAs: 'ctrl'
      })
      .state('regStudent-Assistant', {
      url: '/regStudent-Assistant',
      templateUrl: './components/regStudent/regStudent.view.assistant.html',
      css: './css/styleReg.css',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load('./components/regStudent/student.controller.js')
        }]
      },
      controller: 'studentController',
      controllerAs: 'ctrl'
    })
      .state('inscription-Professor', {
        url: '/inscription-Professor',
        templateUrl: './components/inscription/inscription.view.professor.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/inscription/inscription.controller.js')
          }]
        },
        controller: 'inscriptionController',
        controllerAs: 'ctrl'
      })
      .state('inscription-Assistant', {
        url: '/inscription-Assistant',
        templateUrl: './components/inscription/inscription.view.assistant.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/inscription/inscription.controller.js')
          }]
        },
        controller: 'inscriptionController',
        controllerAs: 'ctrl'
      })

      .state('consultEvent-Professor', {
        url: '/consultEvent-Professor',
        templateUrl: './components/regEvents/consultEvent.view.professor.html',
        css: './css/styleLists.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regEvents/regEvent.controller.js')
          }]
        },
        controller: 'eventController',
        controllerAs: 'eventCtrl'
      })

      .state('consultEvent-Assistant', {
        url: '/consultEvent-Assistant',
        templateUrl: './components/regEvents/consultEvent.view.assistant.html',
        css: './css/styleLists.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regEvents/regEvent.controller.js')
          }]
        },
        controller: 'eventController',
        controllerAs: 'eventCtrl'
      })

      .state('consultEvent-Student', {
        url: '/consultEvent-Student',
        templateUrl: './components/regEvents/consultEvent.view.student.html',
        css: './css/styleLists.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regEvents/regEvent.controller.js')
          }]
        },
        controller: 'eventController',
        controllerAs: 'eventCtrl'
      })

      .state('academysList-Professor', {
        url: '/academysList-Professor',
        templateUrl: './components/regAcademys/academysList.view.professor.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regAcademys/regAcademys.controller.js')
          }]
        },
        controller: 'AcademyController',
        controllerAs: 'academyctrl'
      })

      .state('academysList-Student', {
        url: '/academysList-Student',
        templateUrl: './components/regAcademys/academysList.view.student.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regAcademys/regAcademys.controller.js')
          }]
        },
        controller: 'AcademyController',
        controllerAs: 'academyctrl'
      })

      .state('academysList-Assistant', {
        url: '/academysList-Assistant',
        templateUrl: './components/regAcademys/academysList.view.assistant.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regAcademys/regAcademys.controller.js')
          }]
        },
        controller: 'AcademyController',
        controllerAs: 'academyctrl'
      })

      .state('ranking-Professor', {
        url: '/ranking-Professor',
        templateUrl: './components/ranking/ranking.view.professor.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/ranking/ranking.controller.js')
          }]
        },
        controller: 'rankingController',
        controllerAs: 'ctrl'
      })

      .state('ranking-Assistant', {
        url: '/ranking-Assistant',
        templateUrl: './components/ranking/ranking.view.assistant.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/ranking/ranking.controller.js')
          }]
        },
        controller: 'rankingController',
        controllerAs: 'ctrl'
      })

      .state('ranking-Student', {
        url: '/ranking-Student',
        templateUrl: './components/ranking/ranking.view.student.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/ranking/ranking.controller.js')
          }]
        },
        controller: 'rankingController',
        controllerAs: 'ctrl'
      })


      .state('competitorsEvents-Professor', {
        url: '/competitorsEvents-Professor',
        templateUrl: './components/competitorsEvents/competitorsEvents.view.professor.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/competitorsEvents/competitorsEvents.controller.js')
          }]
        },
        controller: 'consultController',
        controllerAs: 'ctrl'
      })

      .state('competitorsEvents-Assistant', {
        url: '/competitorsEvents-Assistant',
        templateUrl: './components/competitorsEvents/competitorsEvents.view.assistant.html',
        css: './css/styleReg.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/competitorsEvents/competitorsEvents.controller.js')
          }]
        },
        controller: 'consultController',
        controllerAs: 'ctrl'
      })


      // .state('fightList-Professor', {
      //   url: '/fightList-Professor',
      //   templateUrl: './components/regFight/fightList.view.professor.html',
      //   css: './css/styleRegister.css',
      //   resolve: {
      //     load: ['$ocLazyLoad', function($ocLazyLoad) {
      //       return $ocLazyLoad.load('./components/regFight/regFight.controller.js')
      //     }]
      //   },
      //   controller: 'fightController',
      //   controllerAs: 'ctrl'
      // })
      //
      // .state('fightList-Assistant', {
      //   url: '/fightList-Assistant',
      //   templateUrl: './components/regFight/fightList.view.assistant.html',
      //   css: './css/styleRegister.css',
      //   resolve: {
      //     load: ['$ocLazyLoad', function($ocLazyLoad) {
      //       return $ocLazyLoad.load('./components/regFight/regFight.controller.js')
      //     }]
      //   },
      //   controller: 'fightController',
      //   controllerAs: 'ctrl'
      // })

      .state('reserve-Professor',{
          url: '/reserve-Professor',
          templateUrl: './components/reserve/reserve.view.professor.html',
          css : './css/reserveStyle.css',
          resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('./components/reserve/reserve.controller.js')
              }]
            },
            controller: 'reserveController',
            controllerAs: 'reservectrl'
        })
      .state('reserve-Student',{
          url: '/reserve-Student',
          templateUrl: './components/reserve/reserve.view.student.html',
          css : './css/reserveStyle.css',
          resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('./components/reserve/reserve.controller.js')
              }]
            },
            controller: 'reserveController',
            controllerAs: 'reservectrl'
        })
        .state('reserve-Assistant',{
            url: '/reserve-Assistant',
            templateUrl: './components/reserve/reserve.view.assistant.html',
            css : './css/reserveStyle.css',
            resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad){
                  return $ocLazyLoad.load('./components/reserve/reserve.controller.js')
                }]
              },
              controller: 'reserveController',
              controllerAs: 'reservectrl'
          })
          .state('studentList-Professor', {
             url: '/studentList-Professor',
             templateUrl: 'components/regStudent/studentList.view.professor.html',
             css: './css/styleReg.css',
             resolve: {
               load: ['$ocLazyLoad', function($ocLazyLoad) {
                 return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
               }]
             },
             controller: 'ProfesorController',
             controllerAs: 'ctrl'
          })
        // Asistente vistas duplicadas registros
          .state('regProfessor-Assistant', {
              url: '/regProfessor-Assistant',
              templateUrl: 'components/regProfessor/regProfessor.view.assistant.html',
              css: './css/styleReg.css',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
                }]
              },
              controller: 'ProfesorController',
              controllerAs: 'ctrl'
          })
          .state('regAcademys-Assistant', {
              url: '/regAcademys-Assistant',
              templateUrl: './components/regAcademys/regAcademys.assistant.view.html',
              css: './css/styleAcademys.css',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regAcademys/regAcademys.controller.js')
                }]
              },
              controller: 'AcademyController',
              controllerAs: 'eventCtrl'
          })
          .state('regAssociation-Assistant', {
              url: '/regAssociation-Assistant',
              templateUrl: 'components/regAssociation/regAssociation.view.assistant.html',
              css: './css/styleReg.css',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regAssociation/regAssociation.controller.js')
                }]
              },
              controller: 'AssociationController',
              controllerAs: 'ctrl'
          })
          .state('regFight-Assistant', {
              url: '/regFight-Assistant',
              templateUrl: './components/regFight/regFight.view.assistant.html',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regFight/regFight.controller.js')
                }]
              },
              controller: 'fightController',
              controllerAs: 'ctrl'
          })
          .state('regEvent-Assistant', {
              url: '/regEvent-Assistant',
              templateUrl: './components/regEvents/regEvent.view.assistant.html',
              css: ['./css/styleReg.css', './css/styleDatepicker.css'],
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regEvents/regEvent.controller.js')
                }]
              },
              controller: 'eventController',
              controllerAs: 'academyctrl'
          })
          .state('regPlaces-Assistant', {
              url: '/regPlaces-Assistant',
              templateUrl: './components/regPlaces/regPlaces.view.assistant.html',
              css: './css/styleAcademys.css',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regPlaces/regPlaces.controller.js')
                }]
              },
              controller: 'PlacesController',
              controllerAs: 'placesctrl'
          })
          .state('regSponsor-Asistant', {
              url: '/regSponsor-Asistant',
              templateUrl: './components/regSponsor/regSponsor.view.assistant.html',
              css: './css/styleSponsor.css',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regSponsor/regSponsor.controller.js')
                }]
              },
              controller: 'sponsorController',
              controllerAs: 'sponsorctrl'
          })
          // vistas duplicadas asistente listados
         .state('professorList-Assistant', {
              url: '/professorList-Assistant',
              templateUrl: 'components/regProfessor/professorList.view.assistant.html',
              css: './css/styleReg.css',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
                }]
              },
              controller: 'ProfesorController',
              controllerAs: 'ctrl'
          })
          .state('placesList-Assistant', {
              url: '/placesList-Assistant',
              templateUrl: './components/regPlaces/PlacesList.view.assistant.html',
              css: './css/styleCard.css',
              resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load('./components/regPlaces/regPlaces.controller.js')
                }]
              },
              controller: 'PlacesController',
              controllerAs: 'placesctrl'
           })
          .state('weight-Assistant', {
             url: '/weight-Assistant',
             templateUrl: './components/weight/weight.view.assistant.html',
             css: './css/styleReg.css',
             resolve: {
               load: ['$ocLazyLoad', function($ocLazyLoad) {
                 return $ocLazyLoad.load('./components/weight/weight.controller.js')
               }]
             },
             controller: 'weightController',
             controllerAs: 'ctrl'
           })
          .state('studentList-Assistant', {
             url: '/studentList-Assistant',
             templateUrl: 'components/regStudent/studentList.view.assistant.html',
             css: './css/styleReg.css',
             resolve: {
               load: ['$ocLazyLoad', function($ocLazyLoad) {
                 return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
               }]
             },
             controller: 'ProfesorController',
             controllerAs: 'ctrl'
          })
          .state('sponsorList-Assistant', {
             url: '/sponsorList-Assistant',
             templateUrl: 'components/regSponsor/sponsorList.view.assistant.html',
             css: './css/sponsorList.css',
             resolve: {
               load: ['$ocLazyLoad', function($ocLazyLoad) {
                 return $ocLazyLoad.load('./components/regSponsor/regSponsor.controller.js')
               }]
             },
             controller: 'sponsorController',
             controllerAs: 'sponsorctrl'
           })
          .state('associationList-Assistant', {
            url: '/associationList-Assistant',
            templateUrl: 'components/regAssociation/associationList.view.assistant.html',
            css: './css/styleReg.css',
            resolve: {
              load: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('./components/regAssociation/regAssociation.controller.js')
              }]
            },
            controller: 'AssociationController',
            controllerAs: 'ctrl'
          })
          .state('userList-Assistant', {
             url: '/userList-Assistant',
             templateUrl: './components/userList/userList.view.assistant.html',
             css: './css/styleReg.css',
             resolve: {
               load: ['$ocLazyLoad', function($ocLazyLoad) {
                 return $ocLazyLoad.load('./components/regProfessor/regProfessor.controller.js')
               }]
             },
             controller: 'ProfesorController',
             controllerAs: 'ctrl'
           })
          .state('propEvent-Landing', {
        url: '/propEvent-Landing',
        templateUrl: './components/propEvents/propEvent.landing.view.html',
        css: ['./css/styleReg.css', './css/styleDatepicker.css'],
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/propEvents/propEvent.controller.js')
          }]
        },
        controller: 'eventPropController',
        controllerAs: 'eventPropCtrl'
      })
// vista de galeria
.state('gallery', {
             url: '/gallery',
             templateUrl: './components/gallery/gallery.view.html',
             css: './css/styleGallery.css'
           })
.state('galleryLanding', {
             url: '/galleryLanding',
             templateUrl: './components/gallery/gallery.landing.view.html',
             css: './css/styleGallery.css'
           })
.state('galleryProfessor', {
             url: '/galleryProfessor',
             templateUrl: './components/gallery/gallery.professor.view.html',
             css: './css/styleGallery.css'
           })
.state('galleryStudent', {
             url: '/galleryStudent',
             templateUrl: './components/gallery/gallery.student.view.html',
             css: './css/styleGallery.css'
           })
.state('galleryAssistant', {
             url: '/galleryAssistant',
             templateUrl: './components/gallery/gallery.assistent.view.html',
             css: './css/styleGallery.css'
           })
.state('consultEvent-landing', {
        url: '/consultEvent-landing',
        templateUrl: './components/regEvents/consultEvent.view.landing.html',
        css: './css/styleLists.css',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('./components/regEvents/regEvent.controller.js')
          }]
        },
        controller: 'eventController',
        controllerAs: 'eventCtrl'
      })

    $urlRouterProvider.otherwise('/landing');
  };
})();
