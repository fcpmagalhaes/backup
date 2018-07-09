var app = angular.module('sinti-sucti');

//DESABILITADO
$("#desabilitado").click(function(){
	alert("Painel em desenvolvimento!");
}); 


app.controller('painelController',  ['$rootScope','$scope','$route','$q', '$location', function($rootScope, $scope, $route, $q, $location ){
	
//	   var token = sessionStorage.token;
//	    var urlBOE = sessionStorage.urlBOE;
//	    var urlOpenDocument = sessionStorage.urlOpenDocument;
//	   
//	    $rootScope.relatorio = {}
//	    //DESENVOLVIMENTO TI
//	    $scope.des_ti01 = function(){
//	        $rootScope.relatorio.endereco = "AfG.s6Z9TTNMh3fDdp58qMU";
//	        $rootScope.relatorio.nome = "Índice de Entregas das Demandas DMS/DNS";
//	        $rootScope.relatorio.botaoVoltar = "#!/home";
//	        $location.path('/dashboard');
//	    }
//	    $scope.des_ti02 = function(){
//	        $rootScope.relatorio.endereco = "AaJJSCbnVg9PpsPoMUNeKEk";
//	        $rootScope.relatorio.nome = "Tempo Médio de Entrega";
//	        $rootScope.relatorio.botaoVoltar = "#!/home";
//	        $location.path('/dashboard');
//	    }
//	    $scope.des_ti03 = function(){
//	        $rootScope.relatorio.endereco = "AbGp1d7FZ0JInTh7moBFRsE";
//	        $rootScope.relatorio.nome = "Top 30 Sistemas";
//	        $rootScope.relatorio.botaoVoltar = "#!/home";
//	       $location.path('/dashboard');
//	    }
//	     $scope.des_ti04 = function(){
//	        $rootScope.relatorio.endereco = "AZNHlei9895Kt0SUlUVGDTU";
//	        $rootScope.relatorio.nome = "Serviços/Defeitos - Abertos, Fechados e Em Atendimento";
//	        $rootScope.relatorio.botaoVoltar = "#!/home";
//	        $location.path('/dashboard');
//	     }
//	     $scope.des_ti05 = function(){
//	        $rootScope.relatorio.endereco = "AWjb5DL.PHhLpRIb7e_LGBg";
//	        $rootScope.relatorio.nome = "DMS/DNS por Sistema";
//	        $rootScope.relatorio.botaoVoltar = "#!/home";
//	        $location.path('/dashboard');
//	     }
//	    
//	    //ORCAMENTO
//	     $scope.orcamento01 = function(){
//	        $rootScope.relatorio.endereco = "AYEQaElBvnxPka6MqiHWpUw";
//	        $rootScope.relatorio.nome = "Orçamento por GBS";
//	        $rootScope.relatorio.botaoVoltar = "#!/home";
//		    $location.path('/dashboard');
//		}
//	    $scope.orcamento02 = function(){
//	    	$rootScope.relatorio.endereco = "AcoruGbWbBJMiAkmCQd.g1g";
//	    	$rootScope.relatorio.nome = "Resumo Orçamento";
//	    	$rootScope.relatorio.botaoVoltar = "#!/home";
//	        $location.path('/dashboard');
//	    }
//	    $scope.orcamento03 = function(){
//	        $rootScope.relatorio.endereco = "AVUvxgrEl1FDskV3QJ7Atsw";
//	        $rootScope.relatorio.nome = "Resumo por Rubrica";
//	        $rootScope.relatorio.botaoVoltar = "#!/home";
//	       $location.path('/dashboard');     
//	    }
//	    $scope.orcamento04 = function(){
//	        $rootScope.relatorio.endereco = "AXun5iOD2DZLvjKoEyAW5wk";
//	        $rootScope.relatorio.nome = "Resumo por Unidade";
//	        $rootScope.relatorio.botaoVoltar = "#!/home";
//	       $location.path('/dashboard');
//	    }
}]);