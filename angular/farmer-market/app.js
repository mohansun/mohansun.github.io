//# {  version: '1.0', Author: 'mohan.chinnappan.n@gmail.com' date:'10-18-2013' }
angular.module('geonamesApp', ['ngResource']);
function geonamesCtrl($scope, $resource) {
 var url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/:action";
 $scope.geonames = $resource(url, { 
      action:'zipSearch',     
     callback:'JSON_CALLBACK'}, 
   { get: {method:'JSONP'} } 
);

$scope.doSearch = function(){
 $scope.result =  $scope.geonames.get( {zip: $scope.searchTerm } );
}
 

} 
