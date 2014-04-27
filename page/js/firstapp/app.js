var firstApp = angular.module('firstApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

firstApp.config(function ($routeProvider){
	$routeProvider
		.when('/main',
			{
				controller: 'mainController',
				templateUrl: 'Partials/Main.html',
				
			})
		.when('/main/kurse',
			{
				controller: 'classController',
				templateUrl: 'Partials/main-Kurse.html'
				
			})
		.when('/main/termin-anlegen',
			{
				controller: 'neueTermine',
				templateUrl: 'Partials/main-neueTermine.html'
			})
		.otherwise({ redirectTo: '/' });
});