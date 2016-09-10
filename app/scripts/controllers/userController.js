(function () {
    'use strict';
    


function UserController($scope ,$http , $stateParams , $state  , UsersService) {
        
        

        $scope.viewUser  = function() {


             //   console.log($stateParams.userId) ;
                 if (!isNaN($stateParams.userId)){
                  //  console.log('here');


                    UsersService.getUser($stateParams.userId).then(function(response){
                         $scope.currentUser =  response.data;

                         console.log($scope.currentUser);
                         if ($scope.currentUser.bio === null){
                            $scope.currentUser.bio = 'No BIO' ;
                                
                     }

                     } , function(error){

                        console.log('here') ;

                     });
                            
                        
                 }
                 else {
                        $state.go('state1.edit', {userId: 1});
                     }
                    



            

        }

        $scope.viewUser();     
            
              

    };



     UserController.$inject = ['$scope', '$http'  , '$stateParams' , '$state' , 'UsersService'];
    angular
        .module('gitHubApp') 
        .controller('UserController', UserController);


    
    

})();