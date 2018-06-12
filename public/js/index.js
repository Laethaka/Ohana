$(document).ready(function() {

  console.log('ready!')


  $('#loginBtn').on("click", function(event){
    event.preventDefault();
    var login = $("#username").val().trim();
    console.log(login)
    $.post('/api/user' + login).then(function(results) {
    })
  });

  // function processLogin() {
  //   console.log('processing login')
  //   event.preventDefault();
  //   var login = $("#username").val().trim();
  //   console.log(login)
  //   $.post('/api/user' + login).then(function(results) {
  //   })
  // }

})