// Factory - API
var escolaApi = function ($http) {

    var _getEscolas = function (quantidadeDeItens) {
        return $http.get(baseUrl + "/rest/escolas?quantidadeDeItens=" +
            quantidadeDeItens);
    };

    var _getEscola = function (codEscola, anoEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + anoEscola);
    };

    var _getAvaliacoes = function () {
        return $http.get(baseUrl + "/rest/tiposavaliacao");
    };
    
    var _getlistarAvaliacaoMedia = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/media");
    };
    
    var _getlistarAvaliacoesEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes");
    };



    return {
        getEscolas: _getEscolas,
        getEscola: _getEscola,
        getAvaliacoes: _getAvaliacoes,
        getlistarAvaliacaoMedia: _getlistarAvaliacaoMedia,
        getlistarAvaliacoesEscola: _getlistarAvaliacoesEscola
    };
}

escolaApp.factory("escolaApi", escolaApi);