let express = require('express');
let app = express();




console.log("Hello World");


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/funny/', function(req, res) {
    res.send('swag');
});

module.exports = app;