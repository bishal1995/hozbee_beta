'use strict';

hozbee_beta.controller('LaundryCtrl', ['$scope','$mdDialog','$mdMedia', function ($scope,$mdDialog,$mdMedia,$event) {
	console.log('LaundryCtrl Created');

	$scope.showCatalogue = true;
	$scope.placeOrder = false;
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
		return  $scope.services.WF || $scope.services.DW || $scope.services.WI ;
	};
	$scope.seldate = function(){
		return document.getElementById("op1").checked || document.getElementById("op2").checked || document.getElementById("op3").checked || document.getElementById("op4").checked ;
	};

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

}]);
