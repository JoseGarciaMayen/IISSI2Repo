"use strict";
import { galleryRenderer } from '/js/renderers/gallery.js';
import { photosAPI_auto } from '/js/api/_photos.js';
import { messageRenderer } from '/js/renderers/messages.js';
import { photoswithusersAPI_auto } from '/js/api/_photoswithusers.js';

async function loadAllPhotos() {
    try{
        let container = document.getElementById("gallery");
        let galleryContainer = document.querySelector("div.container");
        let photos = await photoswithusersAPI_auto.getAll();
        let gallery = galleryRenderer.asCardGallery(photos);
        container.appendChild(gallery);
    }catch (err) {
        messageRenderer.showErrorMessage("Error loading photos", err);
}
}

async function main() {
    loadAllPhotos();
}


document.addEventListener("DOMContentLoaded", main);