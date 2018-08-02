
//Toggle navbar
function showNavbar(value) {
    var navBtn = document.querySelector(value);
    /**
    * Create a toggle
    */
    if (navBtn.style.display === "inline") {
        navBtn.style.display = "none";
    } else {
        navBtn.style.display = "inline";
    }

}

//re-directs the user to the specified location
function showLocation(link) {
    return location.href = link;
}
// Scroll down
function scrollMe() {
    window.scrollTo({ 
        top: 600,
        behavior: "smooth"
    });
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


