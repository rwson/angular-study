/**
 * Created by Administrator on 2014-12-10.
 */
angular.module("todoApp", [])
    .controller("todoController", function ($scope) {
        $scope.todoData = [
            {
                "id": 0,
                "text": "小宋大帅哥！",
                "done": true
            },
            {
                "id": 1,
                "text": "小宋大丑比！",
                "done": false
            },
            {
                "id": 2,
                "text": "小宋大帅哥！",
                "done": true
            },
            {
                "id": 3,
                "text": "小宋大丑比！",
                "done": false
            },
            {
                "id": 4,
                "text": "小宋大帅哥！",
                "done": true
            },
            {
                "id": 5,
                "text": "小宋大丑比！",
                "done": false
            },
            {
                "id": 6,
                "text": "小宋大帅哥！",
                "done": true
            },
            {
                "id": 7,
                "text": "小宋大丑比！",
                "done": false
            },
            {
                "id": 8,
                "text": "小宋大帅哥！",
                "done": true
            },
            {
                "id": 9,
                "text": "小宋大丑比！",
                "done": false
            },
            {
                "id": 10,
                "text": "小宋大帅哥！",
                "done": true
            },
            {
                "id": 11,
                "text": "小宋大丑比！",
                "done": false
            }
        ];

        $scope.getIndex = function (id) {
            var index = -1;
            angular.forEach($scope.todoData, function (item, key) {
                if (item["id"] === id) {
                    index = key;
                }
            });
            return index;
        };
        $scope.checkDone = function (id) {
            $scope.todoData[id]["done"] = !$scope.todoData[id]["done"];
        };
        $scope.addTodo = function () {
            $scope.todoData.push({
                "id": $scope.todoText.length,
                "text": $scope.todoText,
                "done": $scope.todoChecked
            });
            $scope.todoText = "";
        };
        $scope.removeTodo = function (id) {
            var index = $scope.getIndex(id);
            $scope.todoData.splice(index, 1);
        };
        $scope.removeAllTodo = function () {
            $scope.todoData = [];
        };
    });