var firstApp = angular.module('firstApp', ['ngRoute', 'ngSanitize']);

firstApp.config(function ($routeProvider){
	$routeProvider
		.when('/kurse',
			{
				controller: 'classController',
				templateUrl: 'Partials/Kurse.html'
			})
			.otherwise({ redirectTo: '/' });
		
});