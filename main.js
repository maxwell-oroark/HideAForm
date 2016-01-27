var myApp = angular.module('myApp', [])

/// The above code declares a new module.  You generally only need one module.





myApp.controller('mainController', ['$scope', 'sFactory', function($scope, sFactory){


	$scope.greeting = 'groovy'

	$scope.sections = sFactory.data

	console.log($scope.sections)

	$scope.editActive = false;


	













}]);