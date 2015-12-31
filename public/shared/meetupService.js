angular.module('meetup')
    .factory('MeetupService', ['$http', '$log', '$q',
        function($http, $log, $q) {

            return {

                getLocalEvents: function(params) {
                    var location = JSON.stringify(params);
                    var deferred = $q.defer();
                    $http.get('/api/events/' + location).success(function(data) {
                        deferred.resolve(data);
                    }).error(function(e) {
                        $log.log('Error ', e);
                        deferred.reject(e);
                    });
                    return deferred.promise;
                },

                getEventsByCat: function(id){
                    console.log(id);

                    var deferred = $q.defer();
                    $http.get('/api/browse/' + id).success(function(data) {
                        deferred.resolve(data);
                    }).error(function(e) {
                        $log.log('Error ', e);
                        deferred.reject(e);
                    });
                    return deferred.promise;
                },

                getEventCategories: function() {
                  var deferred = $q.defer();
                    $http.get('/api/categories/').success(function(data) {
                        deferred.resolve(data);
                    }).error(function(e) {
                        $log.log('Error ', e);
                        deferred.reject(e);
                    });
                    return deferred.promise;
                }
            }
        }
    ]);
