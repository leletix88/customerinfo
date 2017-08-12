// -------------
// For more documentation visit http://easydev.org/#/documentation/template/node-js
// -------------

var app = angular.module('CustomerInfo_App', [
'ngRoute',
'ngResource',
'ngCookies'
]).config(function ($routeProvider) {
	
	$routeProvider
// START - ROUTE
	.when('/customers/:id', {
	  templateUrl: 'html/CustomerEdit.html',
	  resolve: {
		  AccessManager: ["AccessManager", function(AccessManager) { return AccessManager.isAuthenticated(); }]
	  },
	})
	.when('/customers', {
	  templateUrl: 'html/CustomerList.html',
	  resolve: {
		  AccessManager: ["AccessManager", function(AccessManager) { return AccessManager.isAuthenticated(); }]
	  },
	})
	.when('/home', {
	  templateUrl: 'html/Home.html',
	  resolve: {
		  AccessManager: ["AccessManager", function(AccessManager) { return AccessManager.isAuthenticated(); }]
	  },
	})
	.when('/projects/:id', {
	  templateUrl: 'html/ProjectEdit.html',
	  resolve: {
		  AccessManager: ["AccessManager", function(AccessManager) { return AccessManager.isAuthenticated(); }]
	  },
	})
	.when('/projects', {
	  templateUrl: 'html/ProjectList.html',
	  resolve: {
		  AccessManager: ["AccessManager", function(AccessManager) { return AccessManager.isAuthenticated(); }]
	  },
	})

// END - ROUTE

// INSERT HERE YOUR CUSTOM ROUTES
		

// DEFAULT ROUTES
	.when('/login', {
	    templateUrl: 'html/Login.html',
	    controller: 'LoginController'
	})
	.when('/logout', {
	      templateUrl: 'html/Login.html',
	      controller: 'LogoutController',
    	  resolve: {
    		  AccessManager: ["AccessManager", function(AccessManager) { return AccessManager.isAuthenticated(); }]
    	  },
	})
	.when('/', {
	      templateUrl: 'html/Home.html',
    	  resolve: {
    		  AccessManager: ["AccessManager", function(AccessManager) { return AccessManager.isAuthenticated(); }]
    	  },
	})
	.otherwise({
		templateUrl: 'html/404.html',
	});
	
});