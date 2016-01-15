var myApp = angular.module("myApp", [])
    .filter("cityFilter",function(){
        return function(data,parent){
            var filterData = [];
            angular.forEach(data,function(obj){
                if(obj["parent"] == parent){
                    filterData.push(obj);
                }
            });
            return filterData;
        };
    })
    .directive("even",function(){
        return {
            "require":"ngModel",
            "link":function(scope,elem,attrs,ngModelController){
                ngModelController.$parsers.push(function(viewValue){
                    if(viewValue % 2 == 0){
                        ngModelController.$setValidity("even",true);
                    }else{
                        ngModelController.$setValidity("even",false);
                    }
                    return viewValue;
                });
                ngModelController.$formatters.push(function(modelValue){
                });
            }
        };
    })
    .directive("customTextArea",function(){
        return {
            "restrict":"E",
            "template":"<div contenteditable='true' style='border:1px solid #ccc;'></div>",
            "replace":"true",
            "require":"ngModel",
            "link":function(scope,elem,attrs,ngModelController){
                elem.on("keyup",function(){
                    scope.$apply(function(){
                        ngModelController.$setValidity(elem.html());
                    });
                });
                ngModelController.$render = function(){
                    elem.html(ngModelController.$viewValue);
                };
            }
        };
    })
    .controller("firstController", ["$scope", function ($scope) {
        var _this = this;
        $scope.hobbies = [
            {
                "id":1,
                "name":"打游戏"
            },{
                "id":2,
                "name":"写代码"
            },{
                "id":3,
                "name":"听音乐"
            }
        ];
        $scope.cities = [
            {
                name: '上海',
                parent: 0,
                id: 1
            },
            {
                name: '上海市',
                parent: 1,
                id: 2
            },
            {
                name: '徐汇区',
                parent: 2,
                id: 8
            },
            {
                name: '长宁区',
                parent: 2,
                id: 3
            },
            {
                name: '北京',
                parent: 0,
                id: 4
            },
            {
                name: '北京市',
                parent: 4,
                id: 5
            },
            {
                name: '东城区',
                parent: 5,
                id: 6
            },
            {
                name: '丰台区',
                parent: 5,
                id: 7
            },
            {
                name: '浙江',
                parent: 0,
                id: 9
            },
            {
                name: '杭州',
                parent: 9,
                id: 100
            },
            {
                name: '宁波',
                parent: 9,
                id: 11
            },
            {
                name: '西湖区',
                parent: 100,
                id: 12
            },
            {
                name: '北仑区‎',
                parent: 11,
                id: 13
            }
        ];
        $scope.data = {
            "hobbies":[1,2],
            "city":3
        };
        //  拷贝一份默认对象
        $scope.origData = angular.copy($scope.data);
        $scope.reset = function(){
            $scope.data = angular.copy($scope.origData);
            $scope.myForm.$setPristine();
            //  将表单复位到默认状态
            _this.initCity();
        };
        _this.findCity = function(parent){
            var id;
            angular.forEach($scope.cities,function(city){
                if(city["id"] == parent){
                    id = city["parent"];
                    return;
                }
            });
            return id;
        };
        _this.initCity = function(){
            if($scope.data.city){
                $scope.data.area = this.findCity($scope.data.city);
                $scope.data.province = this.findCity($scope.data.area);
            }
        };
        this.initCity.call(this);
        $scope.toggleHobbySelection = function(id){
            var index = -1;
            if(!$scope.data.hobbies){
                $scope.data.hobbies = [];
            }else{
                index = $scope.data.hobbies.indexOf(id);
            }
            if(index == -1){
                $scope.data.hobbies.push(id);
            }else{
                $scope.data.hobbies.splice(index,1);
            }
        };
    }]);