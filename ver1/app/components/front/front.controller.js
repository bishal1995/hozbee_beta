'use strict';

hozbee_beta.controller('FrontCtrl', ['$scope','$location','$mdDialog','$mdMedia', function ($scope,$location,$mdDialog,$mdMedia) {
	console.log('FrontCtrl created');
	$scope.gotolist = function(){
		$location.path('laundryservice');
	};
	$scope.placeOrder = false;
	$scope.hover11 = false;
	$scope.hover12 = false;
	$scope.hover13 = false;
	$scope.hover14 = false;
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
		return $scope.hover11 || $scope.hover12 || $scope.hover13 || $scope.hover14 ;
	};

	// Get the modal
	var modal = document.getElementById('myModal2');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn2");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close2")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	};

	$scope.orde = function(){
	    modal.style.display = "block";		
	};

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	};






}]);
