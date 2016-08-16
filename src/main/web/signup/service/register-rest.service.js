/**
 * Created by prime on 8/8/16.
 */

angular
    .module('ESAssignment')
    .service("registerRestService", constructor);

constructor.$inject = ['$http', '$q'];

function constructor($http, $q) {
    var vm = this;

    vm.register = function (user) {
        var defer = $q.defer();

        var config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        $http.post('http://localhost:8080/register', user, config)
            .success(function (response, status, headers, config) {
                defer.resolve(response);
            })
            .error(function (data, status, header, config) {
                defer.reject(data);
            });


        return defer.promise;
    }
}