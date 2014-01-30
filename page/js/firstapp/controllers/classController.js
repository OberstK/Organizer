var classController = firstApp.controller('classController', function($scope){
	$scope.classes = [
		{name: "EWI", prof: "Prof. Dr. Esswein", fachgebiet: "Winf"},
		{name: "Unternehmenskommunikation", prof: "Prof. Dr. Schoop", fachgebiet: "Winf"},
		{name: "Technologiemanagement", prof: "Prof. Dr. Schefzcyck", fachgebiet: "Wiwi"}
	];
	$scope.study = [
		{name: "Wirtschaftswissenschaften", kurz: "Wiwi"},
		{name: "Wirtschaftsingenieurwesen", kurz: "Wing"},
		{name: "Wirtschaftsinformatik", kurz: "Winf"}
	];

	//probably not really necessary...
	function classAccordion($scope){
		 $scope.oneAtATime = true;
	}

});

