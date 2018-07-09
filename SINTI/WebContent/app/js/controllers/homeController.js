var app = angular.module('sinti-sucti');

app.controller('homeController',  ['$rootScope','$scope','$route','$q', 'loginService' , '$window','$location', function($rootScope, $scope, $route, $q, loginService, $window, $location){	
	 
	$scope.logout = function(){
		if(typeof $window.sessionStorage.auth !== 'undefined' && $window.sessionStorage.auth != "")
			delete $window.sessionStorage.auth;
	}
	
	var sub_menu = $(".relatorios");
	$(sub_menu).hide();
	
    $('.des_ti').click(function(){
    	$(this).toggleClass('clicked');
  	});
     
    $scope.func_des_ti = function(){
    	 $(sub_menu).hide();
         $("#relatorio_1, #relatorio_2, #relatorio_3, #relatorio_13, #relatorio_14").toggle('slow');
         
         var endereco_1 = document.getElementById("icone1");
         endereco_1.setAttribute("xlink:href","app/libs/img/icones_paineis/top_30_sistemas.svg");
        
         var endereco_2 = document.getElementById("icone2");
         endereco_2.setAttribute("xlink:href","app/libs/img/icones_paineis/tempo_medio_de_entrega.svg");
         
         var endereco_3 = document.getElementById("icone3");
         endereco_3.setAttribute("xlink:href","app/libs/img/icones_paineis/indice_entrega_demandas.svg");
         
         var endereco_14 = document.getElementById("icone14");
         endereco_14.setAttribute("xlink:href","app/libs/img/icones_paineis/servicos_defeitos.svg");
         
         var endereco_13 = document.getElementById("icone13");
         endereco_13.setAttribute("xlink:href","app/libs/img/icones_paineis/dn_dms_por_sistema.svg");
    }
    
    $scope.func_orcamentos = function(){
    	$(sub_menu).hide();
        $("#relatorio_12, #relatorio_11, #relatorio_10, #relatorio_9").toggle('slow');
        
        var endereco_1 = document.getElementById("icone12");
        endereco_1.setAttribute("xlink:href","app/libs/img/icones_paineis/orcamento_resumo_por_gbs.svg");
        
        var endereco_2 = document.getElementById("icone11");
        endereco_2.setAttribute("xlink:href","app/libs/img/icones_paineis/orcamento_resumo_por_orcamento.svg");
        
        var endereco_3 = document.getElementById("icone10");
        endereco_3.setAttribute("xlink:href","app/libs/img/icones_paineis/orcamento_resumo_por_rubrica.svg");
        
        var endereco_14 = document.getElementById("icone9");
        endereco_14.setAttribute("xlink:href","app/libs/img/icones_paineis/orcamento_resumo_por_unidade.svg");    
    }
    
    var token = sessionStorage.token;
    var urlBOE = sessionStorage.urlBOE;
    var urlOpenDocument = sessionStorage.urlOpenDocument;
   
    $rootScope.relatorio = {}
    //DESENVOLVIMENTO TI
    $scope.des_ti01 = function(){
        $rootScope.relatorio.endereco = "AfG.s6Z9TTNMh3fDdp58qMU";
        $rootScope.relatorio.nome = "Índice de Entregas das Demandas DMS/DNS";
        $rootScope.relatorio.botaoVoltar = "#!/home";
        $location.path('/dashboard');
    }
    $scope.des_ti02 = function(){
        $rootScope.relatorio.endereco = "AaJJSCbnVg9PpsPoMUNeKEk";
        $rootScope.relatorio.nome = "Tempo Médio de Entrega";
        $rootScope.relatorio.botaoVoltar = "#!/home";
        $location.path('/dashboard');
    }
    $scope.des_ti03 = function(){
        $rootScope.relatorio.endereco = "AbGp1d7FZ0JInTh7moBFRsE";
        $rootScope.relatorio.nome = "Top 30 Sistemas";
        $rootScope.relatorio.botaoVoltar = "#!/home";
       $location.path('/dashboard');
    }
     $scope.des_ti04 = function(){
        $rootScope.relatorio.endereco = "AZNHlei9895Kt0SUlUVGDTU";
        $rootScope.relatorio.nome = "Serviços/Defeitos - Abertos, Fechados e Em Atendimento";
        $rootScope.relatorio.botaoVoltar = "#!/home";
        $location.path('/dashboard');
     }
     $scope.des_ti05 = function(){
        $rootScope.relatorio.endereco = "AWjb5DL.PHhLpRIb7e_LGBg";
        $rootScope.relatorio.nome = "DMS/DNS por Sistema";
        $rootScope.relatorio.botaoVoltar = "#!/home";
        $location.path('/dashboard');
     }
    
    //ORCAMENTO
     $scope.orcamento01 = function(){
        $rootScope.relatorio.endereco = "AYEQaElBvnxPka6MqiHWpUw";
        $rootScope.relatorio.nome = "Orçamento por GBS";
        $rootScope.relatorio.botaoVoltar = "#!/home";
	    $location.path('/dashboard');
	}
    $scope.orcamento02 = function(){
    	$rootScope.relatorio.endereco = "AcoruGbWbBJMiAkmCQd.g1g";
    	$rootScope.relatorio.nome = "Resumo Orçamento";
    	$rootScope.relatorio.botaoVoltar = "#!/home";
        $location.path('/dashboard');
    }
    $scope.orcamento03 = function(){
        $rootScope.relatorio.endereco = "AVUvxgrEl1FDskV3QJ7Atsw";
        $rootScope.relatorio.nome = "Resumo por Rubrica";
        $rootScope.relatorio.botaoVoltar = "#!/home";
       $location.path('/dashboard');     
    }
    $scope.orcamento04 = function(){
        $rootScope.relatorio.endereco = "AXun5iOD2DZLvjKoEyAW5wk";
        $rootScope.relatorio.nome = "Resumo por Unidade";
        $rootScope.relatorio.botaoVoltar = "#!/home";
       $location.path('/dashboard');
    }
    //SAP/BO
    $scope.func_bi = function(){
    	window.location.href = '/BOE/BI';
    }
       	
}]);