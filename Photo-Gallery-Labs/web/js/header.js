import { sessionManager } from "/js/utils/session.js";
function main() {
    showUser();
    addLogoutHandler();
}
function showUser() {
    let title = document.getElementById("navbar-title");
    let text;
    if (sessionManager.isLogged()) {
        let username = sessionManager.getLoggedUser().username;
        text = "Hi, @" + username;
    } else {
        text = "Guest";
    }
    title.textContent = text;
}
function addLogoutHandler() {
    let logoutButton = document.getElementById("navbar-logout");
    logoutButton.onclick = function () {
    sessionManager.logout();
    window.location.href = "index.html";
    };
}
document.addEventListener("DOMContentLoaded", main);