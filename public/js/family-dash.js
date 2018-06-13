// On page load
$( document ).ready(function() {
    
// Make a get request to our api route that will return every book
$.get("/api/myevents", function(data) {
    // For each event that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold event data
      var eventCard = $("<div>");
      // Add a class to this div: 'card'
      eventCard.addClass("card");
      // Add an id to the card
      eventCard.attr("id", "myevents-card-" + i);
      // Append the card to the event section of family dashboard
      $("#myevent-well").append(eventCard);
  
      // Now  we add our event data to the well we just placed on the page
      $("#myevents-card-" + i).append("<h4>" + data[i].date + "</h4>"); // Date
      $("#myevents-card-" + i).append("<h2>" + data[i].title + "</h2>"); // Title
      $("#myevents-card-" + i).append("<h4>" + data[i].location + "</h4>"); // Location
      $("#myevents-card-" + i).append("<h4>" + data[i].time + "</h4>"); // Time
      $("#myevents-card-" + i).append("<img>" + data[i].image + "</img>"); // Image
      $("#myevents-card-" + i).append("<p>" + data[i].description + "</p>");
      $("#myevents-card-" + i).append("<h5> Votes: " + data[i].votes + "</h5>");
      $("#myevents-card-" + i).append("<h5> Created by: " + data[i].username + "</h5>");
    }
  });
});

