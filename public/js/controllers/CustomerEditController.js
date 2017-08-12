// START - USED SERVICES
/*
 *	CustomerService.create
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ProjectService.findBy_customer
 *		PARAMS: 
 *					Objectid key - Id della risorsa _customer da cercare
 *		
 *
 *	CustomerService.get
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
 *	CustomerService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * CustomerService  
 * ProjectService  
 */
// END - REQUIRED RESOURCES

app.controller('CustomerEditController', ['$scope', '$location', '$routeParams', '$q', 'CustomerService', 'ProjectService', 'ProjectService',
    function ($scope, $location, $routeParams, $q, CustomerService , ProjectService , ProjectService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = CustomerService.get({_id: $scope.id});
        	$scope.external._Project_customer = ProjectService.findBy_customer({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new CustomerService();
        	$scope.external._Project_customer = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/customers/');
    		});
    	}
    	
    	$scope.remove = function(){
    		CustomerService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/customers/');
    		});
    	}
    	
    		
        //manage External relation _customer
        		
    	$scope.list_Project_customer = ProjectService.query();
    	
}]);