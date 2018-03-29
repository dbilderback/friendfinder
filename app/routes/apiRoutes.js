//--------------------------------------------------------------------------------
//
//--------------------------------------------------------------------------------
var questionsData = require("../data/questionsData");
var friendsData = require("../data/friendsData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    //----------------------------------------------------------------------------
    // API GET Requests
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(questionsData);
    });

    //----------------------------------------------------------------------------
    // API POST Requests
    // User submits form data (a JSON object) the JSON is pushed to the appropriate
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            difference: 0
          };
          var totalUserScore = 0;
          var totalDifference = 0;
          // Here we take the result of the user"s survey POST and parse it.
          var userSurvey = req.body;
          var userSurveyScores = [];
          //console.log("1"+JSON.parse(userSurvey));
          userSurveyScores = JSON.stringify(userSurvey);
          //console.log(JSON.parse(userSurveyScores));
          for (var key in userSurvey) {
              //console.log(userSurvey[key]);
              //console.log(key);
              switch(key) {
                case "name":
                    break;
                case "photo":
                    break;
                default:
                totalUserScore+=parseInt(userSurvey[key])
                    console.log(totalUserScore);
              }
          }
          // Here we loop through all the possible matches.
          //for (var i = 0; i < friendsData.length; i++) {
            for (var key in friendsData) {
                var totalMatchScore = 0;
                for (var i = 0; i < friendsData[key].scores.length; i++) {
                    totalMatchScore += parseInt(friendsData[key].scores[i]);
                }
                var tempHolder = 0;
                //console.log(totalMatchScore);
                if (totalMatchScore < totalUserScore) {
                    tempHolder = totalUserScore - totalMatchScore;
                    console.log("smaller"+tempHolder);
                }
                else {
                    tempHolder = totalMatchScore - totalUserScore;
                    console.log("bigger"+tempHolder);
                }
                console.log("diff"+bestMatch.difference);
                if (bestMatch.difference == 0) {
                    bestMatch.difference = tempHolder;
                    bestMatch.name = friendsData[key].name;
                    bestMatch.photo = friendsData[key].photo;
                    console.log("0" + bestMatch.name);
                }
                else if (tempHolder < bestMatch.difference) {
                    bestMatch.difference = tempHolder;
                    bestMatch.name = friendsData[key].name;
                    bestMatch.photo = friendsData[key].photo;
                    console.log("replace" + bestMatch.name);
                }
            };

            if (!bestMatch) {
                bestMatch = [(totalMatchScore-totalUserScore), friendsData[i].name];
                console.log("This is the 1st comparision "+bestMatch);
            }
            else {
                if (bestMatch[0,1] < (totalMatchScore-totalUserScore)) {
                    bestMatch = [(totalMatchScore-totalUserScore), friendsData[i].name];
                    console.log("This is the current best match "+bestMatch);
                }
            }
        console.log("Best Match " +bestMatch.name);
        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);
    });

    // ---------------------------------------------------------------------------
    // Reinitialize the application and data
    //----------------------------------------------------------------------------

    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = [];
        console.log(friendsData);
    });
};
