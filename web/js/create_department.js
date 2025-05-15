"use strict";

import { departmentsAPI_auto } from '/js/api/_departments.js';
import { departmentsValidator } from '/js/validators/departments.js';
import { messageRenderer } from '/js/renderers/messages.js';

// DOM elements that we will use
const errorsDiv = document.getElementById("errors");
const departmentForm = document.getElementById("department-form");

// Main function that will run when the page is ready
function main() {
    // Handle the form's submit event
    departmentForm.addEventListener("submit", function (event) {
        handleSendDepartment(event);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    main();
});

///////////////////////////////////////////////////////////////////////////////

async function handleSendDepartment(event) {
    // Prevent the browser from sending the form on its own,
    // because we'll do it using AJAX
    event.preventDefault();
    errorsDiv.innerHTML = "";

    let formData = new FormData(departmentForm);
    let errors = departmentsValidator.validateDepartment(formData);

    if (errors.length === 0) {
        // No errors, create the department
        try{
            await departmentsAPI_auto.create(formData)
        }catch (e){
            messageRenderer.showErrorMessage("Error al crear el departamento.\n" + e)
        }

        window.location.href = "index.html";
            
    } else {
        // Errors, display them
        for (let err of errors) {
            messageRenderer.showErrorMessage(err);
        }
    }
}
