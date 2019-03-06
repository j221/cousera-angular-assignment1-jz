(
function(){
	'use strict';

	angular.module("lunchCheckerApp", [])
	.controller("lunchCheckerController", lunchCheckerController);

	lunchCheckerController.$injector = ['$scope'];

	function lunchCheckerController($scope){
		console.log("controller");

		$scope.lunchList = "";

		$scope.checkTooMuch = function() {
			var numberOfMeals = getNumberOfMeals($scope.lunchList);
			$scope.result = getResultMessage(numberOfMeals);
		};

	};


	function getNumberOfMeals(lunchList) {
		console.log(lunchList + " -> " + lunchList.split(",").length);
		return lunchList.split(",").length; 
	};


	function getResultMessage(numberOfMeals) {
		if(numberOfMeals > 3){
			return "Too Much!";
		}else{
			return "Enjoy!";
		}

	};
}

)();