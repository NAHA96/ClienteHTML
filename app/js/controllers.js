'use strict';

angular.module('myApp.controllers', []).
controller('MyCtrl1',function($scope,Customers){
    $scope.allcustomers=Customers.query();
})
        .controller('MyCtrl2',[function(){      
        }]);
