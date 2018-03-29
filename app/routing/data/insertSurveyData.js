var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "2001Cr250",
    database: "friend_finderDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    insertSurvey();
});

function insertSurvey() {
    console.log("Inserting a new survey...\n");
    var query = connection.query(
        "INSERT INTO userSurvey SET ?",
        {
            name: ,
            photo: ,
            gender: ,
            question1: ,
            question2: ,
            question3: ,
            question4: ,
            question5: ,
            question6: ,
            question7: ,
            question8: ,
            question9: ,
            question10: ,
        },
        function(err, res) {
            console.log(res.affectedRows + " product inserted!\n");
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}
