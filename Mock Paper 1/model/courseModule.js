var db = require('./databaseConfig.js');

var courseQueries = {
    getCourses: function (callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                return callback(err, null)
            } else {
                let sql =
                    `
                SELECT * from coursemodule
                `
                conn.query(sql, function (err, result) {
                    if (err) {
                        return callback(err, null)
                    } else {
                        return callback(null, result)
                    }
                })
            }
        })
    },
    
    postCourses: function (name, course, code, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                return callback(err, null)
            } else {
                let sql = `
                INSERT INTO coursemodule (name, course, code) VALUES (?, ?, ?);
                `
                conn.query(sql, [name, course, code], function (err, result) {
                    if (err) {
                        return callback(err, null)
                    } else {
                        returnValue = { "Affected Rows": result.affectedRows.toString() }
                        return callback(null, returnValue)
                    }
                })
            }
        })
    }
}

module.exports = courseQueries;