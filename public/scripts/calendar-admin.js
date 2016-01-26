var app = angular.module('calendar-admin', ['mwl.calendar', 'ui.bootstrap']);

app.controller('adminCal', ['$scope','moment', 'calendarConfig',function($scope, moment, calendarConfig) {

  $scope.view = 'month';

  $scope.viewDate = new Date(2016, 1, 1, 0);


  $scope.events = [
    {
      title: 'Event ID 1',
      type: 'info',
      startsAt: new Date(2016, 1, 12, 15),
      endsAt: new Date(2016, 1, 12, 16)
    },
    {
      title: 'Event ID 2',
      type: 'info',
      startsAt: new Date(2016, 1, 12, 15),
      endsAt: new Date(2016, 1, 12, 16)
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
    }
  ];


}]);