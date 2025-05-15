"use strict";

import { sessionManager } from './utils/session.js';
import { messageRenderer } from './renderers/messages.js';

import { employeesAPI } from '/js/api/employees.js';
import { employeeRenderer } from '/js/renderers/employees.js';

import { departmentsAPI_auto } from '/js/api/_departments.js';
import { employeesAPI_auto } from '/js/api/_employees.js';



// DOM elements that we will use
const employeeCont = document.getElementById("employee");


// Main function that will run when the page is ready
async function main() {
    // Hide the options that shouldnt be available for not logged users
    setLoggedOptions();

    // Load the logged employee
    let employee;
    try{
        employee = await employeesAPI.getLogged();
    }catch (e){
        messageRenderer.showErrorAsAlert("Error retrieving logged employee", e)
    }

    let boss = null;
    let dept = null;

    // If the employee has a boss we retrieve it.
    if (employee.bossId != null){
        try{
            boss = employeesAPI_auto.getById(employee.bossId);
        }catch(e){
            messageRenderer.showErrorAsAlert("Error retrieving employee's boss", e)
        }
    }

    // If the employee has a department we retrieve it.
    if (employee.departmentId != null){
        try{
            dept = departmentsAPI_auto.getById(employee.departmentId);
        }catch(e){
            messageRenderer.showErrorAsAlert("Error retrieving employee's department", e)
        }
    }
    
    // We wait for both the boss and the department to be retrieved, then render them as a profile.
    let both_resolved = [await boss, await dept];
    let logged = employeeRenderer.asProfile(employee, both_resolved[0], both_resolved[1]);
    employeeCont.innerHTML = logged;
}

document.addEventListener("DOMContentLoaded", function () {
    main();
});

///////////

function setLoggedOptions() {
    // Hide the things that shouldnt be available for non authenticated users
    if (!sessionManager.isLogged()) {
        newDpmtButton.style.display = "none";
    }
}