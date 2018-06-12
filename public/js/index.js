$(document).ready(function() {
     
  // debugger;

  $("#loginForm").submit(function(event){
    event.preventDefault();

    var logins = {};
    logins.username = $("#username").val().trim();
    logins.password = $("#password").val().trim();
  
    $.post('/api/user', logins).then(function(results) {

    })
  })
})