var app = angular.module('app', ['auth0', 'angular-storage', 'angular-jwt',
'ngRoute', 'ngMaterial']);

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

    }).when('/form', {
      templateUrl: '../views/routes/form.html',
      controller: 'FormController'

    }).when('/login', {
      templateUrl: '../views/routes/login.html',
      controller: 'LoginController'

    }).when('/error', {
      templateUrl: '../views/routes/error.html',
      controller: 'ErrorController'
    }).otherwise({
      redirectTo: '/login'
    });

  $locationProvider.html5Mode(true);

}]);


app.controller('sendData', ['$scope', '$http',
  function($scope, $http) {

  }]);

app.config(function(authProvider) {
  authProvider.init({
    domain: 'dressupmn.auth0.com',
    clientID: '3PJOzGYro7Y69eXWwikD34gq7R0FClC3'
  });
})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});

// "auth0-lock": "^8.1.5",

