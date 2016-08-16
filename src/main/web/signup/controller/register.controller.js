/**
 * Created by prime on 8/6/16.
 */

angular
    .module('ESAssignment')
    .controller("registerController", constructor);

constructor.$inject = ['$state', 'registerService'];

function constructor($state, registerService) {
    var vm = this;

    vm.user = {
        fullName: "",
        userId: "",
        password: "",
        dob: "",
        sex: "",
        about: ""
    };

    vm.register = function () {
            registerService.register(vm.user).then(function () {
                    $state.go("login");
            }, function () {
                    alert("registration failed!");
            })
    }
}
