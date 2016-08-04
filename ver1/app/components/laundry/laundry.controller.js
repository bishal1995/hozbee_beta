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










  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('What would you name your dog?')
      .textContent('Bowser is a common name.')
      .placeholder('Dog name')
      .ariaLabel('Dog name')
      .initialValue('Buddy')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('I\'m a cat person');
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  };




}]);