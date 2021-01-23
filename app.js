var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');

app.use(express.static('public'))

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/html/homepage.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});