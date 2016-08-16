/**
 * Created by prime on 8/8/16.
 */

angular
    .module('ESAssignment')
    .service("registerService", constructor);

constructor.$inject = ['$q', 'registerRestService'];

function constructor($q, registerRestService) {
    var vm = this;

    vm.register = function (user) {
        var defer = $q.defer();

        registerRestService.register(user).then(function(response) {
            defer.resolve(response);
        }, function (error) {
            defer.reject(error);
        });

        return defer.promise;
    }
}