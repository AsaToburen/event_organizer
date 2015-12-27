'use strict';

angular.module('meetup', ['ngRoute', 'geolocation'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
                controller: 'MainCtrl',
                templateUrl: './components/main/main.tmpl.html'
            })
            .when('/browse', {
                controller: 'MainCtrl',
                templateUrl: './components/main/browse.tmpl.html'
            })
            .when('/create', {
                controller: 'CreateCtrl',
                templateUrl: './components/create/create.tmpl.html'
            })
            .when('/dashboard', {
                controller: 'DashCtrl',
                templateUrl: './components/dashboard.tmpl.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                templateUrl: './components/auth/login.tmpl.html'
            })
            .when('/register', {
                controller: 'RegCtrl',
                templateUrl: './components/auth/register.tmpl.html'
            })
            .otherwise({
                redirectTo: '/'
            });


        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
