'use strict';

hozbee_beta.directive('headerModal', [function () {
	return {
		restrict : 'E',
		templateUrl : 'app/common/header/header.html',
		controller : 'HeaderCtrl',
	};
}])