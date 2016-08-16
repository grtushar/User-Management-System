/**
 * Created by prime on 8/8/16.
 */

angular
    .module('ESAssignment')
    .service("profileRestService", constructor);

constructor.$inject = ['$http', '$q', 'localStorageService'];

function constructor($http, $q, localStorageService) {
    var vm = this;

    vm.getUser = function () {
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: 'http://localhost:8080/user',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorageService.get('token')
            }
        }).then(function successCallback(response) {
            defer.resolve(response.data);
        }, function errorCallback(response) {
            defer.reject();
        });

        return defer.promise;
    }

}

