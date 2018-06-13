// On page load
$( document ).ready(function() {
    console.log('hithere')
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


  // heart click
    $("#heart-vote").on("click", function() {
        var state = $(this).attr("data-vote");

    if (state === "false") {
        $(this).html("<h5 class='text-center'><i class='fas fa-heart'></i></h5>");
        $(this).attr("data-vote", "true");
    } else {
        $(this).html("<h5 class='text-center'><i class='far fa-heart'></i></h5>");
        $(this).attr("data-vote", "false");
    }
    });

    // add new card
    $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
    });


    // Google Places API Address Autocomplete
    var placeSearch, autocomplete;
    var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    };

    function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
    }

    function geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                    var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }
 
});

