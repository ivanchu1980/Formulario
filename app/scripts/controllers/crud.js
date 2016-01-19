'use strict';

angular.module('ejemploAngularOrlyApp').controller("CrudCtrl", function($scope)
 {
    var personas=[
          {
          nombre:'Willy',
          telefono:'872368273',
          sexo:'M'
          },
          {
          nombre:'Orly',
          telefono:'666448273',
          sexo:'H'
          },
          {
          nombre:'Potro',
          telefono:'912225547',
          sexo:'O'
          }

          ];    
    
    var vparametro = "algo";
    
    $scope.personas = personas;
    $scope.vparametro = vparametro;
    $scope.ocultar = true;
   
    $scope.mostrar = function(){
        $scope.ocultar = !$scope.ocultar;
    }
    

    $scope.guardar = function(){
        $scope.personas.push({
          nombre:$scope.nombre,
          telefono:$scope.telefono,
          sexo:$scope.sexo
          });
    }
        
})


angular.module('ejemploAngularOrlyApp').controller("InsertCtrl", function($scope)
 {
    
})

;

