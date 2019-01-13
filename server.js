//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-personalwebsite-app'));

app.get('/*', function(req,res) {
    
	res.sendFile(path.join(__dirname+'/dist/my-personalwebsite-app/index.html'));
});



var fs = require('fs');

app.get('/classifier', function(req,res) {

	try {  
	    var data = fs.readFileSync('training.txt', 'utf8');
	    console.log(data.length)
	    var i=0;
	    var size=data.length;

	    while(i<size){
	        while(data[i]!="    "){
	            console.log(data[i])
	            ++i;
	        }
	        break;
	    }

	    // console.log(data.toString());    
	} catch(e) {
	    console.log('Error:', e.stack);
	}

});

var http = require("http");
setInterval(function() {
    http.get("http://william-simon.herokuapp.com");
}, 1500000); // every 25 minutes (1500000)

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
