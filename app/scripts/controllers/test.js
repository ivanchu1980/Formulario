'use strict';
 
angular.module('ejemploAngularOrlyApp').controller("TestCtrl", function($scope)
 {
    
    //var myMatrix = [['Jill','Smith','50'],['Eve','Jackson','94'],['John','Doe','80'],['Francesco','Asqueroso','-96']];    
    
                var platos=[
                      {
                      name:'Uthapizza',
                      image:'images/uthapizza.png',
                      category:'mains',
                      label:'Hot',
                      price:'4.99',
                      description:'A unique combination of Indiam Uthappam(pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherrytomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                      comment:''
                      },
                      {
                      name:'Zucchipakoda',
                      image:'images/zucchipakoda.png',
                      category:'appetizer',
                      label:'',
                      price:'1.99',
                      description:'Deep fried.',
                      comment:''
                      },
                      {
                      name:'Vadonut',
                      image:'images/vadonut.png',
                      category:'appetizer',
                      label:'New',
                      price:'1.99',
                      description:'A quienteses.',
                      comment:''
                      },
                      {
                      name:'Elaicheesecake',
                      image:'images/elaicheesecake.png',
                      category:'dessert',
                      label:'',
                      price:'2.99',
                      description:'York style.',
                      comment:''
                      }
                      ];    
    
    var vparametro = "algo";
    
    $scope.dishes = platos;
    $scope.vparametro = vparametro;
    
});