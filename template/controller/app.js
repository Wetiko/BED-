var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(urlencodedParser);

// Don't touch anything above this

const testQueries = require('../model/models.js'); // Rememeber to change this to match your file name

app.get('/test', function (req, res) {
    testQueries.getSomething(function (err, result) {
        if (err) {
            res.status(500).send({ "message": "Internal Server Error." }) 
            // Change this to reflect what the question asks for. 
        } else {
            res.status(200).send(result)
        }
    })
})

app.post('/test', function (req, res) {
    let something = req.body.something // rmb to change this

    testQueries.postSomething(something, function (err, result) {
        if (err) {
            res.status(500).send({ "message": "Internal Server Error." })
        } else {
            res.status(200).send(result)
        }
    })
})

module.exports = app;