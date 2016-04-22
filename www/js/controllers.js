angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $http) {
    
})
   
.controller('statisticsCtrl', function($scope, $http) {
    $scope.details = {};
    
    $scope.save = function() {
        if (($scope.details.Par == '3' || $scope.details.Par == '4' || $scope.details.Par == '5') && $scope.details.fir != undefined && $scope.details.gir != undefined  && $scope.details.score != undefined && $scope.details.puttsno != undefined && $scope.details.bunkers != undefined && $scope.details.oob != undefined)
        {
            /*console.log($scope.details.Par);
            console.log($scope.details.fir);
            console.log($scope.details.gir);
            console.log($scope.details.Par);
            console.log($scope.details.fir);
            console.log($scope.details.gir);*/
            
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
})
   
.controller('settingsCtrl', function($scope) {

})
    