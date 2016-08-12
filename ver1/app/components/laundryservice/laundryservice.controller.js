'use strict';

hozbee_beta.controller('LaundryserviceCtrl', ['$scope','$location','$mdDialog','$mdMedia', function ($scope,$location,$mdDialog,$mdMedia,$event) {
	console.log('LaundryserviceCtrl Created');

	$scope.showCatalogue = true;
	$scope.placeOrder = false;
	$scope.hover1 = false;
	$scope.hover2 = false;
	$scope.hover3 = false;
	$scope.hover4 = false;
	$scope.address = "add1";

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
	$scope.services = {
		WF : false,
		DW : false,
		WI : false
	};
	$scope.seladd = function(){
		return $scope.hover1 || $scope.hover2 || $scope.hover3 || $scope.hover4 ;
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
	$scope.confirnOrder = function(){
		$scope.placeor =  false ;
	};
	$scope.gotoOrders = function(){
		$location.path('orders');
	};























}]);