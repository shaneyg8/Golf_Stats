angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $http) {
    
})
   
.controller('statisticsCtrl', function($scope, $http) {
    $scope.details = {};
    
    $scope.save = function() {
        if (($scope.details.Par == '3' || $scope.details.Par == '4' || $scope.details.Par == '5') && $scope.details.fir != undefined && $scope.details.gir != undefined  && $scope.details.score != undefined && $scope.details.puttsno != undefined && $scope.details.bunkers != undefined && $scope.details.oob != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf.php',
                params: {Par: $scope.details.Par, FIR: $scope.details.fir, GIR: $scope.details.gir, score: $scope.details.score, puttsno: $scope.details.puttsno, bunkershit: $scope.details.bunkers, oob: $scope.details.oob  }

            }).success(function(data) {
                $scope.response = data;
                
            }).error(function(data){
                $scope.response = data;
                
            })
        }
        else {
            $scope.response = "empty details";
            console.log($scope.details.Par +  $scope.details.score + $scope.details.fir + $scope.details.gir + $scope.details.puttsno, $scope.details.bunkers + $scope.details.oob)
        }
    }
    
        $scope.save2 = function() {
        if (($scope.details.Par2 == '3' || $scope.details.Par2 == '4' || $scope.details.Par2 == '5') && $scope.details.fir2 != undefined && $scope.details.gir2 != undefined  && $scope.details.score2 != undefined && $scope.details.puttsno2 != undefined && $scope.details.bunkers2 != undefined && $scope.details.oob2 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf2.php',
                params: {Par: $scope.details.Par2, FIR: $scope.details.fir2, GIR: $scope.details.gir2, score: $scope.details.score2, puttsno: $scope.details.puttsno2, bunkershit: $scope.details.bunkers2, oob: $scope.details.oob2  }

            }).success(function(data) {
                $scope.response = data;
                
            }).error(function(data){
                $scope.response = data;
                
            })
        }
        else {
            $scope.response2 = "empty details";
            console.log($scope.details.Par2 +  $scope.details.score2 + $scope.details.fir2 + $scope.details.gir2 + $scope.details.puttsno2, $scope.details.bunkers2 + $scope.details.oob2)
        }
    }
})


   
.controller('settingsCtrl', function($scope) {

})
    