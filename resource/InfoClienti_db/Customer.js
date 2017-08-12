// -------------
// For more documentation visit http://easydev.org/#/documentation/template/node-js
// -------------

const app = require('../../app.js');
const db_InfoClienti_db = require('../../db/InfoClienti_db_schema.js')

require('./custom/CustomerCustom.js');

/*
 * SCHEMA DB Customer
 * 
	{
		businessUnit: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		tags: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		_customer: {
			type: Schema.ObjectId,
			ref : "Project"
		},
		
	}
 * 
 */



//CRUD METHODS


//CRUD - CREATE
	
app.post('/customer/', function(req, res){
	obj = new db_InfoClienti_db.Customer(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete']('/customer/:id', function(req, res){
	db_InfoClienti_db.Customer.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});
	
//CRUD - GET ONE
	
app.get('/customer/:id', function(req, res){
	db_InfoClienti_db.Customer.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - GET LIST
	
app.get('/customer/', function(req, res){
	db_InfoClienti_db.Customer.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - EDIT
	
app.post('/customer/:id', function(req, res){
	db_InfoClienti_db.Customer.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

