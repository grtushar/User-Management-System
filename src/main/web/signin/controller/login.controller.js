/**
 * Created by prime on 8/6/16.
 */

angular
    .module('ESAssignment')
    .controller("loginController", constructor);

constructor.$inject = ['$state', 'loginService'];

function constructor($state, loginService) {
    var vm = this;

    vm.loginInfo = {
        userId: "",
        password: ""
    };
    vm.loginFailed = false;

    function login() {
        loginService.login(vm.loginInfo).then(function () {
            $state.go("profile");
        }, function () {
            vm.loginFailed = true;
        })
    }

    vm.login = login;

    function init() {

    }
    init();
}
