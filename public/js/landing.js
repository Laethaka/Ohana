$( document ).ready(function() {
    function populateCards() {
        $.get(`/api/landing/events`, function(data) {//GETTING ALL NON-PROPOSED EVENTS
            for (var idx=0; idx<data.length; idx++) {
                var eventCard = $(`
                    <div class="card card-event">
                        <div class="card-header">
                            <span class="float-left">
                                <small>Event Date: ${data[idx].date}</small>
                                <h5 class="card-title">${data[idx].title}</h5>
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
                $('#cardDeck').prepend(eventCard);
            };
        });
    }; //CARD POPULATION END   
    
    populateCards();
});