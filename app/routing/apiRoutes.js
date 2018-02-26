// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    //----------------------------------------------------------------------------
    // API GET Requests
    // ---------------------------------------------------------------------------

    app.get("/api/survey", function(req, res) {
        res.json(surveyData);
    });

    app.get("/api/matches", function(req, res) {
        res.json(matchData);
    });

    app.get("/api/browse", function(req, res) {
       res.json(browseUserData);
    });

    //----------------------------------------------------------------------------
    // API POST Requests
    // User submits form data (a JSON object) the JSON is pushed to the appropriate
    // ---------------------------------------------------------------------------

    app.post("/api/survey", function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitListData.push(req.body);
            res.json(false);
        }
    });

    // ---------------------------------------------------------------------------
    // Reinitialize the application and data
    //----------------------------------------------------------------------------

    app.post("/api/clear", function() {
        // Empty out the arrays of data
        tableData = [];
        waitListData = [];

        console.log(tableData);
    });
};
