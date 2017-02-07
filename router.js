/**
 * Created by rayfisher on 2/7/17.
 */



var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            template : "<h1>Pro</h1><p>investing in the future</p>"
        })
        .when("/aboutUs", {
            template : "<h1>about us</h1><p>this is pro stock options</p>"
        })
        .when("/options", {
            template : "<h1>options</h1><p>stock option contracts</p>"
        });
});