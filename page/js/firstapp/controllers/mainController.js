var mainController = firstApp.controller('mainController', function($scope){
	/*$scope.classes = [
		{name: "EWI", prof: "Prof. Dr. Esswein", fachgebiet: "Winf"},
		{name: "Unternehmenskommunikation", prof: "Prof. Dr. Schoop", fachgebiet: "Winf"},
		{name: "Technologiemanagement", prof: "Prof. Dr. Schefzcyck", fachgebiet: "BWL"}
	];*/

	$scope.tabClick = function(t){
		var x = 1;
		while(document.getElementById("tab"+x)){
			if(document.getElementById("tab"+x).className=="active"){
				document.getElementById("tab"+x).className="";
			}
			x++;
		}
		document.getElementById("tab"+t).className="active";
	};
});

