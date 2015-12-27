angular.module('meetup')
    .factory('VenueService', ['$http', '$log', '$q',
        function($http, $log, $q) {

            return {
                //consider passing in location data
                getVenues: function() {
                    var deferred = $q.defer();
                    $http.get('/api/venues').success(function(data) {
                       
                       deferred.resolve(data);
                       
                        //  $log.log(data.data.response.venues);
                        //  return data.data.response.venues;
                    });
                    return deferred.promise;
                }


            };
        }
    ]);
