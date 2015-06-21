# Datadiff Node Module

This is a simple node lib that creates a request client and sends a commit to the [Datadiff](Datadiff.co) API.

## Installation

You can `git clone` this repo or simply copy and paste the datadiff.js file.

###Install with NPM###
`npm install datadiff --save`

## Usage

1. Create a [Datadiff](https://datadiff.co) account.
2. Create a data source and obtain it's API credentials.
3. Require the node module.
4. Execute a commit to the Datadiff API.

The library sends a commit to the API via the `commit`  method with the following arguments:

1. The data model (object)
2. The name of the collection/table
3. The command (created|updated|deleted)
4. The unique ID field. i.e `_id` for Mongo.
5. A meta data object (optional)
6. A callback function (optional)

## Committing an update to the Datadiff API

In this example a customer has just updated their account.

```
var Datadiff = require('datadiff'),
    diff = new Datadiff({key: '**********', secret: '**********'});

...

// update account object
account.update(data, function(err, acc) {
	
	if(err) {
		// handle error
	}
	
	diff.commit(acc.toObject(), 'accounts', 'updated', '_id', {action: 'updated account', src: 'accounts page on software'});
	
});
```
