// -------------
// For more documentation visit http://easydev.org/#/documentation/template/node-js
// -------------

const app = require('../../app.js');
const db_InfoClienti_db = require('../../db/InfoClienti_db_schema.js')

require('./custom/ProjectCustom.js');

/*
 * SCHEMA DB Project
 * 
	{
		description: {
			type: 'String'
		},
		name: {
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
	
app.post('/project/', function(req, res){
	obj = new db_InfoClienti_db.Project(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete']('/project/:id', function(req, res){
	db_InfoClienti_db.Project.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

//CRUD - FIND BY _customer
	
app.get('/project/findBy_customer/:key', function(req, res){

	db_InfoClienti_db.Project.find({ '_customer' : req.params.key}).exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});
	
//CRUD - GET ONE
	
app.get('/project/:id', function(req, res){
	db_InfoClienti_db.Project.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - GET LIST
	
app.get('/project/', function(req, res){
	db_InfoClienti_db.Project.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - LINK LIST _customer
	
app.post('/project/_customer/:key', function(req, res){

	db_InfoClienti_db.Project.find({ _customer: req.params.key }, function (err, list){
		var listInsert = req.body.list;
		var key = req.params.key;
		db_InfoClienti_db.Project.update({ _customer : key, '_id': {$nin: listInsert}}, {$pull: { '_customer': key}}, {multi: true}, function (err) {
			if (err) return handleError(err, res);
			db_InfoClienti_db.Project.update({'_id': {$in: listInsert}}, {$addToSet: { '_customer': key}}, {multi: true}, function (err) {
				if (err) return handleError(err, res);
				res.send(err);  
			});
		});
	});
	
});

//CRUD - EDIT
	
app.post('/project/:id', function(req, res){
	db_InfoClienti_db.Project.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

