// Controller - Pesquisar Escola pelo código.
var pesquisarEscolaPorCodigoCtrl = function ($scope, $stateParams, escolaApi) {

    $scope.escola = {};
    $scope.codEscola = $stateParams.codEscola;

    $scope.pesquisarEscolaPorCodigo = function (codEscola) {
        escolaApi.getEscola(codEscola)
            .then(function (response) {
                $scope.escola = response.data;
            })
            .catch(function (error) {
                console.error(error)
            });
    }
    
    let pesquisarEscolaPorCodigo = $scope.pesquisarEscolaPorCodigo;
    
    let inicializarEscola = function() {
        var codEscola = $stateParams.codEscola;
        pesquisarEscolaPorCodigo(codEscola);
    }

    inicializarEscola();
};

escolaApp.controller("pesquisarEscolaPorCodigoCtrl", pesquisarEscolaPorCodigoCtrl);