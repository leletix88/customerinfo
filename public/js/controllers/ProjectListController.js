// START - USED SERVICES
/*
 *	ProjectService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ProjectService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ProjectService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('ProjectListController', ['$scope', 'ProjectService',
    function ($scope, ProjectService ) {
		
    	$scope.list = ProjectService.query();
    	
}]);