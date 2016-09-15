'use strict';
// Food APIS
hozbee_beta.constant('ORDER_CONF',{
	_LAUNDRY_ORDER_ : 'sales/allLorder/',
	_FOOD_ORDER_ : 'sales/allCorder/',
	_FOOD_ORDERDET_ : 'sales/allOrder',
});
hozbee_beta.value( 'LAUNDRY_ORDERS',{
	orders : [],
});
hozbee_beta.value('FOOD_ORDERS', {
	orders : [],
});
hozbee_beta.factory('ORDER_SRVICE', [ 'API_CONF','ORDER_CONF','USER_SERVICE','LAUNDRY_ORDERS','FOOD_ORDERS','$http', function (API_CONF,ORDER_CONF,USER_SERVICE,LAUNDRY_ORDERS,FOOD_ORDERS,$http) {
	
	var LAUNDRYORDERS = { orders : [] };
	var FOODORDERS = { orders : [] };
	var FOODORDER_DETAILS = { order : {} };
	var fOrder_isset = false;
	var lOrder_isset = false;

	return {
		getLaundryOrders : function(){
			if( lOrder_isset ){
				return LAUNDRYORDERS;
			}
			else{
				var headers = { 
					'Authorization' : 'Token ' + USER_SERVICE.getToken()
				};
				var config = {
					method : 'GET',
					url : API_CONF._API_ + ORDER_CONF._LAUNDRY_ORDER_,
					headers : headers
				};
				$http(config)
					.then(
						function(response){
							LAUNDRYORDERS = response.data;
							lOrder_isset = true;
							return LAUNDRYORDERS;
						},
						function(){
							console.log('Network error');
						}
					);
			}
		},
		getFoodCOrders : function(){
			if( fOrder_isset ){
				return FOODORDERS;
			}
			else{
				var headers = { 
					'Authorization' : 'Token ' + USER_SERVICE.getToken()
				};
				var config = {
					method : 'GET',
					url : API_CONF._API_ + ORDER_CONF._FOOD_ORDER_,
					headers : headers
				};
				$http(config)
					.then(
						function(response){
							FOODORDERS = response.data;
							fOrder_isset = true;
							return FOODORDERS;
						},
						function(){
							console.log('Network error');
						}
					);
			}
		},
		getFoodCOrderDetail : function(Corder_id,array_id){
			var headers = { 
				'Authorization' : 'Token ' + USER_SERVICE.getToken()
			};
			var config = {
				method : 'GET',
				url : API_CONF._API_ + ORDER_CONF._FOOD_ORDERDET_ + '?corder=' + Corder_id,
				headers : headers
			};
			$http(config)
				.then(
					function(response){
						FOODORDER_DETAILS[array_id] = response.data;
					},
					function(){
						console.log('Network Error');
					}
				);
		}	
	};	
}])