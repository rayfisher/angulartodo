/**
 * Created by rayfisher on 5/11/17.
 */


(function () {

angular.module('ToDo')
    .service('storage', Storage);

    function Storage ($localStorage){
        var serve = this;
        // var service = {
            // saveData: saveData
        // };
        // return service;

     serve.saveData = function (lists) {
            $localStorage.lists= lists;
        };
        // return saveData();
     function loadData (){
        $localStorage.lists=lists;
    }

    }})();

