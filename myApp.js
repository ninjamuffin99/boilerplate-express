require('dotenv').config();

let express = require('express');
let app = express();

app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));

console.log("Hello World");

app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/funny/', function(req, res) {
    res.send('swag');
});



app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.send(req.time);
});

app.get("/json", function(req, res) {

    let str = "Hello json";

    if (process.env.MESSAGE_STYLE == "uppercase")
        str = str.toUpperCase();

    res.json({ "message": str });
});

module.exports = app;