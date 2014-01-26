var mainController = firstApp.controller('mainController', function($scope){
	$scope.classes = [
		{name: "EWI", prof: "Prof. Dr. Esswein", fachgebiet: "Winf"},
		{name: "Unternehmenskommunikation", prof: "Prof. Dr. Schoop", fachgebiet: "Winf"},
		{name: "Technologiemanagement", prof: "Prof. Dr. Schefzcyck", fachgebiet: "BWL"}
	];

	$scope.tabClick = function(){
		
		/*alert("Meine id ist: "+this.className);*/
	}; 

});