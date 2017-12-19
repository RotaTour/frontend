angular.module("RotaTour").controller("RotaTourController",function($scope, $log, $window){

	$scope.clickToRedirect = function(){

		$window.location.href= "cadastrar.html";
	};


});