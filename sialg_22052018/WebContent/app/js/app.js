var app = angular.module('sialg-sucti', ['ngRoute']);


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
		.when('/gestao', {
			templateUrl	: 'app/views/gestao.html',
			controller	: 'painelController'
		})
		.when('/contratos', {
			templateUrl	: 'app/views/contratos.html',
			controller	: 'painelController'
		})
		.when('/indicadores', {
			templateUrl	: 'app/views/indicadores.html',
			controller	: 'painelController'
		})
		.when('/relatorios', {
			templateUrl	: 'app/views/relatorios.html',
			controller	: 'painelController'
		})
		.when('/projetos', {
			templateUrl	: 'app/views/projetos.html',
			controller	: 'painelController'
		})
		.when('/dashboard', {
			templateUrl	: 'app/views/relatorios_sialg.html',
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
