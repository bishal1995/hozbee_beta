'use strict';

hozbee_beta.controller('LaundryCtrl', ['$scope', function ($scope) {
	console.log('LaundryCtrl Created');

	$scope.showCatalogue = true;
	$scope.placeOrder = false;
	$scope.order = function(){
		$scope.showCatalogue = false;
		$scope.placeOrder = true;
		console.log('Order initiated');

	};



}]);