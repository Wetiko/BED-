var mysql = require("mysql");

var dbConnect = {
	getConnection: function () {
		var conn = mysql.createConnection({
			host: "localhost",
			user: "0361a396177a9cb",
			password: "ba7816bf8f01cfe",
			database: "steam_games",
		});

		return conn;
	},
};
module.exports = dbConnect;
