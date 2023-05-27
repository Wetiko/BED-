var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var games = require('../model/games');

app.use(bodyParser.json());
app.use(urlencodedParser);


// Endpoint 1: GET /games/:category/
app.get("/games/:category", function (req, res) {
    var category = req.params.category;
    games.getGamesByCategory(category, function (err, result) {
        if (err) {
            res.status(500).send({ "message": "Some error occurred" })
        } else {
            if (result.length == 0) {
                res.status(422).send({ "message": "Invalid category" })
            } else {
                res.status(200).send(result);
            }
        }
    });
});

// Endpoint 2: PUT /games/price
app.put("/games/price", function (req, res) {
    let gameIDs = req.body.gameIDs.replaceAll(" ", "")
    let price = req.body.price.replaceAll(" ", "")
    games.putPriceOfGames(gameIDs, price, function (err, result) {
        if (err == "ID") {
            res.status(422).send({ "message": "No such game(s) exists." })
        } else {
            if (err) {
                res.status(500).send({ "message": "Some error occurred" })
            } else {
                res.status(200).send({ "message": "Price updated successfully" });
            }
        }
    });
});

// Endpoint 3: GET /recommendation/:userid
app.get("/recommendation/:userid", function (req, res) {
    let userid = req.params.userid;
    games.getRecommendationByID(userid, function (err, result) {
        if (err) {
            res.status(500).send({ "message": "Some error occurred" })
        } else {
            if (result["Recommended"].length == 0) {
                res.status(422).send({ "message": "No recommendations for user found." })
            } else {
                res.status(200).send(result);
            }
        }
    });
});

// Endpoint 4: POST /interest/:userid
app.post("/interest/:userid", function (req, res) {
    let userid = req.params.userid;
    let categories = req.body.categories.replaceAll(" ", "");
    games.InsertNewInterest(userid, categories, function (err, res) {
        if (err) {
            if (err == "ID") {
                res.status(500).send({ "message": "No such user exists." })
            } else if (err == "Category") {
                res.status(500).send({ "message": "No such category exists." })
            } else {
                res.status(500).send({ "message": "Some error occurred" })
            }
        } else {
            res.status(200).send({ "message": "Success" }, res);
        }
    });
})
module.exports = app;