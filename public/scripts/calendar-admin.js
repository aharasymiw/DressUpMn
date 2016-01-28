var app = angular.module('calendar-admin', ['mwl.calendar', 'ui.bootstrap', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/admin/calendar', {
      templateUrl: '../views/routes/adminCalendar.html',
      controller: 'adminCal'
    }).otherwise({
      redirectTo: '/home'
    });

    $locationProvider.html5Mode(true);

  }]);

app.controller('adminCal', ['$scope','moment', 'calendarConfig', '$uibModal',
  function($scope, moment, calendarConfig, $uibModal) {
    /* The status is used for the title paramater of the objects in the events array.
    * Currently there is only one but if we add the admin view to add volunteers and clients
    * in timeslots we would need add more status titles for events*/
    var status = {
      open: 'Open Time Slot'
    };

    $scope.view = 'month';
    $scope.viewDate = new Date();
    //Scope form for submitting events
    $scope.form = {
    };

    $scope.submit = function() {

      $scope.form.title = status.open;
      $scope.form.type = 'info';
      $scope.form.startsAt = $scope.valuationDate;
      $scope.form.startTime = $scope.mytime.toLocaleTimeString();
      $scope.events.push($scope.form);
      console.log($scope.events);

    };

    $scope.events = [
      {
        title: 'Event ID 1',
        type: 'info',
        startsAt: new Date(2016, 1, 12, 15),
        endsAt: new Date(2016, 1, 12, 16),
        available: true
      },
      {
        title: 'Event ID 2',
        type: 'info',
        startsAt: new Date(2016, 1, 12, 15),
        endsAt: new Date(2016, 1, 12, 16),
        available: false
      },
      {
        title: 'Event ID 3',
        type: 'info',
        startsAt: new Date(2016, 1, 12, 15),
        endsAt: new Date(2016, 1, 12, 16)
      },
      {
        title: 'Event ID 4',
        type: 'info',
        startsAt: new Date(2016, 1, 12, 15),
        endsAt: new Date(2016, 1, 12, 16)
      },
      {
        title: 'Event ID 4',
        type: 'info',
        startsAt: new Date(2016, 1, 14, 15),
        endsAt: new Date(2016, 1, 14, 16)
      }
    ];

    $scope.isCellOpen = true;

    $scope.eventClicked = function(event) {
      if(event.available === true) {
        console.log('You can choose me!');
      } else {
        console.log('sorry mate!');
      }
    };

    //Datepicker logic
    //$scope.valuationDate = '';
    $scope.valuationDatePickerIsOpen = false;

    $scope.valuationDatePickerOpen = function() {
      $scope.valuationDatePickerIsOpen = true;
    };

    $scope.timespanClicked = function(date) {
      $scope.valuationDate = date;
      //cell.cssClass = 'clicked-cell';

      /*$uibModal.open({
        templateUrl: 'addEventModal.html',
        controller: 'adminCal',
        size: 'lg',
        scope: $scope
        })*/
    };

    //Timepicker logic
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.ismeridian = true;

  }]);

/*
app.factory('alert', function($uibModal) {

  function show(action, event) {
    return $uibModal.open({
      templateUrl: 'modelContent.html',
      controller: function ($scope) {
        var vm = this;
        $scope.action = action;
        $scope.event = event;
      },
      controllerAs: 'vm'
    });
  }

  return {
    show: show
  };
});*/
