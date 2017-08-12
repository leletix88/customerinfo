// START - USED SERVICES
/*
 *	ProjectService.create
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ProjectService.findBy_customer
 *		PARAMS: 
 *					Objectid key - Id della risorsa _customer da cercare
 *		
 *
 *	ProjectService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	ProjectService.list
 *		PARAMS: 
 *		
 *
 *	ProjectService.strictLinkListOf_customer
 *		PARAMS: 
 *					Objectid key - Id Project to link list
 *					Array list - List of linked resource
 *		
 *
 *	ProjectService.update
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

app.controller('ProjectEditController', ['$scope', '$location', '$routeParams', '$q', 'ProjectService', 'CustomerService',
    function ($scope, $location, $routeParams, $q, ProjectService , CustomerService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = ProjectService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new ProjectService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/projects/');
    		});
    	}
    	
    	$scope.remove = function(){
    		ProjectService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/projects/');
    		});
    	}
    	
    		
        //manage relation _customer
        		
    	$scope.list_Customer = CustomerService.query();

}]);