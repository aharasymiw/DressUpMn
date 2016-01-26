var app = angular.module('app', ['auth0', 'angular-storage', 'angular-jwt',
'ngRoute']);

app.config(['authProvider', '$routeProvider', '$locationProvider',
'$httpProvider', 'jwtInterceptorProvider', function(authProvider,
$routeProvider, $locationProvider, $httpProvider, jwtInterceptorProvider) {

  $routeProvider.
    when('/home', {
      templateUrl: '../views/routes/home.html',
      controller: 'HomeController',
      pageTitle: 'Home',
      requiresLogin: true
    }).when('/about', {
      templateUrl: '../views/routes/about.html',
      controller: 'AboutController',
      pageTitle: 'About',
      requiresLogin: true
    }).when('/doStuff', {
      templateUrl: '../views/routes/doStuff.html',
      controller: 'DoStuffController',
      pageTitle: 'Do Stuff',
      requiresLogin: true
    }).when('/form', {
      templateUrl: '../views/routes/form.html',
      controller: 'FormController',
      pageTitle: 'Client Form',
      requiresLogin: true
    }).when('/login', {
      templateUrl: '../views/login.html',
      controller: 'LoginController'
    }).when('/error', {
      templateUrl: '../views/routes/error.html',
      controller: 'ErrorController',
      pageTitle: 'Error!'
    }).otherwise({
      redirectTo: '/login'
    });

  $locationProvider.html5Mode(true);

  authProvider.init({
    domain: 'dressupmn.auth0.com',
    clientID: '3PJOzGYro7Y69eXWwikD34gq7R0FClC3',
    //callbackURL: location.href, ?
    // Here include the URL to redirect to if the user tries to access a resource when not authenticated.
    loginUrl: '/login'
  });

  // We're annotating this function so that the `store` is injected correctly when this file is minified
  jwtInterceptorProvider.tokenGetter = function(store) {
    // Return the saved token
    return store.get('token');
  };

  $httpProvider.interceptors.push('jwtInterceptor');
}]).run(function($rootScope, auth, store, jwtHelper, $location) {
  $rootScope.$on('$locationChangeStart', function() {
    if (!auth.isAuthenticated) {
      var token = store.get('token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          auth.authenticate(store.get('profile'), token);
        } else {
          $location.path('/login');
        }
      }
    }

  });
  auth.hookEvents();

}).controller('AppCtrl', function AppCtrl($scope, $location) {
  $scope.$on('$routeChangeSuccess', function(e, nextRoute) {
    if (nextRoute.$$route && angular.isDefined(nextRoute.$$route.pageTitle)) {
      $scope.pageTitle = nextRoute.$$route.pageTitle + ' | Auth0 Sample' ;
    }
  });
});

// "auth0-lock": "^8.1.5",
