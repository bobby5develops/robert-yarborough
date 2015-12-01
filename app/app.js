'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
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
      .otherwise({redirectTo: '/view1'});

}]);

// create the controller and inject Angular's $scope
myApp.controller('View1Ctrl', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('View2Ctrl', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

myApp.controller('View3Ctrl', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
