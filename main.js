console.log("StudySync loaded successfully.");


// Check login status

const isLoggedIn = localStorage.getItem("isLoggedIn");


// Logout function

function logout() {

    localStorage.removeItem("isLoggedIn");

    alert("You have been logged out.");

    window.location.href = "login.html";
}


// Get saved user

function getUser() {

    const user =
        JSON.parse(localStorage.getItem("studySyncUser"));

    return user;
}