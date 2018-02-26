// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

//Create a reference to express and set the port if not on Heroku
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// Include the route files for the client and server
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});