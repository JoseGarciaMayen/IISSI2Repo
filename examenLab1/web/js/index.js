"use strict";

import { messageRenderer } from '/js/renderers/messages.js';
import { albumswithusersAPI_auto } from "/js/api/_albumswithusers.js";
import { galleryRenderer } from "/js/renderers/gallery.js"

async function main() {
    loadAllAlbums(); 
}

async function loadAllAlbums() {
    let galleryContainer = document.getElementById("content");
    
    try{
        let albums = await albumswithusersAPI_auto.getAll();
        let gallery = galleryRenderer.asGallery(albums);
        galleryContainer.appendChild(gallery);
    } catch(err) {
        messageRenderer.showErrorMessage("Error while loading photos", err);
    }
}

document.addEventListener("DOMContentLoaded", main);