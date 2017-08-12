// -------------
// For more documentation visit http://easydev.org/#/documentation/template/node-js
// -------------

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db_InfoClienti_db_schema = [];
const db_InfoClienti_db = [];

//SCHEMA DB InfoClienti_db

//SCHEMA Customer
db_InfoClienti_db_schema.Customer = new mongoose.Schema({
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
	/*
	_customer: {
		type: Schema.ObjectId,
		ref : "Project"
	},
	*/
});

//SCHEMA Project
db_InfoClienti_db_schema.Project = new mongoose.Schema({
	description: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	//RELATIONS
	_customer: {
		type: Schema.ObjectId,
		ref : "Customer"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});

require('./InfoClienti_db_customSchema.js');
var InfoClienti_db_model = require('./InfoClienti_db_crud.js');


db_InfoClienti_db.Customer = InfoClienti_db_model.connection.model('Customer', db_InfoClienti_db_schema.Customer );
db_InfoClienti_db.Project = InfoClienti_db_model.connection.model('Project', db_InfoClienti_db_schema.Project );

module.exports = db_InfoClienti_db;
