var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl: "pages/First.html",
        controller: "myController"
    })
    .when('/%2Fsecond', {
        templateUrl: "pages/Second.html",
        controller: "secondController"
    })
})

myApp.controller("myController",["$scope", "$log", function($scope, $log){
    
    
}]);

myApp.controller("secondController",["$scope", "$log", function($scope, $log){
    
    
}]);


