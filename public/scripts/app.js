var app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: '../views/routes/home.html',
      controller: 'HomeController'
    }).when('/about', {
      templateUrl: '../views/routes/about.html',
      controller: 'AboutController'
    }).when('/doStuff', {
      templateUrl: '../views/routes/doStuff.html',
      controller: 'DoStuffController'
    }).when('/error', {
      templateUrl: '../views/routes/error.html',
      controller: 'ErrorController'
    }).otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);

}]);
