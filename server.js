var express = require('express');
var http = require('http');
var enforce = require('express-sslify');
const path = require('path');


const app = express();
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Serve only the static files form the dist directory
app.use(express.static('./dist/CocktailitoGenesys'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/CocktailitoGenesys/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
