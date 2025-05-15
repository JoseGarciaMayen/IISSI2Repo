"use strict";
import { photoRenderer } from "/js/renderers/photos.js";
import { photosAPI_auto } from "/js/api/_photos.js";
import { commentsAPI_auto } from "/js/api/_comments.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { commentsRenderer } from "/js/renderers/comments.js";


let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
console.log(`El id es ${photoId}$`);

async function main() {
    // Check that we have an ID before doing anything else
    if (photoId === null) {
        messageRenderer.showErrorMessage("Please, provide a photoId");
        return;
    }
    loadPhotoDetails();
    loadComments();
    

    let deleteBtn = document.querySelector("#button-delete");
    deleteBtn.onclick = handleDelete;

    let editBtn = document.querySelector("#button-edit");
    editBtn.onclick = handleEdit;

    let commentBtn = document.querySelector("#button-comment");
    commentBtn.onclick = handleComment;
}
async function handleComment(event){
    event.preventDefault();
    let form = event.target;
    console.log(form);
    let formData = new FormData(form);
    let currentPhoto = await photosAPI_auto.getById(photoId);
    formData.append("userId", 1);
    formData.append("date", currentPhoto.date);
    formData.append("photoId", photoId);
    try{
        let resp = await commentsAPI_auto.create(formData);
    }catch (err) {
        messageRenderer.showErrorAsAlert(err.response.data.message);
    }
}
function handleEdit(event) {
    window.location.href = "edit_photo.html?photoId=" + photoId;
}

async function handleDelete(event) {
    let answer = confirm("Do you really want to delete this photo?");
    if (answer) {
        try {
            await photosAPI_auto.delete(photoId);
            window.location.href = "/index.html";
        } catch (err) {
            messageRenderer.showErrorMessage(err.response.data.message);
        }
    }
}

async function loadPhotoDetails() {
    let photoContainer = document.querySelector("#photo-details-column");
    try {
        let photo = await photosAPI_auto.getById(photoId);
        let photoDetails = photoRenderer.asDetails(photo);
        photoContainer.appendChild(photoDetails);
    } catch (err) {
        messageRenderer.showErrorMessage("Error loading photo", err);
    }
}

async function loadComments() {
    let commentsContainer = document.querySelector("#comments-column")
    try {
        let comments = await commentsAPI_auto.getById(photoId);
        let commentsRendered = commentsRenderer.asCard(comments);
        commentsContainer.appendChild(commentsRendered);
    }catch (err) {
        messageRenderer.showErrorMessage("Error loading comments", err);
    }
}
document.addEventListener("DOMContentLoaded", main);
