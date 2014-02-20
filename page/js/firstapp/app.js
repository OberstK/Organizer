var firstApp = angular.module('firstApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

firstApp.config(function ($routeProvider){
	$routeProvider
		.when('/main',
			{
				controller: 'mainController',
				templateUrl: 'Partials/tabMain.html',
				view: 'nav'
			})
		.when('/main/kurse',
			{
				controller: 'classController',
				view: 'main',
				templateUrl: 'Partials/Kurse.html'
				
			})
		.when('/termin-anlegen',
			{
				controller: 'neueTermine',
				templateUrl: 'Partials/neueTermine.html'
			})
		.otherwise({ redirectTo: '/' });
});