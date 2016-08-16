/**
 * Created by prime on 8/8/16.
 */

angular
    .module('ESAssignment')
    .service("loginService", constructor);

constructor.$inject = ['$q', 'loginRestService'];

function constructor($q, loginRestService) {
    var vm = this;

    vm.login = function(loginInfo) {
        var defer = $q.defer();

        loginRestService.login(loginInfo).then(function(response) {
            defer.resolve(response);
        }, function (error) {
            defer.reject(error);
        });

        return defer.promise;
    }
}
