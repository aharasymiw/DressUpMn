var app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: '../views/routes/home.html',
      controller: 'DefaultController'
    }).when('/about', {
      templateUrl: '.../views/routes/about.html',
      controller: 'AboutController'
    }).when('/error', {
      templateUrl: '../views/routes/error.html',
      controller: 'ErrorController'
    }).when('/error', {
      templateUrl: '../views/routes/doStuff.html',
      controller: 'DoStuffController'
    }).otherwise({
      redirectTo: 'home'
    });

  $locationProvider.html5Mode(true);

}]);
