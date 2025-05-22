"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const albumRenderer = {
    asRow: function (albumwithuser) {
        let html = 
        `<div class="row align-items-center">
            <div class="col ">
                <img src="${albumwithuser.imageUrl}" class="img-fluid">
            </div>

            <div class="col">
                <p>${albumwithuser.username}</p>
            </div>

            <div class="col">
                <p>${albumwithuser.artist}</p>
            </div>

            <div class="col">
                <p>${albumwithuser.title}</p>
            </div><a href="edit_album.html?albumId=${albumwithuser.albumId}">
            <button class="btn btn-primary">Edit Album</button>
            </a>
        </div>
        `;
        let card = parseHTML(html);
        return card;
    },
}

export { albumRenderer };