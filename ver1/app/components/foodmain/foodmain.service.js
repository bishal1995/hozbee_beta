'use strict';
// Food APIS
hozbee_beta.constant('FOOD_CONF',{
	_PRODET_API_ : 'products/productDetails/',
	_CATDET_API_ : 'products/categoryDetails/',
	_ADDCART_API_ : 'sales/createCart/',
	_CNFCART_API_ : 'sales/confirmOrder/',
});
// Cart Content
hozbee_beta.value('CART_CONTENT',{
	cart : {},
});
hozbee_beta.value('CNFORDER',{
	key :'value',
});
// cart servcice
hozbee_beta.factory('CART_SERVICE', ['$window','API_CONF','FOOD_CONF','USER_SERVICE','$http',function ($window,API_CONF,FOOD_CONF,USER_SERVICE,$http) {
	// Initial Empty cart
	var cart = [];
	var CartDetails = [];
	return {
		// Get food catalogue
		getCatelogue : function(){
			var prodDet = {};
			var catDet = {};
			var comCatalogue = [];
			// getting product details
			var headers = {
				'area' : '1',		// later get from personal Info
			};
			var config = {
				method : 'GET',
				url :  API_CONF._API_ + FOOD_CONF._PRODET_API_ ,
				headers : headers
			};
			$http(config)
				.then(
					function(response){
						prodDet = response.data;
					},
					function(){
						console.log('Some Error');
					}
				);							
			// getting category data
			var config = {
				method : 'GET',
				url :  API_CONF._API_ + FOOD_CONF._CATDET_API_ ,
				headers : headers
			};
			$http(config)
				.then(
					function(response){
						catDet = response.data;
						// Building Category
						for ( var cat in catDet ){
							if( comCatalogue.length != 0 ){
								var found = false;
								for( var obj in comCatalogue ){
									if( comCatalogue[obj].id == catDet[cat].category_id ){
										found = true;
										break;
									}
									else
										continue;
								}
								if( found == true )
									continue;
								else{
									comCatalogue.push({
										id : catDet[cat].category_id,
										name : catDet[cat].category_name,
										display : true,
										products : []
									});
								}
							}
							else{
								comCatalogue.push({
									id : catDet[cat].category_id,
									name : catDet[cat].category_name,
									display : true,
									products : []
								});
							}
						}
						// Adding products to comCatalogue
						for ( var ptr in comCatalogue ){
							// find id from catDet
							var caPtr = 0;
							var poPtr = 0;
							for( var catPtr in catDet ){
								if( comCatalogue[ptr].id == catDet[catPtr].category_id ){
									caPtr = catPtr ;
									for( var fptr in prodDet ){
										if( catDet[catPtr].food == prodDet[fptr].product ){
											poPtr = fptr;	
											comCatalogue[ptr].products.push( prodDet[fptr] );
										}
										else
											continue;
									}
								}
								else
									continue;
							}
						}
					},
					function(){
						console.log('Some Error');
					}
				);
				return comCatalogue ;
		},
		adds : function(product_id,price){
			for ( var item in cart ){
				if(cart[item]["product"] == product_id ){
					var quantity = parseFloat( cart[item]["quantity"] ) + 1 ;
					cart[item]["quantity"] = String(quantity);
					CartDetails[item]["quantity"] = String(quantity);
					CartDetails[item]["bill"] =  Math.ceil(parseFloat(price)*quantity * 100)/100; 
					break;
				}
				else
					continue;
			}
		},
		add : function(product_id,half,price,name){
			var found = false;
			if( cart.length != 0 ){
				for ( var item in cart ){
					if(cart[item]["product"] == product_id ){
						var quantity = parseFloat( cart[item]["quantity"] ) + 1 ;
						cart[item]["quantity"] = String(quantity);
						cart[item]["half"] = half;
						CartDetails[item]["quantity"] = String(quantity);
						if( half == "0" )
							CartDetails[item]["half"] = 'F';
						else
							CartDetails[item]["half"] = 'H';
						CartDetails[item]["bill"] =  Math.ceil(parseFloat(price)*quantity * 100)/100;
						found = true;
						break;
					}
					else
						continue;
				}
				if( found == false ){
					cart.push({
						"product" : product_id,
						"quantity" : "1",
						"half" : half
					});
					if(half=="0"){
						CartDetails.push({
							product : product_id,
							food_name : name,
							quantity : "1",
							half : 'F',
							bill : price
						});
					}
					else{
						CartDetails.push({
							product : product_id,
							food_name : name,
							quantity : "1",
							half : 'H`',
							bill : price
						});
					}
				}
				else
					var foo = 1 ;
					
			}
			else{
				cart.push({
					"product" : product_id,
					"quantity" : "1",
					"half" : half
				});
				if(half=="0"){
					CartDetails.push({
						product : product_id,
						food_name : name,
						quantity : "1",
						half : 'F',
						bill : price
					});
				}
				else{
					CartDetails.push({
						product : product_id,
						food_name : name,
						quantity : "1",
						half : 'H`',
						bill : price
					});
				}
			}
		},
		remove : function(product){
			for ( var j in cart ){
				if(cart[j]["product"] == product ){
					if( cart[j]["quantity"] == "1" ){
						cart.splice(j,1);
						CartDetails.splice(j,1);
					}
					else{
						var Unit = CartDetails[j]["bill"] / parseFloat( cart[j]["quantity"] ) ;
						var quantity = parseFloat( cart[j]["quantity"] ) - 1 ;
						cart[j]["quantity"] = String(quantity) ;
						CartDetails[j]["quantity"] = String(quantity) ;
						CartDetails[j]["bill"] =  Math.ceil((CartDetails[j]["bill"] - Unit) * 100)/100;		
					}
					break;						
				}
				else
					continue;
			}
		},
		change_half : function(productId){
			for ( var i in cart ){
				if(cart[i]["product"] == productId ){
					if( cart[i]["half"] == "0" ){
						cart[i]["half"] = "1";
						CartDetails[i]["half"] = 'F' ;
					}
					else{
						cart[i]["half"] = "0";
						CartDetails[i]["half"] = 'H';
					}
					break;
				}
				else
					continue;
			}
		},
		strtime : function(time_string){
			var time = 0 ;
			time = time + parseFloat(time_string.substr(6,2)) ;
			time = time + parseFloat(time_string.substr(3,2)) * 60 ;
			time = time + parseFloat(time_string.substr(0,2)) * 3600 ;
			return time;
		},
		getCart : function(){
			return cart;
		},
		getCartDetails : function(){
			return CartDetails;
		},
		total : function(){
			var bill = 0.0;
			for ( var i in CartDetails ){
				bill = bill + CartDetails[i]["bill"];
			}
			bill = Math.ceil( bill * 100)/100;
			return bill;
		},
		isEmpty : function(){
			if ( cart.length == 0 )
				return true;
			else
				return false;
		}
	};
}]); 
