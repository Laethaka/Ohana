$(document).ready(function() {

    $('#primUser-input').click(function() {
        $("#primUser-input").toggleClass('checked');
    });

    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var nameInput = $("input#name-input");
    var ageInput = $("input#age-input");
    var zipcodeInput = $("input#zipcode-input");
    var primUserInput = $("input#primUser-input");
    var familyInput = 0;
    var nick_name = "";
    if ($("input#familyid-input")){
        familyInput = $("input#familyid-input");
    }
    else{
        nick_name = $("input#nickName-input");
    }


    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            name: nameInput.val().trim(),
            age: ageInput.val().trim(),
            zipcode: zipcodeInput.val().trim(),
            FamilyId: familyInput.val().trim()
        };
        if ($('#primUser-input').hasClass('checked')) {
            userData.primary_user = true;
        } else {
            userData.primary_user = false;
        }

        if (!userData.email || !userData.password) {
            return; //NEED TO ADD NOTICE TO USER
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData);

        emailInput.val("");
        passwordInput.val("");
        ageInput.val("");
        zipcodeInput.val("");
        nameInput.val("");
    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(input) {
        $.post("/api/signup", {
            email: input.email,
            password: input.password,
            age: input.age,
            zipcode: input.zipcode,
            name: input.name,
            primary_user: input.primary_user,
            familyId: input.FamilyId
        }).then(function(data) {
            console.log(data);
            window.location.href = `/`;
        // If there's an error, handle it by throwing up a boostrap alert
        // }).catch(handleLoginErr);
    })

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
};
function newFamily(nickName){
$.post("api/newFamily", {
    nick_name: nick_name
}).then(function(data){
    console.log(data);
})
};

});