const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("public"));


// default URL for website
app.use('/dashboard', function(req,res){
    console.log('board')
    res.sendFile(path.join(__dirname+'/views/Dashboard.html'));
    //__dirname : It will resolve to your project folder.
  });
// default URL for website
app.use('/contactus', function(req,res){
    res.sendFile(path.join(__dirname+'/views/contactUs.html'));
    //__dirname : It will resolve to your project folder.
  });
  // default URL for website
app.use('/', function(req,res){
    console.log('haahh')
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
  });

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);