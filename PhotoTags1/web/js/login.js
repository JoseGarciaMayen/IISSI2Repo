'use strict';

import { authAPI_auto } from './api/_auth.js';
import { sessionManager } from './utils/session.js';
import { messageRenderer } from './renderers/messages.js';

// DOM elements that we will use
const loginForm = document.getElementById("login-form");

document.addEventListener("DOMContentLoaded", async function () { // Control del documento
    loginForm.addEventListener("submit", async function (event) { // Controlador del Submit
        event.preventDefault();  // Inhibir el envío del formulario
		// document.getElementById("errors").innerHTML = ""; // Limpiar errores
		sendLogin(new FormData(loginForm)); // Envío del formulario para Login como formData
    });
});

async function sendLogin(formData) {
	console.log(formData);
    try {   let loginData = await authAPI_auto.login(formData);
            let sessionToken = loginData.sessionToken;
            let loggedUser = loginData.user;
            sessionManager.login(sessionToken, loggedUser);
            window.location.href = "index.html"; // Al inicio para mostrar usuario conectado
    } catch (err) {
            messageRenderer.showErrorMessage ("Error while loging: "+ err.response.data.message );
    }
}
