"use strict";

import { sessionManager } from "/js/utils/session.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { parseHTML } from "/js/utils/parseHTML.js";

const galleryRenderer = {
    asCardGallery: function (photos, photosTags, tags) {
        let galleryContainer = parseHTML('<div class="photo-gallery"></div>');
        let row = parseHTML('<div class="row"></div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let photo of photos) {

            let userId = photo.userId;
            let usRegistrado = sessionManager.getLoggedId();
            let esPublica = photo.visibility;
            console.log(userId)
            console.log(usRegistrado)
            console.log(esPublica)
            if ((esPublica == "Public" && !sessionManager.isLogged()) || userId == usRegistrado || usRegistrado == 101) {

                let card = photoRenderer.asCard(photo, photosTags, tags);
                row.appendChild(card);
                counter += 1;
                if (counter % 3 === 0) {
                    row = parseHTML('<div class="row"></div>');
                    galleryContainer.appendChild(row);
                }
            }


        }
        return galleryContainer;
    }
};
export { galleryRenderer };