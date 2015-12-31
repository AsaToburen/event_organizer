angular.module('meetup')
    .controller('MainCtrl', ['$scope', '$http', 'geolocation', 'MeetupService',
        function($scope, $http, geolocation, MeetupService) {

            function getLocalEvents(location) {
                MeetupService.getLocalEvents(location).then(function(data) {
                    $scope.events = data;
                });
            }

            //get location data using angular location api

            geolocation.getLocation().then(function(data) {
                if (data) {

                    var coords = {
                        lat: data.coords.latitude,
                        lon: data.coords.longitude
                    };

                    getLocalEvents(coords);

                } else {
                    //get all events
                }
            });

            //if user location data available, use coordinates to lookup local events
        }
    ]);
