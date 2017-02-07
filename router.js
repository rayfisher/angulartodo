/**
 * Created by rayfisher on 2/7/17.
 */

var routerApp = angular.module("routerApp", ["ui.router"]);
routerapp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state("pro", {
            url: "/pro",
            templateUrl : "<h1>Pro</h1><p>investing in the future</p>
        })
        .state("aboutUs", {
            url: "/aboutUs",
            templateUrl : "<h1>about us</h1><p>this is pro stock options</p>"
        })
        .state("options", {
            url: "/options",
            templateUrl : "<h1>options</h1><p>stock option contracts</p>"
        });
});

