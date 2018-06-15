$( document ).ready(function() {

    $("#logout").on("click", function(){
        console.log("in logout block after click")
        $.get("/logout", function(data){
            window.location.href = "/logout";
        })
    });

    function populateCards() {
        $.get(`/api/publicDash/events`, function(data) {//GETTING ALL NON-PROPOSED EVENTS
            var rowIdx = 0;
            for (var idx=0; idx<data.length; idx++) {
                if (idx%4===0) {//STARTING NEW ROW
                    rowIdx++;
                    $('.card-deck').append($(`<div id='row-${rowIdx}' class='row'>`));
                }

                var eventCard = $(`
                    <div class="card card-event event-card-public">
                        <div class="card-header">
                            <span class="float-left">
                                <small>${data[idx].date}</small>
                                <h5 class="card-title">${data[idx].title}</h5>
                            </span>
                            <span class="float-right">
                                <h5 class="text-center"><i class="far fa-bookmark"></i></h5>
                            </span>
                        </div>
                        <div class="card-body">
                            <span>
                                <small><i class="fas fa-map-marker"></i> ${data[idx].location}</small>
                                <small><i class="fas fa-clock"></i> ${data[idx].start_time} - ${data[idx].end_time}</small>
                            </span>
                            <div class="img-placeholder"><img src="${data[idx].photo}" height="100%" width="100%"/></div>
                            <p class="card-text">${data[idx].description}</p>
                        </div>
                        <div class="card-footer">
                            <span class="float-left text-muted">
                                <small>Families attending · </small>
                                <small>${data[idx].num_families}</small>
                            </span>
                            <span class="float-right text-muted">
                                <small>Category · </small>
                                <small>${data[idx].category}</small>
                            </span>
                        </div>
                    </div>
                `);
                $(`#row-${rowIdx}`).append(eventCard);

            };
        });
    }; //CARD POPULATION END   
    
    populateCards();

});