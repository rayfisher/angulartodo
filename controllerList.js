/**
 * Created by rayfisher on 2/5/17.
 */
(function () {
    angular.module("ToDo", ['ui.router'])
        .controller("controllerList", function ($scope,$filter, ToDoService) {
            $scope.todos = [
                {'title': 'select a stock', done: false}
            ];
            $scope.lists= ToDoService.lists;

       //     var lists = []
       //     lists.push({name: userinput.listName, list:[]})

            $scope.addLists= function() {
                ToDoService.createNewList($scope.newList);
            }
            // if newList = !null{
            //
            // }
            // else{
            //     newList = null{
            //         run angular material error toaster
            //     }
            // }
         //   console.log(ToDoService.lists);

         //   console.log(ToDoService.lists);

            $scope.addTodo = function () {
                $scope.currentList.todos.push({'title': $scope.newToDo, done: false});
                $scope.newToDo = ''
            };

            $scope.setCurrentList = function (list) {
                $scope.currentList = list
            }
            $scope.clearTasks = function () {
                var filterArray= $filter('filter')($scope.currentList.todos,{done:false});
                $scope.currentList.todos= filterArray
            };
            $scope.todos = $scope.todos.filter(function(item) {
                return !item.done
            });
        })
        .service('ToDoService', function(){
            var lists=[];
                        var service= {
                            lists:lists,
                createNewList: createNewList,
                addTodo: addTodo
            }
            function createNewList(listName) {
                lists.push({
                    name: listName,
                    todos: []
                })
            }
            function addTodo() {
                lists.push({
                    name: listName,
                    todos: []
                })
            }
            return service
        });
})();


