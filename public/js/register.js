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

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        console.log(($("input#familyid-input").val()));
        if ($("input#familyid-input").val()){
            console.log("checking for family id input");
            familyInput = $("input#familyid-input").val();
        }

        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            name: nameInput.val().trim(),
            age: ageInput.val().trim(),
            zipcode: zipcodeInput.val().trim(),
            FamilyId: familyInput
        };
        if ($('#primUser-input').hasClass('checked')) {
            userData.primary_user = true;
        } else {
            userData.primary_user = false;
        }

        if(inputVal(userData) === true){
            console.log("in create block");
            debugger;
            if (userData.FamilyId === 0){
                nick_name = $("input#nickName-input").val().trim();
                // console.log(nick_name);
                newFamily(nick_name, userData);
            }
            else{
                signUpUser(userData);
            }
        };
        
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
        window.location.href = `/login`;
    })
};
function newFamily(nick_name, userData){
    console.log("User Data in newFamily function", userData);
    $.post("api/newFamily", {
        nick_name: nick_name
    }).then(function(data){
        console.log("At api call return js, trying to call create user function", data.id);
        userData.FamilyId = parseInt(data.id);
        console.log(userData);
        signUpUser(userData);
    })
};

function inputVal(userData){
    $("#passwordErr").empty();
    $("#nameErr").empty();
    $("#zipcodeErr").empty();
    $("#ageErr").empty();
    var isValid = true;

    if(userData.password.length < 5 || userData.password.length > 15){
        isValid = false;
        $("#passwordErr").text("Error: Password must be between 5 and 15 characters");
    }
    if(userData.name.length < 3 || userData.name.length > 30){
        isValid = false;
        $("#nameErr").text("Error: Name must be between 5 and 30 characters");
    }
    if(!Number.isInteger(parseInt(userData.zipcode))){
        isValid = false;
        $("#zipcodeErr").text("Error: Zipcode is not in a valid format(only numbers)");
    }
    if(!Number.isInteger(parseInt(userData.age))){
        isValid = false;
       $("#ageErr").text("Error: Age is not in a valid format(only numbers)");
    }
    
    emailInput.val("");
    passwordInput.val("");
    ageInput.val("");
    zipcodeInput.val("");
    nameInput.val("");
    return isValid;
};


});