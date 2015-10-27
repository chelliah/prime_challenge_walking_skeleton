/**
 * Created by aronthomas on 10/26/15.
 */
var app = angular.module('app',[]);
app.controller("IndexController",['$scope','$http',function($scope,$http){
    $scope.cat = {};
    $scope.cats = [];
    var fetchCats = function(){
        return $http.get('/cats').then(function(response){
            if(response.status != 200){
                throw new Error('Failed to fetch cats from the API');
            }
            $scope.cat = {}; //empties out the form
            $scope.cats = response.data; //saves returned data
            return response.data;
        })
    };
    $scope.add = function(cat){
        return $http.post('/add',cat).then(fetchCats);
    };
    fetchCats();
}]);