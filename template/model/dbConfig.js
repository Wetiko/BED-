var mysql = require('mysql');

var dbConnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root", // remember to change this!
            password: "root", // remember to change this!
            database: "module" // remember to change this!
        });

        return conn;

    }
}
module.exports = dbConnect;