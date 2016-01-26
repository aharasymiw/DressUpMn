(function() {
  app.controller('HomeController', ['$scope', '$http', 'auth', 'store',
  function($scope, $http, auth, store) {

  }]);

  app.controller('AboutController', ['$scope', '$http',
  function($scope, $http) {

  }]);

  app.controller('DoStuffController', ['$scope', '$http',
  function($scope, $http) {

  }]);

  app.controller('LoginController', ['$scope', 'auth', 'store',
  '$location', function($scope, auth, store, $location) {
    $scope.login = function() {
      auth.signin({}, function(profile, token) {
        // Success callback
        store.set('profile', profile);
        store.set('token', token);
        $location.path('/home');   //This is what shows up after login
      }, function(error) {
        console.log('There was an error logging in', error);
      });
    };
  }]);

  app.controller('FormController', ['$scope', '$http',
  function($scope, $http) {

  }]);

  app.controller('ErrorController', ['$scope', '$http',
  function($scope, $http) {

  }]);

  app.controller('NavController', ['$scope', '$http', 'auth', 'store',
  '$location', function($scope, $http, auth, store, $location) {
    $scope.logout = function() {
      alert('loged out');
      auth.signout();
      store.remove('profile');
      store.remove('token');
      $location.path('/login');
    };
  }]);

})();
