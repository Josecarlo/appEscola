 var listarAvaliacaoMediaCtrl = function($scope, escolaApi, $mdToast) {
            $scope.avaliacaoMedia = {};
            $scope.listarAvaliacaoMedia = function(codEscola) {
                escolaApi.getlistarAvaliacaoMedia(codEscola)
                    .then(function(response) {
                    
                        // Toast
                        var toast = $mdToast.simple()
                            .textContent('A media foi listada abaixo.')
                            .position('top right')
                            .action('OK')
                            .hideDelay(6000)
                            .toastClass('my-success');
                        $mdToast.show(toast);
                    
                        $scope.avaliacaoMedia = response.data;
                    })
                    .catch(function(error) {
                    
                        var toast = $mdToast.simple()
                            .textContent('Algum problema ocorreu na solicitação dos dados das escolas.')
                            .position('top right')
                            .action('OK')
                            .hideDelay(6000)
                            .toastClass('my-error');
                        $mdToast.show(toast);
                    
                        console.error(error);
                    });
            }
        };
escolaApp.controller("listarAvaliacaoMediaCtrl", listarAvaliacaoMediaCtrl);