//'use strict';
//
///**
// * @ngdoc function
// * @name ejemploAngularOrlyApp.controller:MainCtrl
// * @description
// * # MainCtrl
// * Controller of the ejemploAngularOrlyApp
// */
//angular.module('ejemploAngularOrlyApp')
//  .controller('MainCtrl', function () {
//    this.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });


'use strict';
 
angular.module('ejemploAngularOrlyApp').controller("MainCtrl", function($scope)
 {
     $scope.alto = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm', 'n'];
     $scope.ancho = [1,2,3,4,5,6,7,8,9,10,11,12];
     $scope.actual = "nulo";
     $scope.elementos = {};
 
$scope.activaElemento = function(indice1, indice2)
     {
         var cadena = indice1.toString()+indice2.toString();
         $scope.actual = cadena;
 
if($scope.elementos[cadena]==null)
             $scope.elementos[cadena]=1;
         else
             $scope.elementos[cadena]++;
     }
 
});

//angular.module('ejemploAngularOrlyApp').controller("MainCtrl", function($scope)
// {
//    
//    //var myMatrix = [['Jill','Smith','50'],['Eve','Jackson','94'],['John','Doe','80'],['Francesco','Asqueroso','-96']];    
//    
//    var myMatrix = ['1','1asdf','1asdf','1asdf','1asdf','1fdasd'];    
//    var vparametro = "algo";
//    
//    $scope.usuarios = myMatrix;
//    $scope.vparametro = vparametro;
//    
//});
