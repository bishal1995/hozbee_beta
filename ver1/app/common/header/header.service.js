'use strict';
// Login APIs
hozbee_beta.constant('LOGIN_API',{
	_API_ : 'api-auth-token/',
	_KEY_ : 'Value',
});
// User Info declaration
hozbee_beta.value('USER_STATE', {
	_TOKEN_ : '',
	__ADDRESS_ : '',
});
// Login and User state variable
hozbee_beta.factory('USER_SERVICE', ['API_CONF','LOGIN_API','USER_STATE', function (API_CONF,LOGIN_API,USER_STATE) {
	// Various return functions
	return {

		login : function(username,password){
			// Login in httpS server and obtain the Auth Token
			// and set the token in Cookie for further calls
			console.log('Login In to Server');
		},
		// setting Info like address ID , Area ID
		setInfo : function(){
			// Get the User Bio - Info from the server and set in Cookie
			console.log('Getting Info from server and setting it in Cookie');

		},
		getInfo : function(){
			// Getting Customer Bio-Info from Cookies
			console.log('Getting Customer Bio-Info from Cookies');

		},
		getToken : function(){
			//take from Cookies if cookie not found redirect to Login Page
			console.log('Getting Token');

		},
		isLogged : function(){
			// Check for boolean if he/She is logged or not
			console.log('Display Logging Information');
		},
		logout : function(){
			// Remove all the Cookies 
		},
		setServiceInfo : function(){
			// Settting the last accesed service page  may need to track customer behaviour
			console.log('Saving Customer behaviour');

		},
		getServiceInfo : function(){
			// Cookie based information on last Used , to be called at first 
			// and forwarding user to the service page with required information 
			// like Area ID or any custom Search
			console.log('Getting Customer Behaviour');
		},
		addAddress : function(){
			// Adds a new Address to the customer
		},





	};
}])



