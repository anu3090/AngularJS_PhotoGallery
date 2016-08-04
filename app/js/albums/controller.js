/**
 * Created by anuradha on 19.07.16.
 */

angular.module('app')
    .controller('albumcontroller',['$scope','$http','$location',function($scope,$http,$location){

        /*REST API call to get the list of albums */

        $http.get('http://jsonplaceholder.typicode.com/albums/').then(function(response){
            $scope.albums = response.data;
        });
        /*Update the url with the selected album id */
        $scope.update_url = function(album){
            $location.path('/albums/'+ album.id);
        };
    }])
    .controller('photocontroller',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){

        var albumId = $routeParams.id;

        /*REST API call to get the photos based on the selected album */
        $http.get('http://jsonplaceholder.typicode.com/albums/' + albumId + '/photos/').then(function(response){
            $scope.photos = response.data;
        });

        $scope.load_photos = function(photo){
            var url = photo.url;
            window.location.href = url;
        }
        /*Function to display tooltip while hovering on the photo */
        $scope.hoverIn = function(){
            this.titleDisplay = true;
        };

        $scope.hoverOut = function(){
            this.titleDisplay = false;
        };

    }]);

