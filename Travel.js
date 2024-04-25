var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope) {
    $scope.showText = {
        1: false,
        2: false,
        3: false,
        4: false,
    };

    $scope.toggleText = function(index){
        $scope.showText[index] = !$scope.showText[index];
    };

    angular.forEach($scope.showText, function(value, key){
        $scope.showText[key] = false;
    });
});
