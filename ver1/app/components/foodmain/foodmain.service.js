'use strict';

hozbee_beta.factory('Cart', ['$window' ,function ($window) {
		// Initial Empty cart
		var cart = [];
		var CartDetails = [];
		return {
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