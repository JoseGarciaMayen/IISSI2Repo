"use strict";

import { sessionManager } from "/js/utils/session.js";

// DOM elements that we will use
const userLink = document.getElementById("showUsername");
const logoutButton = document.getElementById("logout-button");
const headerLogin = document.getElementById("header-login");
const headerLogout = document.getElementById("header-logout");

function main() {
    showUser();
    addLogoutHandler();
    hideHeaderOptions();
}

///////////////////////////////////////////////////////////////////////////////

function showUser() {
    // Greet the user in the navbar
    let displayText = "Guest";

    if (sessionManager.isLogged()) {
        let loggedUser = sessionManager.getLoggedUser();
        displayText = "Hi, @" + loggedUser.username;
    }

    userLink.textContent = displayText;
}

function addLogoutHandler() {
    // Assign the "Logout" link to the session logout() function
    logoutButton.onclick = function () {
        sessionManager.logout();
        window.location.href = "index.html";
    };
}

function hideHeaderOptions() {
    // Hide the appropriate options
    if (sessionManager.isLogged()) {
        headerLogin.style.display = "none";
    } else {
        headerLogout.style.display = "none";
    }
}

////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", main);