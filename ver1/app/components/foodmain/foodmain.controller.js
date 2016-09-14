'use strict';

hozbee_beta.controller('FoodmainCtrl', ['$scope','CART_SERVICE','USER_SERVICE','CNFCART','testser', function ($scope,CART_SERVICE,USER_SERVICE,CNFCART,testser) {
	// Getting the composite catalogue 	
	$scope.comCatalogue = testser ;
	console.log( $scope.comCatalogue  );

	//Process data and create 
	var date = new Date();
	$scope.time = CART_SERVICE.strtime(date.toTimeString().substr(0,8));

	$scope.products = [];

	$scope.cart = CART_SERVICE.getCartDetails();
	$scope.Rcart = CART_SERVICE.getCart();
	$scope.add = function(product,half,name,o,index){
		if ( half == "0" )
			CART_SERVICE.add(product,half,o["price"],name);
		else
			CART_SERVICE.add(product,half,o["half_price"],name);
	};
	$scope.eadd = function(product){
		CART_SERVICE.adds(product);
	};
	$scope.uremove = function(product){
		CART_SERVICE.remove(product);
	};
	$scope.enableCategory = function(index){
		for( var ptr in $scope.comCatalogue ){
			console.log('It came here');
			if(  $scope.comCatalogue[ptr].id == index )
				$scope.comCatalogue[ptr].display = true;
			else
				$scope.comCatalogue[ptr].display = false;
		}
	}
	// Filtering varialbes and functions
	$scope.MINprice = 0;
	$scope.MAXprice = 500;
	$scope.veg = false;
	$scope.half = false;
	$scope.deliveryOptions = [ 20,25,30,35,40,45,50,55,60 ];
	$scope.delivery = 60;
	$scope.dishText = '';
	$scope.empty = function(){ return CART_SERVICE.isEmpty(); };
	$scope.bill = function(){ return CART_SERVICE.total();};
	$scope.inCondition = function(Tfood){
		var con4 = Tfood['active'] == true;
		var con2 = Tfood['half'] == $scope.half;
		var con3 = Tfood['veg'] == $scope.veg;
		if( $scope.half == true )
			var con1 = $scope.MINprice < Tfood['half_price'] && Tfood['half_price'] < $scope.MAXprice ;
		else
			var con1 = $scope.MINprice < Tfood['price'] && Tfood['price'] < $scope.MAXprice ;
		return con1 && con2 && con3 && con4 ;
	};
	//Order confirmation
	var span = document.getElementById('clsFood');
	var modal = document.getElementById('foodModal');
	$scope.addresses = USER_SERVICE.getInfo().address;
	span.onclick = function() {
	    modal.style.display = "none";
	}
	// Checkout
	$scope.checkout = function(){
		CART_SERVICE.createCart(CART_SERVICE.getCart())
			.then(
				function(response){
					CART_SERVICE.setCnfCart(response.data.cart_id);
					CART_SERVICE.confirmCart( CART_SERVICE.getCnfCart() );
					console.log( CART_SERVICE.getCnfOrder() );
				},
				function(){
					console.log('Some Error Occured');
				}
			);

	}

}]);
/*
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
*/
