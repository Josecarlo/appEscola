var listarAvaliacoesEscolaCtrl = function($scope, escolaApi, $mdToast) {
              $scope.escolaAvaliacoes = [];
              $scope.listarAvaliacoesEscola = function(codEscola) {
                escolaApi.getlistarAvaliacoesEscola(codEscola)
                      .then(function (response) {
                    
                        // Toast
                        var toast = $mdToast.simple()
                            .textContent('As avaliações foram listadas abaixo.')
                            .position('top right')
                            .action('OK')
                            .hideDelay(6000)
                            .toastClass('my-success');
                        $mdToast.show(toast);
                    
                          $scope.escolaAvaliacoes = response.data;
                      })
                      .catch(function (error) {
                    
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
escolaApp.controller("listarAvaliacoesEscolaCtrl", listarAvaliacoesEscolaCtrl);