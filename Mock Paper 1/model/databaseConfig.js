var mysql = require('mysql');
var dbConnect = {
    getConnection: function () {
        let conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "<password>", // Remember to change this.
            database: "module"
        });
        return conn;
    }
}

module.exports = dbConnect;