// -------------
// For more documentation visit http://easydev.org/#/documentation/template/node-js
// -------------

const mongoose = require('mongoose');
const properties = require('../properties.js');
const logger = require('../logger.js');
exports.connection;

connectDB = function()  {
	const dbConnection_InfoClienti_db = mongoose.createConnection('mongodb://' + properties.InfoClienti_db_dbUrl, function(err){
		if(err) {
			logger.error(err);
			setTimeout(function() {
				console.log("Retry DB connection");
				connectDB();
			}, 3000);
		}
		else
		{
		    exports.connection = dbConnection_InfoClienti_db;
			logger.info("MongoDB connected at: " + properties.InfoClienti_db_dbUrl);
			
			//START IMPORT RESOURCE

			require('./InfoClienti_db_schema.js');

			require('../resource/InfoClienti_db/Customer.js');
			require('../resource/InfoClienti_db/Project.js');
			
			//END IMPORT RESOURCE
		}
	});

}

connectDB();