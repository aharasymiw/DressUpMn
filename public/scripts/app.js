var app = angular.module('app', ['auth0', 'angular-storage', 'angular-jwt',
'ngRoute', 'ngMaterial']);

app.run(function($rootScope, auth, store, jwtHelper, $location) {
  // This events gets triggered on refresh or URL change
  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }
  });
});

app.config(['authProvider', '$routeProvider', '$locationProvider',
function(authProvider, $routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: '../views/routes/home.html',
      controller: 'HomeController',
      requiresLogin: true
    }).when('/about', {
      templateUrl: '../views/routes/about.html',
      controller: 'AboutController',
      requiresLogin: true
    }).when('/doStuff', {
      templateUrl: '../views/routes/doStuff.html',
      controller: 'DoStuffController',
      requiresLogin: true
    }).when('/form', {
      templateUrl: '../views/routes/form.html',
      controller: 'FormController',
      requiresLogin: true
    }).when('/login', {
      templateUrl: '../views/login.html',
      controller: 'LoginController'
    }).when('/error', {
      templateUrl: '../views/routes/error.html',
      controller: 'ErrorController'
    }).otherwise({
      redirectTo: '/login'
    });

  authProvider.init({
    domain: 'dressupmn.auth0.com',
    clientID: '3PJOzGYro7Y69eXWwikD34gq7R0FClC3',
    callbackURL: location.href,
    // Here include the URL to redirect to if the user tries to access a resource when not authenticated.
    loginUrl: '/login'
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
