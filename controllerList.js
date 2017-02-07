/**
 * Created by rayfisher on 2/5/17.
 */
(function () {
    angular.module("ToDo", [])
        .controller("controllerList", function ($scope) {
            $scope.todos = [
                {'title': 'select a stock', }
            ];

            $scope.addTodo = function () {
                $scope.todos.push({'title': $scope.newToDo});
                $scope.newToDo = ''
            };

            $scope.clearTasks = function () {
            };

            $scope.todos = $scope.todos.filter(function(item) {
                return !item.done
            });
        });
})();
