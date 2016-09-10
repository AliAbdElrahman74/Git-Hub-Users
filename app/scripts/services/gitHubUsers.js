    angular.module('gitHubApp').factory('UsersService' ,function($http ,$q, $stateParams , $state)


{


var UsersService={

  next :null ,
 userData :null 

};
 

   
    
        

       
        
        UsersService.getUsers = function(link) {
             var userData;
             var deffered = $q.defer();
            $http.get(link)
                    .then(function(data) {
                        
                         userData = data;
                     
                        // 
                        deffered.resolve(userData);

                    });

                     return deffered.promise ; 


        };

        UsersService.getNext = function(){
            return this.next;
        }


        UsersService.getUser = function(userId){

            var userData;
             var deffered = $q.defer();
            $http.get("//api.github.com/user/"+userId)
                    .then(function(data) {
                        
                        userData = data;
                        deffered.resolve(userData);

                    }, function(error){

                        $state.go('state1.edit', {userId: 1});

                     });
                     return deffered.promise ; 
            
        };
        
    

   

    
     return UsersService;

           });
  
 