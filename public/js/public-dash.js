$( document ).ready(function() {

    $("#logout").on("click", function(){
        console.log("in logout block after click")
        $.get("/logout", function(data){
            window.location.href = "/logout";
        })
    });

});