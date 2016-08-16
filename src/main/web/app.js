angular
    .module('ESAssignment', ['LocalStorageModule', 'ui.router'])
    .config(constructor);

constructor.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function constructor($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.headers.get = {};
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/signin/view/login.view.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/signup/view/register.view.html',
            controller: 'registerController',
            controllerAs: 'vm'
        })
        .state('profile', {
            url: '/profile/:id',
            templateUrl: '/profile/view/profile.view.html',
            controller: 'profileController',
            controllerAs: 'vm'
        })

}