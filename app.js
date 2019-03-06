(
function(){
	'use strict';

	angular.module("lunchCheckerApp", [])
	.controller("lunchCheckerController", lunchCheckerController);

	lunchCheckerController.$injector = ['$scope'];

	function lunchCheckerController($scope){
		console.log("controller");
	};
}

)();