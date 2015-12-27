'use strict';


angular.module('meetup')
    .controller('CreateCtrl', ['$scope', '$http', 'VenueService',
        function($scope, $http, VenueService) {

            $scope.hideVenueBtn = false;

            // Initializes Variables
            // ----------------------------------------------------------------------------
            $scope.formData = {};

            // Set initial coordinates to the center of the US
            $scope.formData.address = "7001 N. California Highway";



            $scope.getVenues = function() {
                VenueService.getVenues().then(function(data) {

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
                    eventType: $scope.formData.eventType,
                    cost: $scope.formData.cost,
                    contactName: $scope.formData.contactName,
                    contactPhone: $scope.formData.contactPhone,
                    address: $scope.formData.address
                };

                console.log(eventData);
                // Saves the user data to the db
                $http.post('/createEvent', eventData)
                    .success(function(data) {

                        // Once complete, clear the form (except location)
                        $scope.formData.eventTitle = "";
                        $scope.formData.eventType = "";
                        $scope.formData.cost = "";
                        $scope.formData.contactName = "";
                        $scope.formData.contactPhone = "";
                        $scope.formData.address = "";

                        $location.path('/');
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            };
        }
    ]);
