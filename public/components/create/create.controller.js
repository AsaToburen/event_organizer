'use strict';


angular.module('meetup')
    .controller('CreateCtrl', ['$scope', '$http', 'FourSquareService',
        function($scope, $http, FourSquareService) {

            $scope.hideVenueBtn = false;
            $scope.hideAddVenueBtn = false;

            // Initializes Variables
            // ----------------------------------------------------------------------------
            $scope.formData = {};

            $scope.createVenue = function() {
                $scope.hideAddVenueBtn = true;
                $scope.hideVenueBtn = false;
            };

            $scope.getVenues = function() {
                FourSquareService.getVenues().then(function(data) {
                    $scope.hideAddVenueBtn = false;
                    $scope.hideVenueBtn = true;
                    console.log(data.response.venues);
                    $scope.venues = data.response.venues;
                });
            };


            // Functions
            // ----------------------------------------------------------------------------
            // Creates a new user based on the form fields
            $scope.createEvent = function() {

                console.log('Event Fired');

                // Grabs all of the text box fields
                var eventData = {
                    eventTitle: $scope.formData.eventTitle,
                    capacity: $scope.formData.capacity,
                    contactName: $scope.formData.contactName,
                    contactPhone: $scope.formData.contactPhone,
                    venueName: $scope.formData.venueName,
                    venueAddress: $scope.formData.venueAddress
                };

                // Saves the user data to the db
                $http.post('/createEvent', eventData)
                    .success(function(data) {

                        // Once complete, clear the form (except location)
                        $scope.formData.eventTitle = "";
                        $scope.formData.eventType = "";
                        $scope.formData.contactName = "";
                        $scope.formData.contactPhone = "";
                        $scope.formData.venueName = "";
                        $scope.formData.venueAddress = "";

                        $location.path('/');
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            };
        }
    ]);
