// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter',
    [
        'ionic',
        'application.controllers',
        'application.services',
        'user.controllers',
        'user.services'
    ]
)
/**
 * see documentation: https://www.parse.com/apps/quickstart#parse_data/web/existing
 *
 * SET THESE VALUES IF YOU WANT TO USE PARSE, COMMENT THEM OUT TO USE THE DEFAULT
 * SERVICE
 *
 * parse constants
 */
    .value('ParseConfiguration', {
        applicationId: "zrlNcIjMRDe1Wbv6W0e5RWyN6hnj8hQZiO2yGvQX",
        javascriptKey: "DG05UJqgfubV6Dp8Fw4nkmHwQsl2lhIQl2i63nIv"
    })
/**
 *
 */
    .config(function ($stateProvider, $urlRouterProvider) {

        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            //menu state
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'MainCtrl'
            })
            // create account state
            //has no leftMenu
            .state('signup', {
                url: "/signup",
                /*views: {
                    'menuContent' :{
                        templateUrl: "templates/user/signup.html",
                        controller: "SignUpController"
                    }
                }*/
                templateUrl: 'templates/user/signup.html',
                controller: "SignUpController"

            })
            // login state that is needed to log the user in after logout
            // or if there is no user object available
            //has no leftMenu
            .state('login', {
                url: "/login",
                /*views: {
                    'menuContent' :{
                        templateUrl: "templates/user/login.html",
                        controller: "LoginController"
                    }
                }*/
                templateUrl: 'templates/user/login.html',
                controller: "LoginController"
            })
            // forgot password state
            //has no leftMenu
            .state('forgot', {
                url: "/forgot",
                /*views: {
                    'menuContent' :{
                        templateUrl: "templates/user/forgot.html",
                        controller: "ForgotController"
                    }
                }*/
                templateUrl: 'templates/user/forgot.html',
                controller: "ForgotController"
            })
            // setup an abstract state for the tabs directive, check for a user
            // object here is the resolve, if there is no user then redirect the
            // user back to login state on the changeStateError
            .state('app.tab', {
                url: "/tab",
                abstract: true,
                //templateUrl: "templates/tabs.html",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tabs.html',
                        controller: 'TabsPageCtrl'
                    }
                },
                resolve: {
                    user: function (UserService) {
                        var value = UserService.init();
                        return value;
                    }
                }
            })

            // Each tab has its own nav history stack:
            .state('app.tab.list', {
                url: '/list',
                views: {
                    'tab-list': {
                        templateUrl: 'templates/tab-list.html',
                        controller: 'ListCtrl'
                    }
                }
            })
            .state('app.tab.list-detail', {
                url: '/list/:itemId',
                views: {
                    'tab-list': {
                        templateUrl: 'templates/list-detail.html',
                        controller: 'ListDetailCtrl'
                    }
                }
            })

            .state('app.tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/tab/list');

    })
    .run(function ($ionicPlatform, $rootScope, $state) {


        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {

                debugger;

                console.log('$stateChangeError ' + error && (error.debug || error.message || error));

                // if the error is "noUser" the go to login state
                if (error && error.error === "noUser") {
                    event.preventDefault();

                    $state.go('login', {});
                }
            });

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
