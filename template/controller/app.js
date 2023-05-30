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

app.put("/test/:testID", function (req, res) {
    let foodID = req.params.foodID;
  
    let colum1 = req.body.colum1;
    let colum2 = req.body.colum2;
    let colum3 = req.body.colum3;
  
    FOOD.putSomething(
      ID,
      colum1,
      colum2,
      colum3,
      function (err, result) {
        if (err) {
          res.status(500).send({ message: "Internal Server Error." });
        } else {
          res.status(200).send(result);
        }
      }
    );
  });

module.exports = app;