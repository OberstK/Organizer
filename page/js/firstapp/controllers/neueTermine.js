var neueTermine = firstApp.controller('neueTermine', function($scope){
	$scope.study = [
		{name: "Wirtschaftswissenschaften"},
		{name: "Wirtschaftsingenieurwesen"},
		{name: "Wirtschaftsinformatik"}
	];

	$("#lvStudy").dropdown();

});

