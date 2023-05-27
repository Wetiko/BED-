var express = require('express');
/*
Name: Zavier Lee Wey
Class: DISM/FT/2B/21
Admission No: 2205513
*/
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const coursedb = require('../model/courseModule')

app.use(bodyParser.json()); 
app.use(urlencodedParser);

app.get("/courseModule/", function (req, res) {
    coursedb.getCourses(function (err, result) {
        if (err) {
            res.status(500).send({ "message": "Internal Server Error." })
        } else {
            res.status(200).send(result)
        }
    })
})

app.post("/courseModule", function (req, res) {
    let name = req.body.name
    let course = req.body.course
    let code = req.body.code

    coursedb.postCourses(name, course, code, function (err, result) {
        if (err) {
            res.status(500).send({ "message": "Internal Server Error." })
        } else {
            res.status(200).send(result)
        }
    })
})

module.exports = app;