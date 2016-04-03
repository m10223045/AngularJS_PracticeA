(function(){
	var app = angular.module('tablegem', []);


	app.controller("TableController", ['$http', function($http){
		var store = this;

		$http.get('Adult2000.json').success(function(data){
			store.adultData = data;
		});
	}]);




	// app.controller("TableController", function(	){
	// 	this.adultData = adult;
	// });


	adult = [
		{ id: 1, name: "Tom"},
		{ id: 2, name: "Jhon"}
	]

})();