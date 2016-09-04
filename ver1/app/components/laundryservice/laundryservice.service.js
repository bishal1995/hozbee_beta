'use strict';

hozbee_beta.constant('LAUNDRY_CONF', {
	_API_ : 'sales/confirmLaundryorder/',
	_KEY_ : 'Value',
});
// Order Models
hozbee_beta.value('LAUNDRY_ORDER', {
	WF:'0',
	WI:'0',
	DW:'0',
	PW:'0',
	address : '0',
	date : 'YYYY-MM-DD',
});
// Laundry PickUP order Confirmation
hozbee_beta.factory('LAUNDRY_SERVICE', ['API_CONF','LAUNDRY_CONF','LAUNDRY_ORDER','$http',function (API_CONF,LAUNDRY_CONF,LAUNDRY_ORDER,$http) {
	return {

		getLaundryCatalogue : function(){
			// makes a get quiry accordint to Area ID returing a JSON Object about Prices	
			console.log('Getting Catalogue');
		},
		// Setting the Order Variable
		setValue : function(OrderDet){
			LAUNDRY_ORDER.WF = OrderDet.SelService.ser1 ;
			LAUNDRY_ORDER.WI = OrderDet.SelService.ser2 ;
			LAUNDRY_ORDER.DW = OrderDet.SelService.ser3 ;
			LAUNDRY_ORDER.PW = OrderDet.SelService.ser4 ;
			LAUNDRY_ORDER.address = OrderDet.address;
			LAUNDRY_ORDER.date = OrderDet.date;
		},
		confirmOrder : function(){
			// get this value from service
			var headers = {
				'Authorization' : 'Token ' + "4026d7bb5f3b48d5c7426224f2a0280bf142c8ab"
			};
			// Configuring http object for Http call
			var config = {
				method : 'POST',
				url :  API_CONF._API_ + LAUNDRY_CONF._API_ ,
				data : LAUNDRY_ORDER,
				headers : headers
			};
			// Making http call
			$http(config)
				.then(
					function(response){
						console.log(response);
					},
					function(){
						console.log('Some Error Ocured');
					}
				);

		}

	};
}])