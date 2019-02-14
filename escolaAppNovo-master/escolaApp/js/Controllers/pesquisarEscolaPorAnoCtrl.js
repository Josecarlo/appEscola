
var pesquisarEscolaPorAnoCtrl = function ($scope, escolaApi, $mdToast) {

    $scope.escolas = [];


    $scope.pesquisarEscolaPorAno = function (codEscola, anoEscola) {
        escolaApi.getEscola(codEscola, anoEscola)
            .then(function (response) {
            
            // Toast
                var toast = $mdToast.simple()
                    .textContent('As escolas foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.escolas = response.data;
            })
            .catch(function (error) {
            
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados das escolas.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);
            
                console.error(error)
            });
    }

 
       
    };

  


escolaApp.controller("pesquisarEscolaPorAnoCtrl", pesquisarEscolaPorAnoCtrl);