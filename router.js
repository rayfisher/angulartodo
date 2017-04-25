/**
 * Created by rayfisher on 2/7/17.
 */

var ToDo= angular.module("ToDo")
          .config(function($stateProvider){

    $stateProvider
        .state("pro", {
            url: "/pro",
            templateUrl : 'pro.html'
        })
        .state("aboutUs", {
            url: "/aboutUs",
            templateUrl : 'aboutUs.html'
        })
        .state("options", {
            url: "/options",
            templateUrl : 'options.html'
        });
});

