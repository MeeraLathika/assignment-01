(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchItemCounter', function ($scope) {
  
  
  $scope.Check = function () {
    var inputText = $scope.input;
    var totalItems = calculateItemNumber(inputText);
	var message = '';
	if(totalItems==0){
		message="Please enter some input";
	}
	else if(totalItems<=3){
		message="Enjoy!";
	}
	else{
		message="Too much";
	}
	$scope.outputMessage = message;
  };


  function calculateItemNumber(string) {
    var count = 0;
	for (var i = 0; i<string.length; i++) {
     if(string[i]==','){
		count = count + 1;
	}
	}

    return count;
  }

});


})();
