//MODULES
var myApp = angular.module("cellularSPA",['ngRoute','ngResource']);


// ROUTES
myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'Pages/Home.html',
        controller: 'homeController'
    })
    .when('/cellular', {
        templateUrl: 'Pages/Cellular.html',
        controller: 'cellularController'
    })
    .when('/cellular/:antennas', {
        templateUrl: 'Pages/Cellular.html',
        controller: 'cellularController'
    })
   
});

// SERVICES

myApp.service("cellularService",function(){

    this.name = "Enter Sector";
    
});

//CONTROLLERS
myApp.controller("homeController",['$scope','$log','cellularService', function($scope,$log,cellularService){
    
    $scope.sector = cellularService.name;
    
    $log.info($scope.sector);
    
    $scope.$watch('sector', function(){
       cellularService.name = $scope.sector;
        
    });

    
}]);

myApp.controller("cellularController",['$scope','$routeParams','$resource','$log', 'cellularService',function($scope,$routeParams,$resource,$log,cellularService){
    
    $scope.sector = cellularService.name;
    
    $scope.antennas = $routeParams.antennas;
    $log.info("Antennas :" + $scope.antennas);
    
    $scope.cellularAPI = $resource("http://api.opensignal.com/v1/data/cellular/daily?",{ callback: "JSON_CALLBACK"},{get: {method: "JSONP"}});
    
    $scope.cellularResult = $scope.cellularAPI.get({q: $scope.city, cnt:2});
    
    $log.info($scope.cellularResult);
    
}]);

// DIRECTIVES

myApp.directive("cellularPanel",function(){
   return {
    templateUrl:"Directive/panel.htm",
    replace:true
   }
    
});