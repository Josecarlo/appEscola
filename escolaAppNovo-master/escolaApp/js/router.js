//configuração das rotas.
escolaApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var homeState = {
        url: '/home',
        templateUrl: 'home.html'
    };

    var listarEscolasState = {
        url: '/listar',
        templateUrl: 'listarEscolas.html',
        controller: 'listarEscolasCtrl'
    };

    var listarAvaliacaoMediaState = {
        url: '/listarAvaliacaoMedia',
        templateUrl: 'listarAvaliacaoMedia.html',
        controller: 'listarAvaliacaoMediaCtrl'
    };

    var listarTiposAvaliacaoState = {
        url: '/listarTiposAvaliacao',
        templateUrl: 'listarTiposAvaliacao.html',
        controller: 'listarTiposAvaliacaoCtrl'
    };

    var pesquisarEscolaPorAnoState = {
        url: "/pesquisarEscolaPorAno",
        templateUrl: "pesquisarEscolaPorAno.html",
        controller: "pesquisarEscolaPorAnoCtrl"
    };

    var pesquisarEscolaPorCodigoState = {
        url: "/pesquisarEscolaPorCodigo/:codEscola",
        templateUrl: "pesquisarEscolaPorCodigo.html",
        controller: "pesquisarEscolaPorCodigoCtrl"
    };

    var listarAvaliacaoPorNomeState = {
            url: "/listarAvaliacaoPorNome",
            templateUrl: "listarAvaliacaoPorNome.html",
            controller: "listarAvaliacaoPorNomeCtrl"
    };

    var listarAvaliacoesEscolaState = {
            url: "/listarAvaliacoesEscola",
            templateUrl: "listarAvaliacoesEscola.html",
            controller: "listarAvaliacoesEscolaCtrl"
    };
    
  


    $stateProvider.state("home", homeState);
    $stateProvider.state("listarEscolas", listarEscolasState);
    $stateProvider.state("listarAvaliacaoMedia", listarAvaliacaoMediaState);
    $stateProvider.state("listarTiposAvaliacao", listarTiposAvaliacaoState);
    $stateProvider.state("pesquisarEscolaPorAno", pesquisarEscolaPorAnoState);
    $stateProvider.state("pesquisarEscolaPorCodigo", pesquisarEscolaPorCodigoState);
    $stateProvider.state("listarAvaliacaoPorNome", listarAvaliacaoPorNomeState);
    $stateProvider.state("listarAvaliacoesEscola", listarAvaliacoesEscolaState);
});