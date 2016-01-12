'use strict'
//call packages used
var express = require('express');
var app = express();

var multer = require('multer');
var upload = multer({dest:'uploads/'});

app.use('/', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
    });

//set route for form to submit to
//set upload.single to match input name
app.post('/uploads', upload.single('fileName'), function(req, res, next) {
//just to check information being returned
console.log('Size of file received is: ' + req.file.size + ' bytes');
//format string to be converted into JSON
res.json({filesize: req.file.size});
})


var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log('Express server listening on port: ' + port);
});
