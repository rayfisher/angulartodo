/**
 * Created by rayfisher on 5/11/17.
 */


(function () {

angular.module('ToDo')
    .service('storage', Storage);

    function Storage (){
        $scope.saveData = function () {
            localstorage.lists= lists;
        }
        $scope.loadData = function () {
            localstorage.lists= lists;
        }

        $scope.saveData = function () {
            localstorage.ToDo = ToDo;
        }
        $scope.loadData = function () {
            localstorage.ToDos = ToDo;
        }

    }

    })();

