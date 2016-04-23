angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $http) {
    
})
   
.controller('statisticsCtrl', function($scope, $http) {
    $scope.details = {};
 
    //hole 1
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
    
    
                        /* ---------------------------------------------------------------------------------------*/
    
    //hole2
        $scope.save2 = function() {
        if (($scope.details.Par2 == '3' || $scope.details.Par2 == '4' || $scope.details.Par2 == '5') && $scope.details.fir2 != undefined && $scope.details.gir2 != undefined  && $scope.details.score2 != undefined && $scope.details.puttsno2 != undefined && $scope.details.bunkers2 != undefined && $scope.details.oob2 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf2.php',
                params: {Par: $scope.details.Par2, FIR: $scope.details.fir2, GIR: $scope.details.gir2, score: $scope.details.score2, puttsno: $scope.details.puttsno2, bunkershit: $scope.details.bunkers2, oob: $scope.details.oob2  }

            }).success(function(data) {
                $scope.response2 = data;
                
            }).error(function(data){
                $scope.response2 = data;
                
            })
        }
        else {
            $scope.response2 = "empty details";
            console.log($scope.details.Par2 +  $scope.details.score2 + $scope.details.fir2 + $scope.details.gir2 + $scope.details.puttsno2, $scope.details.bunkers2 + $scope.details.oob2)
        }
    }
                        /* ---------------------------------------------------------------------------------------*/
        
        //hole3
        $scope.save3 = function() {
        if (($scope.details.Par3 == '3' || $scope.details.Par3 == '4' || $scope.details.Par3 == '5') && $scope.details.fir3 != undefined && $scope.details.gir3 != undefined  && $scope.details.score3 != undefined && $scope.details.puttsno3 != undefined && $scope.details.bunkers3 != undefined && $scope.details.oob3 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf3.php',
                params: {Par: $scope.details.Par3, FIR: $scope.details.fir3, GIR: $scope.details.gir3, score: $scope.details.score3, puttsno: $scope.details.puttsno3, bunkershit: $scope.details.bunkers3, oob: $scope.details.oob3  }

            }).success(function(data) {
                $scope.response3 = data;
                
            }).error(function(data){
                $scope.response3 = data;
                
            })
        }
        else {
            $scope.response3 = "empty details";
            console.log($scope.details.Par3 +  $scope.details.score3 + $scope.details.fir3 + $scope.details.gir3 + $scope.details.puttsno3, $scope.details.bunkers3 + $scope.details.oob3)
        }
    }
        
        
                         /* ---------------------------------------------------------------------------------------*/
        
        //hole4
        $scope.save4 = function() {
        if (($scope.details.Par4 == '3' || $scope.details.Par4 == '4' || $scope.details.Par4 == '5') && $scope.details.fir4 != undefined && $scope.details.gir4 != undefined  && $scope.details.score4 != undefined && $scope.details.puttsno4 != undefined && $scope.details.bunkers4 != undefined && $scope.details.oob4 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf4.php',
                params: {Par: $scope.details.Par4, FIR: $scope.details.fir4, GIR: $scope.details.gir4, score: $scope.details.score4, puttsno: $scope.details.puttsno4, bunkershit: $scope.details.bunkers4, oob: $scope.details.oob4  }

            }).success(function(data) {
                $scope.response4 = data;
                
            }).error(function(data){
                $scope.response4 = data;
                
            })
        }
        else {
            $scope.response4 = "empty details";
            console.log($scope.details.Par4 +  $scope.details.score4 + $scope.details.fir4 + $scope.details.gir4 + $scope.details.puttsno4, $scope.details.bunkers4 + $scope.details.oob4)
        }
    }
                                /* ---------------------------------------------------------------------------------------*/
        
        
        //hole5
        $scope.save5 = function() {
        if (($scope.details.Par5 == '3' || $scope.details.Par5 == '4' || $scope.details.Par5 == '5') && $scope.details.fir5 != undefined && $scope.details.gir5 != undefined  && $scope.details.score5 != undefined && $scope.details.puttsno5 != undefined && $scope.details.bunkers5 != undefined && $scope.details.oob5 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf5.php',
                params: {Par: $scope.details.Par5, FIR: $scope.details.fir5, GIR: $scope.details.gir5, score: $scope.details.score5, puttsno: $scope.details.puttsno5, bunkershit: $scope.details.bunkers5, oob: $scope.details.oob5  }

            }).success(function(data) {
                $scope.response5 = data;
                
            }).error(function(data){
                $scope.response5 = data;
                
            })
        }
        else {
            $scope.response5 = "empty details";
            console.log($scope.details.Par5 +  $scope.details.score5 + $scope.details.fir5 + $scope.details.gir5 + $scope.details.puttsno5, $scope.details.bunkers5 + $scope.details.oob5)
        }
    }
        
                                /* ---------------------------------------------------------------------------------------*/
        
        
                //hole6
        $scope.save6 = function() {
        if (($scope.details.Par6 == '3' || $scope.details.Par6 == '4' || $scope.details.Par6 == '5') && $scope.details.fir6 != undefined && $scope.details.gir6 != undefined  && $scope.details.score6 != undefined && $scope.details.puttsno6 != undefined && $scope.details.bunkers6 != undefined && $scope.details.oob6 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf6.php',
                params: {Par: $scope.details.Par6, FIR: $scope.details.fir6, GIR: $scope.details.gir6, score: $scope.details.score6, puttsno: $scope.details.puttsno6, bunkershit: $scope.details.bunkers6, oob: $scope.details.oob6  }

            }).success(function(data) {
                $scope.response6 = data;
                
            }).error(function(data){
                $scope.response6 = data;
                
            })
        }
        else {
            $scope.response6 = "empty details";
            console.log($scope.details.Par6 +  $scope.details.score6 + $scope.details.fir6 + $scope.details.gir6 + $scope.details.puttsno6, $scope.details.bunkers6 + $scope.details.oob6)
        }
    }
        
        
                                /* ---------------------------------------------------------------------------------------*/
        
        
         //hole7
        $scope.save7 = function() {
        if (($scope.details.Par7 == '3' || $scope.details.Par7 == '4' || $scope.details.Par7 == '5') && $scope.details.fir7 != undefined && $scope.details.gir7 != undefined  && $scope.details.score7 != undefined && $scope.details.puttsno7 != undefined && $scope.details.bunkers7 != undefined && $scope.details.oob7 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf7.php',
                params: {Par: $scope.details.Par7, FIR: $scope.details.fir7, GIR: $scope.details.gir7, score: $scope.details.score7, puttsno: $scope.details.puttsno7, bunkershit: $scope.details.bunkers7, oob: $scope.details.oob7  }

            }).success(function(data) {
                $scope.response7 = data;
                
            }).error(function(data){
                $scope.response7 = data;
                
            })
        }
        else {
            $scope.response7 = "empty details";
            console.log($scope.details.Par7 +  $scope.details.score7 + $scope.details.fir7 + $scope.details.gir7 + $scope.details.puttsno7, $scope.details.bunkers7 + $scope.details.oob7)
        }
    }
        
        
                                /* ---------------------------------------------------------------------------------------*/
        
        
                 //hole 8 
        $scope.save8 = function() {
        if (($scope.details.Par8 == '3' || $scope.details.Par8 == '4' || $scope.details.Par8 == '5') && $scope.details.fir8 != undefined && $scope.details.gir8 != undefined  && $scope.details.score8 != undefined && $scope.details.puttsno8 != undefined && $scope.details.bunkers8 != undefined && $scope.details.oob8 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf8.php',
                params: {Par: $scope.details.Par8, FIR: $scope.details.fir8, GIR: $scope.details.gir8, score: $scope.details.score8, puttsno: $scope.details.puttsno8, bunkershit: $scope.details.bunkers8, oob: $scope.details.oob8  }

            }).success(function(data) {
                $scope.response8 = data;
                
            }).error(function(data){
                $scope.response8 = data;
                
            })
        }
        else {
            $scope.response8 = "empty details";
            console.log($scope.details.Par8 +  $scope.details.score8 + $scope.details.fir8 + $scope.details.gir8 + $scope.details.puttsno8, $scope.details.bunkers8 + $scope.details.oob8)
        }
    }
                                /* ---------------------------------------------------------------------------------------*/
        
                         //hole 9 
        $scope.save9 = function() {
        if (($scope.details.Par9 == '3' || $scope.details.Par9 == '4' || $scope.details.Par9 == '5') && $scope.details.fir9 != undefined && $scope.details.gir9 != undefined  && $scope.details.score9 != undefined && $scope.details.puttsno9 != undefined && $scope.details.bunkers9 != undefined && $scope.details.oob9 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf9.php',
                params: {Par: $scope.details.Par9, FIR: $scope.details.fir9, GIR: $scope.details.gir9, score: $scope.details.score9, puttsno: $scope.details.puttsno9, bunkershit: $scope.details.bunkers9, oob: $scope.details.oob9  }

            }).success(function(data) {
                $scope.response9 = data;
                
            }).error(function(data){
                $scope.response9 = data;
                
            })
        }
        else {
            $scope.response9 = "empty details";
            console.log($scope.details.Par9 +  $scope.details.score9 + $scope.details.fir9 + $scope.details.gir9 + $scope.details.puttsno9, $scope.details.bunkers9 + $scope.details.oob9)
        }
    }
        
        
                                /* ---------------------------------------------------------------------------------------*/
        
        
                                 //hole 10 
        $scope.save10 = function() {
        if (($scope.details.Par10 == '3' || $scope.details.Par10 == '4' || $scope.details.Par10 == '5') && $scope.details.fir10 != undefined && $scope.details.gir10 != undefined  && $scope.details.score10 != undefined && $scope.details.puttsno10 != undefined && $scope.details.bunkers10 != undefined && $scope.details.oob10 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf10.php',
                params: {Par: $scope.details.Par10, FIR: $scope.details.fir10, GIR: $scope.details.gir10, score: $scope.details.score10, puttsno: $scope.details.puttsno10, bunkershit: $scope.details.bunkers10, oob: $scope.details.oob10  }

            }).success(function(data) {
                $scope.response10 = data;
                
            }).error(function(data){
                $scope.response10 = data;
                
            })
        }
        else {
            $scope.response10 = "empty details";
            console.log($scope.details.Par10 +  $scope.details.score10 + $scope.details.fir10 + $scope.details.gir10 + $scope.details.puttsno10, $scope.details.bunkers10 + $scope.details.oob10)
        }
    }
                                /* ---------------------------------------------------------------------------------------*/
        
                                 //hole 11 
        $scope.save11 = function() {
        if (($scope.details.Par11 == '3' || $scope.details.Par11 == '4' || $scope.details.Par11 == '5') && $scope.details.fir11 != undefined && $scope.details.gir11 != undefined  && $scope.details.score11 != undefined && $scope.details.puttsno11 != undefined && $scope.details.bunkers11 != undefined && $scope.details.oob11 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf11.php',
                params: {Par: $scope.details.Par11, FIR: $scope.details.fir11, GIR: $scope.details.gir11, score: $scope.details.score11, puttsno: $scope.details.puttsno11, bunkershit: $scope.details.bunkers11, oob: $scope.details.oob11  }

            }).success(function(data) {
                $scope.response11 = data;
                
            }).error(function(data){
                $scope.response11 = data;
                
            })
        }
        else {
            $scope.response11 = "empty details";
            console.log($scope.details.Par11 +  $scope.details.score11 + $scope.details.fir11 + $scope.details.gir11 + $scope.details.puttsno11, $scope.details.bunkers11 + $scope.details.oob11)
        }
    }
                                /* ---------------------------------------------------------------------------------------*/
        
                                 //hole 12 
        $scope.save12 = function() {
        if (($scope.details.Par12 == '3' || $scope.details.Par12 == '4' || $scope.details.Par12 == '5') && $scope.details.fir12 != undefined && $scope.details.gir12 != undefined  && $scope.details.score12 != undefined && $scope.details.puttsno12 != undefined && $scope.details.bunkers12 != undefined && $scope.details.oob12 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf12.php',
                params: {Par: $scope.details.Par12, FIR: $scope.details.fir12, GIR: $scope.details.gir12, score: $scope.details.score12, puttsno: $scope.details.puttsno12, bunkershit: $scope.details.bunkers12, oob: $scope.details.oob12  }

            }).success(function(data) {
                $scope.response12 = data;
                
            }).error(function(data){
                $scope.response12 = data;
                
            })
        }
        else {
            $scope.response12 = "empty details";
            console.log($scope.details.Par12 +  $scope.details.score12 + $scope.details.fir12 + $scope.details.gir12 + $scope.details.puttsno12, $scope.details.bunkers12 + $scope.details.oob12)
        }
    }
                                /* ---------------------------------------------------------------------------------------*/
        
                                 //hole 13 
        $scope.save13 = function() {
        if (($scope.details.Par13 == '3' || $scope.details.Par13 == '4' || $scope.details.Par13 == '5') && $scope.details.fir13 != undefined && $scope.details.gir13 != undefined  && $scope.details.score13 != undefined && $scope.details.puttsno13 != undefined && $scope.details.bunkers13 != undefined && $scope.details.oob13 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf13.php',
                params: {Par: $scope.details.Par13, FIR: $scope.details.fir13, GIR: $scope.details.gir13, score: $scope.details.score13, puttsno: $scope.details.puttsno13, bunkershit: $scope.details.bunkers13, oob: $scope.details.oob13  }

            }).success(function(data) {
                $scope.response13 = data;
                
            }).error(function(data){
                $scope.response13 = data;
                
            })
        }
        else {
            $scope.response13 = "empty details";
            console.log($scope.details.Par13 +  $scope.details.score13 + $scope.details.fir13 + $scope.details.gir13 + $scope.details.puttsno13, $scope.details.bunkers13 + $scope.details.oob13)
        }
    }
        
        
                                /* ---------------------------------------------------------------------------------------*/
        
        
        
                                         //hole 14 
        $scope.save14 = function() {
        if (($scope.details.Par14 == '3' || $scope.details.Par14 == '4' || $scope.details.Par14 == '5') && $scope.details.fir14 != undefined && $scope.details.gir14 != undefined  && $scope.details.score14 != undefined && $scope.details.puttsno14 != undefined && $scope.details.bunkers14 != undefined && $scope.details.oob14 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf14.php',
                params: {Par: $scope.details.Par14, FIR: $scope.details.fir14, GIR: $scope.details.gir14, score: $scope.details.score14, puttsno: $scope.details.puttsno14, bunkershit: $scope.details.bunkers14, oob: $scope.details.oob14  }

            }).success(function(data) {
                $scope.response14 = data;
                
            }).error(function(data){
                $scope.response14 = data;
                
            })
        }
        else {
            $scope.response14 = "empty details";
            console.log($scope.details.Par14 +  $scope.details.score14 + $scope.details.fir14 + $scope.details.gir14 + $scope.details.puttsno14, $scope.details.bunkers14 + $scope.details.oob14)
        }
    }
                                /* ---------------------------------------------------------------------------------------*/
        
                                         //hole 15 
        $scope.save15 = function() {
        if (($scope.details.Par15 == '3' || $scope.details.Par15 == '4' || $scope.details.Par15 == '5') && $scope.details.fir15 != undefined && $scope.details.gir15 != undefined  && $scope.details.score15 != undefined && $scope.details.puttsno15 != undefined && $scope.details.bunkers15 != undefined && $scope.details.oob15 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf15.php',
                params: {Par: $scope.details.Par15, FIR: $scope.details.fir15, GIR: $scope.details.gir15, score: $scope.details.score15, puttsno: $scope.details.puttsno15, bunkershit: $scope.details.bunkers15, oob: $scope.details.oob15  }

            }).success(function(data) {
                $scope.response15 = data;
                
            }).error(function(data){
                $scope.response15 = data;
                
            })
        }
        else {
            $scope.response15 = "empty details";
            console.log($scope.details.Par15 +  $scope.details.score15 + $scope.details.fir15 + $scope.details.gir15 + $scope.details.puttsno15, $scope.details.bunkers15 + $scope.details.oob15)
        }
    }
        
        
                                /* ---------------------------------------------------------------------------------------*/
        
                                     //hole 16 
        $scope.save16 = function() {
        if (($scope.details.Par16 == '3' || $scope.details.Par16 == '4' || $scope.details.Par16 == '5') && $scope.details.fir16 != undefined && $scope.details.gir16 != undefined  && $scope.details.score16 != undefined && $scope.details.puttsno16 != undefined && $scope.details.bunkers16 != undefined && $scope.details.oob16 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf16.php',
                params: {Par: $scope.details.Par16, FIR: $scope.details.fir16, GIR: $scope.details.gir16, score: $scope.details.score16, puttsno: $scope.details.puttsno16, bunkershit: $scope.details.bunkers16, oob: $scope.details.oob16  }

            }).success(function(data) {
                $scope.response16 = data;
                
            }).error(function(data){
                $scope.response16 = data;
                
            })
        }
        else {
            $scope.response16 = "empty details";
            console.log($scope.details.Par16 +  $scope.details.score16 + $scope.details.fir16 + $scope.details.gir16 + $scope.details.puttsno16, $scope.details.bunkers16 + $scope.details.oob16)
        }
    }
        
        
                                /* ---------------------------------------------------------------------------------------*/
        
        
        
                                        //hole 13 
        $scope.save17 = function() {
        if (($scope.details.Par17 == '3' || $scope.details.Par17 == '4' || $scope.details.Par17 == '5') && $scope.details.fir17 != undefined && $scope.details.gir17 != undefined  && $scope.details.score17 != undefined && $scope.details.puttsno17 != undefined && $scope.details.bunkers17 != undefined && $scope.details.oob17 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf17.php',
                params: {Par: $scope.details.Par17, FIR: $scope.details.fir17, GIR: $scope.details.gir137, score: $scope.details.score17, puttsno: $scope.details.puttsno17, bunkershit: $scope.details.bunkers17, oob: $scope.details.oob17  }

            }).success(function(data) {
                $scope.response17 = data;
                
            }).error(function(data){
                $scope.response17 = data;
                
            })
        }
        else {
            $scope.response17 = "empty details";
            console.log($scope.details.Par17 +  $scope.details.score17 + $scope.details.fir17 + $scope.details.gir17 + $scope.details.puttsno17, $scope.details.bunkers17 + $scope.details.oob17)
        }
    }
                                /* ---------------------------------------------------------------------------------------*/
        
                                         //hole 18 
        $scope.save18 = function() {
        if (($scope.details.Par18 == '3' || $scope.details.Par18 == '4' || $scope.details.Par18 == '5') && $scope.details.fir18 != undefined && $scope.details.gir18 != undefined  && $scope.details.score18 != undefined && $scope.details.puttsno18 != undefined && $scope.details.bunkers18 != undefined && $scope.details.oob18 != undefined)
        {
            
            $http({
                method: 'GET',
                url: 'http://g00311793.cloudapp.net/golf18.php',
                params: {Par: $scope.details.Par18, FIR: $scope.details.fir18, GIR: $scope.details.gir18, score: $scope.details.score18, puttsno: $scope.details.puttsno18, bunkershit: $scope.details.bunkers18, oob: $scope.details.oob18  }

            }).success(function(data) {
                $scope.response18 = data;
                
            }).error(function(data){
                $scope.response18 = data;
                
            })
        }
        else {
            $scope.response18 = "empty details";
            console.log($scope.details.Par18 +  $scope.details.score18 + $scope.details.fir18 + $scope.details.gir18 + $scope.details.puttsno18, $scope.details.bunkers18 + $scope.details.oob18)
        }
    }
           
})

                                /* ---------------------------------------------------------------------------------------*/


   
.controller('settingsCtrl', function($scope) {

})
    