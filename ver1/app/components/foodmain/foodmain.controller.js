'use strict';

hozbee_beta.controller('FoodmainCtrl', ['$scope','Cart', function ($scope,Cart) {
 	// Dummy data get them by HTTP get
	$scope.foods = [];
	var num = 40;
	for ( var i=0 ; i < 40 ; i++ ){
		$scope.foods.push({
		    product: String(i),
		    product_name: "Butter Chicken",
		    active: 'true',
		    available_from: "00:01:00",
		    available_to: "23:59:00",
		    rating: '0',
		    veg: 'false',
		    price: '180.10',
		    half: 'false',
		    half_price: '95.00',
		    delivery: '30',
		    thumbnail: "https://c2c476bb6ef038abb8b6-ab5c6310bff1587205981e56ac38a65f.ssl.cf1.rackcdn.com/wp-content/uploads/2012/12/Ways-to-Navigate-Fast-Food-Menus-Like-a-Pro-700x395.jpg"
		});
	}
	//Process data and create 
	var date = new Date();
	$scope.time = Cart.strtime(date.toTimeString().substr(0,8));
	var no_product = $scope.foods.length;
	$scope.products = [];
	for ( var k = 0 ; k < no_product ; k++ ){
		if( Cart.strtime($scope.foods[k]["available_from"]) < $scope.time && Cart.strtime($scope.foods[k]["available_to"]) > $scope.time )
			$scope.products.push({
				active : JSON.parse($scope.foods[k]["active"]),
				product: $scope.foods[k]["product"],
				product_name: $scope.foods[k]["product_name"],
				rating: parseInt($scope.foods[k]["rating"]),
				veg: $scope.foods[k]["veg"],
				price: parseFloat($scope.foods[k]["price"]),
				half: $scope.foods[k]["half"],
				half_price: parseFloat($scope.foods[k]["half_price"]),
				delivery : parseInt($scope.foods[k]["delivery"]),
				thumbnail: $scope.foods[k]["thumbnail"],
				is_half : "0"
			});
		else
			continue;
	}
	$scope.cart = Cart.getCartDetails();
	$scope.Rcart = Cart.getCart();
	$scope.add = function(product,half,name,index){
		if ( half == "0" )
			Cart.add(product,half,$scope.products[index]["price"],name);
		else
			Cart.add(product,half,$scope.products[index]["half_price"],name);
	};
	$scope.eadd = function(product){
		for ( var item in $scope.products ){
			if( product['product'] == $scope.products[item]['product'] ){
				if( product['is_half'] == "1" )
					Cart.adds(product['product'],$scope.products[item]['half_price']);
				else
					Cart.adds(product['product'],$scope.products[item]['price']);
				break;
			}
			else
				continue;
		}
	};
	$scope.uremove = function(product){
		Cart.remove(product);
	};
	$scope.MINprice = 0.0;
	$scope.MAXprice = 500.0;
	$scope.veg = "false";
	$scope.half = "false";
	$scope.deliveryOptions = [ 20,25,30,35,40,45,50,55,60 ];
	$scope.delivery = 60;
	$scope.dishText = '';
	$scope.empty = function(){ return Cart.isEmpty(); };
	$scope.bill = function(){ return Cart.total();};
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
	$scope.checkout = function(){
		console.log( Cart.getCart() );
	};









}]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
