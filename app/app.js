'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider
      //route for view1
      .when('/view1',{
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
      })
      //route for view2
      .when('/view2',{
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl'
      })
      //route for view3
      .when('/view3',{
          templateUrl: 'view3/view3.html',
          controller: 'View3Ctrl'
      })
      //route for view4
      .when('/view4', {
          templateUrl: 'view4/view4.html',
          controller: 'View4Ctrl'
      })
      //route for view5
      .when('/view5', {
          templateUrl: 'view5/view5.html',
          controller: 'View5Ctrl'
      })
      //route for view6
      .when('/view6', {
          templateUrl: 'view6/view6.html',
          controller: 'View6Ctrl'
      })
      .otherwise({redirectTo: '/view1'});

}]);


// create the controller and inject Angular's $scope
myApp.controller('View1Ctrl', function($scope) {
    // create a message to display in our view
    $scope.message = 'view 1';
});

myApp.controller('View2Ctrl', function($scope) {
    $scope.message = 'view 2';
});

myApp.controller('View3Ctrl', function($scope) {
    $scope.message = 'view 3';
});

myApp.controller('View4Ctrl', function($scope){
    $scope.message = 'view 4';
});

myApp.controller('View5Ctrl', function($scope){
    $scope.message = 'view 5';
});

myApp.controller('View6Ctrl', function($scope){
    $scope.message = 'view 6';
});


