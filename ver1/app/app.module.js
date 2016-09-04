'use strict';

var hozbee_beta = angular.module('hozbee_beta',['ngResource','ngRoute','ngMessages','ngMaterial','material.svgAssetsCache']);

// HOZBEE API CONFIG
hozbee_beta.constant('API_CONF', {
	_API_ : 'http://127.0.0.1:8888/',
	_KEY_ : 'Value',
});
