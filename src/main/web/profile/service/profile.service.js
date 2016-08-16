/**
 * Created by prime on 8/8/16.
 */

angular
    .module('ESAssignment')
    .service("profileService", constructor);

constructor.$inject = ['$q', 'profileRestService'];

function constructor($q, profileRestService) {
    var vm = this;

    vm.getUser = function () {
        var defer = $q.defer();

        profileRestService.getUser().then(function(response) {
            defer.resolve(response);
        }, function (error) {
            defer.reject(error);
        });

        return defer.promise;
    }
}

