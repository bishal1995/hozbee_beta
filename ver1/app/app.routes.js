'use strict';

hozbee_beta.config(function ($routeProvider) {
	$routeProvider
		.when('/foodmain', {
			templateUrl: 'app/components/foodmain/foodmain.html',
			controller: 'FoodmainCtrl',
			resolve : {
				testser : function(CART_SERVICE){
					var obj = CART_SERVICE.getCatelogue();
					return obj ;
				},
			}

		})
		.when('/laundry', {
			templateUrl: 'app/components/laundry/laundry.html',
			controller: 'LaundryCtrl'
		})
		.when('/front', {
			templateUrl: 'app/components/front/front.html',
			controller: 'FrontCtrl'
		})
		.when('/laundryservice', {
			templateUrl: 'app/components/laundryservice/laundryservice.html',
			controller: 'LaundryserviceCtrl'
		})
		.when('/orders', {
			templateUrl: 'app/components/orders/orders.html',
			controller: 'OrdersCtrl'
		})
		;
	
});

/*
				testser : function(CART_SERVICE){
					var obj = CART_SERVICE.getCatelogue();
					return obj;
				},
*/