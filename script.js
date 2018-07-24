
//shows users profile
function showProfile() {
    var profileBtn = document.querySelector('.view-profile');
    /**
    * Create a toggle
    */
    if (profileBtn.style.display === "block") {
        profileBtn.style.display = "none";
    } else {
        profileBtn.style.display = "block";
    }

}

//view request a user created
function showRequests() {
    var requestBtn = document.querySelector('.view-requests');
    /**
     * Create a toggle
     */
    if (requestBtn.style.display === "block") {
        requestBtn.style.display = "none";
    } else {
        requestBtn.style.display = "block";
    }
}

//re-directs the user to the specified location
function showLocation(link) {
    return location.href = link;
}

//sends user back to his/her profile page
function backToProfile() {
    var backToProfile = setTimeout(function () {
        return location.href = 'profile.html';
    }, 13000);
}

// Empty Email
function validateEmailInput() {
    var signinEmail = document.querySelector('.signinEmail').value;
    var errorMessage = document.querySelector('.errorMessage');
    if (signinEmail.length == 0) {
        errorMessage.innerHTML = 'Input cannot be empty';
    } else {
        errorMessage.innerHTML = "";
    }
};

// Empty Password
function validatePasswordInput() {
    var signinPassword = document.querySelector('.signinPassword').value;
    var errorMessage2 = document.querySelector('.errorMessage2');
    if (signinPassword.length == 0) {
        errorMessage2.innerHTML = 'Input cannot be empty';
    } else {
        errorMessage2.innerHTML = "";
    }
};


// Validates User Input
function validateInput() {
    var signinEmail = document.querySelector('.signinEmail').value;
    var signinPassword = document.querySelector('.signinPassword').value;
    if (signinEmail === "") {
        var errorMessage = document.querySelector('.errorMessage');
        errorMessage.innerHTML = 'Input cannot be empty';
    } else if (signinPassword === "") {

        var errorMessage2 = document.querySelector('.errorMessage2');
        errorMessage2.innerHTML = 'Input cannot be empty';
    } else {

        location.href = "profile.html";
    }
};


