(function(){
	var app = angular.module('tablegem', []);

	// app.controller("TableController", function($scope, $http){
	// 	this.adultData=$http.get('Adult2000.json');
	// });


	app.controller("TableController", ['$scope', '$http', function($scope, $http){
		var store = this;

		$http.get('Adult2000.json').success(function(data){
			store.adultData = data;
		});
	}]);


	// app.controller("TableController", ['$scope', '$http', function($scope, $http){
	// 	this.adultData =[];

	// 	$http.get('Adult2000.json').success(function(data){
	// 		angular.forEach(data, function(item, ind){
	// 			this.adultData.push(item);
	// 		});
	// 	});
	// }]);

	// app.controller("TableController", function(	){
	// 	this.adultData = adult;
	// });


	adult = [
		{ id: 1, name: "Tom"},
		{ id: 2, name: "Jhon"}
	]

})();