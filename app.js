var express = require( 'express' );
var app = express();

// Import the data layer
//var mongoose = require( 'mongoose' );

app.configure(function(){
	app.set( 'view engine', 'jade' );
	app.use( express.static( __dirname + '/public' ) );
	//mongoose.connect( 'mongodb://localhost/nodebackbone' );
});

app.get( '/', function( req, res ){
	res.render( "index.jade", { layout: false });
});

app.listen( 8080, function(){
	console.log("Now listening on port 8080");
});