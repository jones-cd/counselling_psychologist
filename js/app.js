//Define an angular module for our app

angular.module('CSApp', ['ngRoute']);
 
angular.module('CSApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    // $routeProvider.when('/', {
    //     templateUrl: 'qindex.html'
    // })
    $routeProvider.when('/Link1', {
        templateUrl: "templates/Link1.html"
    })
    .when('/Link2', {
        templateUrl: "templates/Link2.html"
    })
    .when('/Link3', {
        templateUrl: "templates/Link3.html"
    })
    .when('/Link4', {
        templateUrl: "templates/Link4.html"
    })
    
    
});