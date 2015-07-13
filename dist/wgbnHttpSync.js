angular.module('wgbnHttpSync', [])
    .factory('httpSync', ['$http', function($http){
        var httpSync = {
            postSync: function(_url, _dados){
                var retorno;
                $.ajax({
                    url: _url,
                    async: false,
                    type: 'post',
                    dataType: 'json',
                    data: _dados,
                    success: function(res){
                        retorno = res;
                    },
                    error: function(){
                        retorno = false;
                    }
                });
                return retorno;
            },
            getSync: function(_url){
                var retorno;
                $.ajax({
                    url: _url,
                    async: false,
                    type: 'get',
                    dataType: 'json',
                    success: function(res){
                        retorno = res;
                    },
                    error: function(){
                        retorno = false;
                    }
                });
                return retorno;
            }
        };
        return httpSync;
    }])
;