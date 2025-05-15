"use strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI_auto } from "/js/api/_auth.js";

function main() {
    let loginForm = document.getElementById("login-form");
    loginForm.onsubmit = handleSubmitLogin;
}

function handleSubmitLogin(event) {

    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    let errors = userValidator.validateLogin(formData);

    if (errors.length > 0) {
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";
z
        for (let error of errors) {
            messageRenderer.showErrorMessage(error);
        }
    }else{
        sendLogin(formData);
    }
}

async function sendLogin(formData) {
    try {
    let loginData = await authAPI_auto.login(formData);
    let sessionToken = loginData.sessionToken;
    let loggedUser = loginData.user;
    sessionManager.login(sessionToken, loggedUser);
    window.location.href = "index.html";
    } catch (err) {
    messageRenderer.showErrorMessage("Error login with user", err);
    }
    }

document.addEventListener("DOMContentLoaded", main);