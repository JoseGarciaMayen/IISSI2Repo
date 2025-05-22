"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import { albumRenderer } from "/js/renderers/albums.js";

const galleryRenderer = {
    asGallery: function (albumwithuser) {
        let galleryContainer = parseHTML('<div class="album-gallery"></div>');

        for (let album of albumwithuser) {

            let albumS = albumRenderer.asRow(album);

            galleryContainer.appendChild(albumS);

        }
        return galleryContainer;
    }
};

export { galleryRenderer };