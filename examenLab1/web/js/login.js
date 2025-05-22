"use strict";

import { authAPI_auto } from "/js/api/_auth.js";
import { sessionManager } from "/js/utils/session.js";
import { messageRenderer } from "/js/renderers/messages.js";

// DOM elements that we will use
const loginForm = document.getElementById("login-form");
const errorsDiv = document.getElementById("errors");

async function main() { // Main function that will run when the page is ready
    loginForm.onsubmit = handleSubmitLogin;    // Handle the form's submit event
}
///////////////////////////////////////////////////////////////////////////////

function handleSubmitLogin(event) {
    event.preventDefault();    // Prevent the browser from sending the form,
    errorsDiv.innerHTML = "";
    sendLogin(new FormData(loginForm));
}

async function sendLogin(formData) {
    try { // If the login is successful, store the session token and the logged user data
        let loginData = await authAPI_auto.login(formData);
        sessionManager.login(loginData.sessionToken, loginData.user);
        window.location.href = "index.html"; // Navigate to main page
    } catch (error) {
        messageRenderer.showErrorMessage(error.response.data.message); // If there is an error, access the mesage in the response and show it to the user
    }
}
////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", main);