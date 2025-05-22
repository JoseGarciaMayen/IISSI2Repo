"use strict";

import { messageRenderer } from '/js/renderers/messages.js';
import { albumsAPI_auto } from "/js/api/_albums.js";
import { formValidator } from '/js/validators/form.js';


let urlParams = new URLSearchParams(window.location.search);
let albumId = urlParams.get("albumId");
let currentAlbum = null;

async function main() {

    if (albumId !== null) {
        loadCurrentAlbum();
    }

    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;
}

async function loadCurrentAlbum() {

    let pageTitle = document.getElementById("page-title");
    let urlInput = document.getElementById("input-url");
    let titleInput = document.getElementById("input-title");
    let artistInput = document.getElementById("input-artist");
    let dateInput = document.getElementById("input-date");
    let tracksInput = document.getElementById("input-tracks");

    pageTitle.textContent = "Editing an album";

    try {
        currentAlbum = await albumsAPI_auto.getById(albumId);
        urlInput.value = currentAlbum.imageUrl;
        titleInput.value = currentAlbum.title;
        artistInput.value = currentAlbum.artist;
        dateInput.value = currentAlbum.releaseDate;
        tracksInput.value = currentAlbum.numTracks;
    } catch (err) {
        messageRenderer.showErrorMessage(err.response.data.message);
    }
}




async function handleSubmitPhoto(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    
    formData.append("userId", 1);
    let errors = formValidator.validateForm(formData);
    
    if (errors.length > 0) {
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";

        for (let error of errors) {
            messageRenderer.showErrorMessage(error);
        }

    } 
    
    else if (albumId===null) {
        
        try {

            await albumsAPI_auto.create(formData);
            window.location.href = `index.html`;

        } catch (err) {
            messageRenderer.showErrorMessage(err.response.data.message);
        }
    }

    else {

        try {

            await albumsAPI_auto.update(formData, albumId);
            window.location.href = `index.html`;

        } catch (err) {
            messageRenderer.showErrorMessage(err.response.data.message);
        }
    }
}


document.addEventListener("DOMContentLoaded", main);