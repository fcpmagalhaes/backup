var app = angular.module('sinti-sucti', ['ngRoute']);


app.config(function($routeProvider, $httpProvider) {
	
		  $httpProvider.defaults.headers["delete"] = {
		    'Content-Type': 'application/json;charset=utf-8'
		  };
	
	$routeProvider
		.when('/login', {
			templateUrl	: 'app/views/login.html',
			controller	: 'loginController'
		})
		.when('/home', {
			templateUrl	: 'app/views/home.html',
			controller	: 'homeController'
		})
		.when('/dashboard', {
			templateUrl	: 'app/views/paineis_sinti.html',
			controller	: 'dashboardController'
		})
		.otherwise({
			redirectTo	: '/home'
		});
});


app.run(['$rootScope', '$q' , '$location', '$window', function($rootScope, $q, $location, $window) {
	
	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
		
//		if(!(typeof $window.sessionStorage.auth !== 'undefined' && $window.sessionStorage.auth != "")){
//			$location.path('/login');
//		}
	});
	
}]);
