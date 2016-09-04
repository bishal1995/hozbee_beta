'use strict';

hozbee_beta.controller('LaundryserviceCtrl', ['$scope','$location','$mdDialog','$mdMedia','API_CONF','LAUNDRY_CONF','CONFIRMED_LORDER','LAUNDRY_SERVICE','USER_SERVICE', function ($scope,$location,$mdDialog,$mdMedia,API_CONF,LAUNDRY_CONF,CONFIRMED_LORDER,LAUNDRY_SERVICE,USER_SERVICE) {
	console.log('LaundryserviceCtrl Created');
	console.log( API_CONF._API_ + LAUNDRY_CONF._API_ );



	$scope.showCatalogue = true;
	$scope.placeOrder = false;
	//Selected Service
	$scope.SelLaundryService = {
		ser1 : false,
		ser2 : false,
		ser3 : false,
		ser4 : false,
	};
	// Defining date
	$scope.myDate = new Date();
	$scope.minDate = new Date(
		$scope.myDate.getFullYear(),
		$scope.myDate.getMonth(),
		$scope.myDate.getDate()
	);
	$scope.order = function(){
		$scope.showCatalogue = false;
		$scope.placeOrder = true;
		console.log('Order initiated');

	};
	// Available Building
	$scope.buildings = [ 
						'Hostel-1',	
						'Hostel-2',	
						'Hostel-3',	
						'Hostel-4',	
						'Hostel-5',	
						'Hostel-6',	
						'Hostel-7',	
						'Hostel-8',	
						'Hostel-9',	
						'GH-1',	
						'GH-2',	
					 ];
	// Enables the Address option for atleast selecting a service
	//getting addresses from USER_SERVICE
	$scope.address = '';
	$scope.addresses = USER_SERVICE.getInfo().address;
	// For maintainging 
	$scope.seladd = function(){
		return $scope.SelLaundryService.ser1 || $scope.SelLaundryService.ser2 || $scope.SelLaundryService.ser3 || $scope.SelLaundryService.ser4 ;
	};
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
	    modal.style.display = "block";
	}
	$scope.order2 = function(){
	    modal.style.display = "block";		
	}
	span.onclick = function() {
	    modal.style.display = "none";
	}
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
	$scope.placeor = true;
	//Find Month number
	$scope.findMonth = function(monthName){
		var MONTH = '';
		switch(monthName){
			case 'Jan' : 
				MONTH = '01';
				break;
			case 'Feb' : 
				MONTH = '02';
				break;
			case 'Mar' : 
				MONTH = '03';
				break;
			case 'Apr' : 
				MONTH = '04';
				break;
			case 'May' : 
				MONTH = '05';
				break;
			case 'Jun' : 
				MONTH = '06';
				break;
			case 'Jul' : 
				MONTH = '07';
				break;
			case 'Aug' : 
				MONTH = '08';
				break;
			case 'Sep' : 
				MONTH = '09';
				break;
			case 'Oct' : 
				MONTH = '10';
				break;
			case 'Nov' : 
				MONTH = '11';
				break;
			case 'Dec' : 
				MONTH = '12';
				break;
			default : MONTH  = '12';
		}
		return MONTH ;
	};
	// Confirn order function
	$scope.confirnOrder = function(){
		$scope.placeor =  false ;
		// Date Format Processing to : YYYY-MM-DD
		var date = String($scope.myDate);
		$scope.dateField = date.substring(4,15);
		$scope.DAT = date.substring(8,10);
		$scope.MON = $scope.findMonth( date.substring(4,7));
		$scope.YER = date.substring(11,15);
		$scope.PickupDate = $scope.YER + '-' + $scope.MON + '-' + $scope.DAT;
		//Selected Service object , intitializing to '0' and then processing - can add Mode services .
		$scope.SelSer = {};
		$scope.SelSer.ser1 = '0';
		$scope.SelSer.ser2 = '0';
		$scope.SelSer.ser3 = '0';
		$scope.SelSer.ser4 = '0';
		if ( $scope.SelLaundryService.ser1 == true ) { $scope.SelSer.ser1 = '1' };
		if ( $scope.SelLaundryService.ser2 == true ) { $scope.SelSer.ser2 = '1' };
		if ( $scope.SelLaundryService.ser3 == true ) { $scope.SelSer.ser3 = '1' };
		if ( $scope.SelLaundryService.ser4 == true ) { $scope.SelSer.ser4 = '1' };
		// Final order details
		$scope.LaundryOrder = {
			SelService : $scope.SelSer,
			date : $scope.PickupDate,
			address : $scope.address
		};
		// Using Confirn Laundry Order Service
		LAUNDRY_SERVICE.setValue($scope.LaundryOrder);
		LAUNDRY_SERVICE.confirmOrder();
	};

	$scope.corderid = LAUNDRY_SERVICE.getConfirmOrder();
	console.log($scope.corderid);

	$scope.gotoOrders = function(){
		$location.path('orders');
	};

}]);

