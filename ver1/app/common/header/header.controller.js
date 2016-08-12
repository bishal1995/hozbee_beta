'use strict';

hozbee_beta.controller('HeaderCtrl', ['$scope','$mdDialog','$mdMedia','$document', function ($scope,$mdDialog,$mdMedia,$event,$document) {
	console.log('HeaderCtrl created');

	$scope.showLogin = true;

	var modal = document.getElementById("credModal");
	var btn = document.getElementById("loginBtn");
	var span = document.getElementsByClassName("cross")[0];
	btn.onclick = function() {
	    modal.style.display = "block";
	};
	$scope.orde = function(){
	    modal.style.display = "block";		
	};
	span.onclick = function() {
	    modal.style.display = "none";
	};
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	};

	$scope.loginPress = function(){ $scope.showLogin = true; }
	$scope.signupPress = function(){ $scope.showLogin = false; }



}]);