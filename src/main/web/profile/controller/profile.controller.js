/**
 * Created by prime on 8/6/16.
 */

angular
    .module('ESAssignment')
    .controller("profileController", constructor);

constructor.$inject = ['$state', 'profileService', 'localStorageService'];

function constructor($state, profileService, localStorageService) {
    var vm = this;

    vm.user = {};

    vm.logout = function () {
        localStorageService.clearAll();
        $state.go("login");
    };

    function getUser() {
        profileService.getUser().then(function (user) {
            vm.user = user;
        }, function () {
            $state.go("login");
        })
    }

    function init() {
        getUser();
    }
    init();
}
