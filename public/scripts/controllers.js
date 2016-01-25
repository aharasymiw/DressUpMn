(function() {
  app.controller('HomeController', ['$scope', '$http',
  function($scope, $http) {
  }]);

  app.controller('AboutController', ['$scope', '$http',
  function($scope, $http) {
  }]);

  app.controller('DoStuffController', ['$scope', '$http',
  function($scope, $http) {
  }]);

  app.controller('LoginController', ['$scope', '$http', 'auth', 'store',
  '$location', function($scope, $http, auth, store, $location) {
    $scope.login = function() {
      auth.signin({}, function(profile, token) {
        // Success callback
        store.set('profile', profile);
        store.set('token', token);
        $location.path('/home');   //This is what shows up after login
      }, function() {
        // Error callback
      });
    };
  }]);

  app.controller('ErrorController', ['$scope', '$http',
  function($scope, $http) {

  }]);

})();
