var app = angular.module('sialg-sucti');

app.controller('homeController',  ['$rootScope','$scope','$route','$q', 'loginService' , '$window', function($rootScope, $scope, $route, $q, loginService, $window){
	
	$scope.logout = function(){
		if(typeof $window.sessionStorage.auth !== 'undefined' && $window.sessionStorage.auth != "")
			delete $window.sessionStorage.auth;
	}
	
		
}]);