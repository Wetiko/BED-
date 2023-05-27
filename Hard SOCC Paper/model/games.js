const dbConn = require('./databaseConfig');

const dbQuery = {
    getGamesByCategory: function (category, callback) {
        var conn = dbConn.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            } else {
                var sql = `
                SELECT g.name, g.price, g.description, c.name AS category 
                FROM games g JOIN category c ON 
                FIND_IN_SET(c.categoryID, g.category_id) WHERE c.name = ?
                `;
                conn.query(sql, [category], function (err, result) {
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    putPriceOfGames: function (gameIDs, price, callback) {
        var conn = dbConn.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            } else {
                gameIDs_array = gameIDs.split(",");
                price_array = price.split(",");
                let selectSQL = "SELECT game_id FROM games as g WHERE g.game_id IN (?)";
                conn.query(selectSQL, [gameIDs_array], function (err, result) {
                    if (err) {
                        return callback(err, null);
                    } else {
                        if (result.length != gameIDs_array.length) {
                            console.log("Found invalid gameIDs, returning error now.")
                            return callback("ID", null);
                        } else {
                            console.log("All gameIDs are valid, proceeding to update price.")
                            for (let i = 0; i < gameIDs_array.length; i++) {
                                let sql = "UPDATE games SET price = ? WHERE game_id = ?";
                                conn.query(sql, [price_array[i], gameIDs_array[i]], function (err, result) {
                                    if (err) {
                                        console.log(err);
                                        return callback(err, false);
                                    }
                                });
                            }
                            return callback(null, true);
                        }
                    }
                })
            };
        });
    },
    getRecommendationByID: function (userId, callback) {
        var total_price = 0;
        var response = {};
        var conn = dbConn.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            } else {
                let sql =
                    `
                SELECT g.name, g.price, c.name AS category_name
                FROM games AS g
                JOIN category AS c ON g.category_id = c.categoryID
                WHERE g.category_id IN (
                    SELECT c.categoryID
                    FROM category AS c
                    WHERE c.categoryID IN (SELECT i.category_id FROM interest AS i WHERE i.user_id = ?)
                );
                `
                conn.query(sql, [userId], function (err, result) {
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        if (result.length > 3) {
                            result = result.slice(0, 3);
                        }

                        for (let i = 0; i < result.length; i++) {
                            total_price += result[i].price;
                        }

                        total_price = total_price * 0.80;
                        result = result.sort((a, b) => b.price - a.price)

                        response = {
                            "Recommended": result,
                            "Total Price": +total_price.toFixed(2)
                        }

                        return callback(null, response);

                    }
                });
            }
        });
    },
    // POST: /interest/:userid
    InsertNewInterest: function (userid, categories, callback) {
        var conn = dbConn.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            } else {
                let categoryArray = categories.split(",");
                let placeholders = categoryArray.map(() => "?").join(",");

                let sql = `
                    SELECT c.categoryID, c.name
                    FROM category AS c 
                    WHERE c.name IN (${placeholders})
                        AND c.categoryID IN (
                            SELECT i.category_id 
                            FROM interest AS i 
                            WHERE i.user_id = ?);
                `;

                let values = [...categoryArray, userid];

                conn.query(sql, values, function (err, duplicate) {
                    if (err) {
                        if (err.code == "ER_BAD_FIELD_ERROR") {
                            return callback(err, null);
                        } else {
                            console.log(err);
                            return callback(err, null);
                        }

                    } else {
                        if (duplicate.length > 0) {
                            for (let i = 0; i < categoryArray.length; i++) {
                                for (let j = 0; j < duplicate.length; j++) {
                                    if (categoryArray[i] == duplicate[j].name) {
                                        categoryArray.splice(i, 1);
                                    }
                                }
                            }
                        }
                    }

                    let sql = `
                        INSERT INTO interest (user_id, category_id)
                        VALUES (?, (SELECT c.categoryID FROM category AS c WHERE c.name = ?));
                    `;

                    for (let i = 0; i < categoryArray.length; i++) {
                        conn.query(sql, [userid, categoryArray[i]], function (err, result) {
                            console.log("Inserting new interest: " + categoryArray[i] + " for user: " + userid)
                            if (err) {
                                console.log(err);
                                return callback(err, null);
                            }
                        });
                    }
                    return callback(null, true);
                });
            }
        });
    }
}

module.exports = dbQuery;