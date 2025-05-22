/*
	IISSI2
	index.js.  Controlador de index.html
	Mayo/2025
*/
"use strict";	

// Nivel elevado de control de errores
// Renderizadores necesarios 
// Controladores de API necesarios para accesos Ajax a la BD
// Gestión del Login/Logout y de la Sesión y Local Storage en Cliente

// Manejadores de eventos y/o listeners para satisfacer requisitos
// Accesos a la BD mediante controladores API Rest
// Presentación mediante módulos de renderización
// Captura de errores y renderización en contenedor de errores

import { photostagsAPI_auto } from "/js/api/_photostags.js";
import { photosAPI_auto } from "/js/api/_photos.js";
import { tagsAPI_auto } from "/js/api/_tags.js";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";
let urlParams = new URLSearchParams(window.location.search);
let photoTagId = urlParams.get("photoTagId");
console.log(photoTagId);
async function main() {
loadAllPhotos();
if(photoTagId !== null){
	handleDelete();
}
	
}
async function handleDelete(event) {
let answer = confirm("Do you really want to delete this tag?");
if (answer) {
try {
await photostagsAPI_auto.delete(photoTagId);
window.location = "/index.html";
} catch (err) {
messageRenderer.showErrorMessage(err.response.data.message);
}
}
}

async function loadAllPhotos() {
let galleryContainer = document.querySelector("#divGallery");
// try{
let photosTags = await photostagsAPI_auto.getAll();
let tags = await tagsAPI_auto.getAll();
let galleryPhotos = await photosAPI_auto.getAll();
let cardGallery = galleryRenderer.asCardGallery(galleryPhotos, photosTags, tags);
galleryContainer.appendChild(cardGallery);
// } catch (err) {
// messageRenderer.showErrorMessage("Error while loading photos", err);
// }
}
document.addEventListener("DOMContentLoaded", main);