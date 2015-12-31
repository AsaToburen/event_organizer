'use strict';

angular.module('meetup')
    .controller('CategoryCtrl', ['$scope', '$routeParams', 'MeetupService',
        function($scope, $routeParams, MeetupService) {
            
            MeetupService.getEventsByCat($routeParams.id).then(function(data) {
                $scope.events = data;

            });
        }
    ]);
