/**
 * Created by prime on 8/8/16.
 */
angular
    .module('ESAssignment')
    .service("loginRestService", constructor);

constructor.$inject = ['$http', '$q', 'localStorageService'];

function constructor($http, $q, localStorageService) {
    var vm = this;

    vm.login = function(loginInfo) {
        var defer = $q.defer();

        var data = "userId=" +  loginInfo.userId + "&password="
            + loginInfo.password;
        var config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            }
        };


        $http.post('http://localhost:8080/authenticate', data, config)
            .success(function (response, status, headers, config) {
                localStorageService.set('token', response.token);
                defer.resolve(response);
            })
            .error(function (data, status, header, config) {
                defer.reject(data);
            });


        return defer.promise;
    }
}