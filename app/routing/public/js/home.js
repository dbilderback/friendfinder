$(document).ready(function() {
    getSurveyQuestions();
    function getSurveyQuestions() {

        // Here we get the location of the root page.
        // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
        var currentURL = window.location.origin;
  
        // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
        $.ajax({ url: currentURL + "/api/friends", method: "GET" })
        .then(function(questionData) {
            // Loop through and display each of the customers
        for (var i = 1; i < 10; i++) {
            // Create the HTML Well (Section) and Add the table content for each reserved table
            var questionLabel = $("<label>");
            questionLabel.attr("for", "q"+i)
            questionLabel.text = questionData[0].Question_+i;
            var questionSelect = $("<select>");
            questionSelect.attr("id", "q"+i);
            questionSelect.addClass("u-half-width");
            questionSelect.append("<option value='1'>1 Disagree</option>");
            questionSelect.append("<option value='2'>2 Kinda Disagree</option>");
            questionSelect.append("<option value='3'>3 Whatever</option>");
            questionSelect.append("<option value='4'>4 Kinda Agree</option>");
            questionSelect.append("<option value='5'>5 Kinda Agree</option>");
            $("#questionSection").append(questionLabel);
            $("#questionSection").append(questionSelect);
          }
        });
    }
    // Getting jQuery references to the html input elements
    var nameInput = $("#name");
    var photoInput = $("#photo");
    var genderInput = $("#gender");
    var homeForm = $("#home");
    
    // Adding an event listener for when the form is submitted
    $(homeForm).on("submit", handleFormSubmit);
 

    function handleFormSubmit(event) {
        event.preventDefault();

        // Wont submit the post if we are missing user inputs
        if (!nameInput.val().trim() || !photoInput.val().trim() || !genderInput.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newUser = {
            name: nameInput.val().trim(),
            photo: photoInput.val().trim(),
            gender: genderInput.val().trim()
        };
    
        submitEntry(newEntry);
        
    }
    
        // Submits a new post and brings user to survey page upon completion
    function submitEntry(entry) {
        $.post("/api/user", entry, function() {
            window.location.href = "/SURVEY";
        });
    }
});