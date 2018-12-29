//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-personalwebsite-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/my-personalwebsite-app/index.html'));
});

var http = require("http");
setInterval(function() {
    http.get("http://william-simon.herokuapp.com");
}, 1500000); // every 25 minutes (1500000)

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
