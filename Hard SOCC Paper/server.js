var app = require("./controller/app");

var port = 4565;

var server = app.listen(port, function () {
  console.log("Web App hosted http://localhost:%s", port);
});
