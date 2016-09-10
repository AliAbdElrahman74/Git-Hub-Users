(function () {
    'use strict';
    
   var  parse_link_header= function (header) {
              if (header.length == 0) {
                throw new Error("input must not be of zero length");
              }

              // Split parts by comma
              var parts = header.split(',');
              var links = {};
              // Parse each part into a named link
              _.each(parts, function(p) {
                var section = p.split(';');
                if (section.length != 2) {
                  throw new Error("section could not be split on ';'");
                }
                var url = section[0].replace(/<(.*)>/, '$1').trim();
                var name = section[1].replace(/rel="(.*)"/, '$1').trim();
                links[name] = url;
              });

              return links;
       }


    
    function GitHubDataController($scope , UsersService , $http  , $state) {
        
        $scope.next = null ; 
         $scope.userData = [];
        
            UsersService.getUsers("//api.github.com/users?page=1&per_page=10").then(function(response){
                $scope.userData = response.data;
                $scope.next = parse_link_header(response.headers("Link"))['next'] ;
                $state.go('state1.edit', {userId: $scope.userData[0].id});

            });


       
        // console.log(UsersService.getUsers()) ;
        // $scope.next = UsersService.getNext() ;
        
        
        $scope.loadMore = function() {
            
            UsersService.getUsers($scope.next).then(function(response){
                $scope.next = parse_link_header(response.headers("Link"))['next'] ;
                $.merge($scope.userData , response.data);

            });
            
                  
        } 



            
              

    };
     GitHubDataController.$inject = ['$scope', 'UsersService' , '$http' , '$state'];
    angular
        .module('gitHubApp') 
        .controller('GitHubDataController', GitHubDataController);
    
    

})();