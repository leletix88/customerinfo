// START - USED SERVICES
/*
 *	CustomerService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	CustomerService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * CustomerService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('CustomerListController', ['$scope', 'CustomerService',
    function ($scope, CustomerService ) {
		
    	$scope.list = CustomerService.query();
    	
}]);