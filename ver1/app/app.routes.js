'use strict';

hozbee_beta.config(function ($routeProvider) {
	$routeProvider
		.when('/foodmain', {
			templateUrl: 'app/components/foodmain/foodmain.html',
			controller: 'FoodmainCtrl'
		})
		;
	
});