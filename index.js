var request = require('request');

(function () {
	
	var DataDiff = function(config) {
		this.token = generateToken(config.key, config.secret);
	};

	DataDiff.prototype.commit = function(data, collection, cmd, identifier, meta, callbackFn) {

		var body = { 
	    	data: data,
	    	meta_data: meta,
	    	collection: collection,
	    	identifier: identifier || '_id',
	    	meta_data: meta || {},
	    	cmd: cmd
	    };

		var options = {
		    url: 'http://diff.datadiff.co/commit',
		    method: 'POST',
		    body: body,
		    json: true,
			headers: {
                'Authorization: BASIC ' : this.token
			}
		};

		function callback(error, response, body) {
			if (typeof callbackFn !== 'undefined') {
				callbackFn(error);
	        }
		}

		request(options, callback);

	};

    module.exports = DataDiff;

})();

var generateToken = function(a,b) {
	var buf = new Buffer(a + ':' + b).toString('base64');
	return buf;
};