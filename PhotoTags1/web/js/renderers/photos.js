"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
const photoRenderer = {
asCard: function (photo, photosTags, tags) {

let htmlTags = ``;
for (let phototag of photosTags){
    if(phototag.photoId === photo.photoId){
        for(let tag of tags){
            if(tag.tagId === phototag.tagId){
                htmlTags += `<a class="tag"
                href="index.html?photoTagId=${phototag.photoTagId}">
                ${tag.name}</a>`;
            }
        }
    }
}
    let html = `<div class="col-md-4">
<div class="card bg-dark text-light">
<img src="${photo.url}" class="card-img-top">
<div class="card-body">
<h5 class="card-title text-center">${photo.title}</h5>
<p class="card-text">${htmlTags}</p>
<p class="text-end">
@${photo.photoId}
</p>
</div>
</div>
</div>`;
let card = parseHTML(html);
return card;
},
};
export { photoRenderer };