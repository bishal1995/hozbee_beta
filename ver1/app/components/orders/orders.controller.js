'use strict';

hozbee_beta.controller('OrdersCtrl', ['$scope','ORDER_SRVICE', function ($scope,ORDER_SRVICE) {

	$scope.laundryOrders = {};
	$scope.foodOrders = {};

	$scope.getLaundryOrders = function(){
		$scope.laundryOrders = ORDER_SRVICE.getLaundryOrders();
	};
	$scope.getFoodOrders = function(){
		$scope.foodOrders = ORDER_SRVICE.getFoodCOrders();
	};


}]);