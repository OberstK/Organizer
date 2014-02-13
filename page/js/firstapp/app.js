var firstApp = angular.module('firstApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

firstApp.config(function ($routeProvider){
	$routeProvider
		.when('/kurse',
			{
				controller: 'classController',
				templateUrl: 'Partials/Kurse.html'
			})
		.when('/termin-anlegen',
			{
				controller: 'neueTermine',
				templateUrl: 'Partials/neueTermine.html'
			})
		.otherwise({ redirectTo: '/' });
		
});