// On page load
$( document ).ready(function() {
    function populateCards() {
        // $('.card-deck').empty();
        $.get('/api/user_data',function(data) {//GETTING USER'S FAMILY ID
            var userFamId = data.FamilyId;

            $.get(`/api/events/proposed/${userFamId}`, function(data) {//GETTING ALL EVENTS FOR THIS USER'S FAM
                var rowIdx = -1;    
                for (var idx=0; idx<data.length; idx++) {
                    if (idx%4===0) {//STARTING NEW ROW
                        rowIdx++;
                        $('.card-deck').prepend($(`<div id='row-${rowIdx}' class='row'>`));
                    }

                    var eventCard = $(`
                        <div class="card card-event">
                            <div class="card-header">
                                <span class="float-left">
                                    <small>Event Date: ${data[idx].date}</small>
                                    <h5 class="card-title">${data[idx].title}</h5>
                                </span>
                                <span class="float-right">
                                    <small class="text-center">Current Vote Balance: <span id='voteSpan-${data[idx].id}'>${data[idx].vote}</span></small>
                                    <h5 id="heart-vote" data-vote="false" data-id=${data[idx].id} class="text-center heart-icon"><i class="far fa-heart"></i></h5>
                                </span>
                            </div>
                            <div class="card-body">
                                <span>
                                    <small><i class="fas fa-map-marker"></i>${data[idx].location}</small>
                                    <small><i class="far fa-clock"></i>${data[idx].start_time} - ${data[idx].end_time}</small>
                                </span>
                                <div class="img-placeholder">${data[idx].photo}</div>
                                <p class="card-text text-justify">${data[idx].description}</p>
                            </div>
                            <div class="card-footer">
                                <span class="float-left text-muted">
                                    <small>Families attending:</small>
                                    <small>${data[idx].num_families}</small>
                                </span>
                                <span class="float-right text-muted">
                                    <small>Event Category:</small>
                                    <small>${data[idx].category}</small>
                                </span>
                            </div>
                        </div>
                    `);
                    $(`#row-${rowIdx}`).append(eventCard);
                    
                }//END OF FOR LOOP 
                $(".heart-icon").on("click", function() {//CHANGING HEART COLOR
                    var eventId = $(this).attr('data-id');
                    var state = $(this).attr("data-vote");
            
                    if (state === "false") {
                        $(this).html("<h5 class='text-center'><i class='fas fa-heart'></i></h5>");
                        $(this).attr("data-vote", "true");
                        $.post('/api/events/voteup', {id: eventId}).then(function(data) {//INCREMENTING VOTE AND CHANGING SPAN
                            $(`#voteSpan-${data.id}`).text(data.vote)
                        })
                    } else {
                        $(this).html("<h5 class='text-center'><i class='far fa-heart'></i></h5>");
                        $(this).attr("data-vote", "false");
                        $.post('/api/events/votedown', {id: eventId}).then(function(data) {//DECREMENTING VOTE AND CHANGING SPAN
                            $(`#voteSpan-${data.id}`).text(data.vote)
                        })
                    }
                });
            })
        });
    }; //CARD POPULATION END   
    
    populateCards();

    //APPENDING CARD CREATION MODAL LINK
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
      })

    $("#logout").on("click", function(){
        console.log("in logout block after click")
        $.get("/logout", function(data){
            window.location.href = "/logout";
        })
    });




});
