'use strict';

angular.module('meetup')
    .controller('BrowseCtrl', ['$scope', 'MeetupService',
        function($scope, MeetupService) {



            MeetupService.getEventCategories().then(function(data) {
                $scope.count = data.meta.count;
                $scope.categories = data.results;

            });

        }
    ]);
