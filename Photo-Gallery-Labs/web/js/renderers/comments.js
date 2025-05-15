"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";

const commentsRenderer = {
    asComment: function (comment) {
        let html = `<div class="col-md-8">
        <div class="card">
        <div class="card-body">
        <p class="card-title">${comment.text}</p>
        <p class="card-text">${comment.date}</p>
        </div>
        </div>
        </div>`;
        let card = parseHTML(html);
        return card;
    },
    asCard: function (comments) {
        let commentContainer = parseHTML('<div class="comments"></div>');
        let row = parseHTML('<div class="row mt-4"></div>');
        commentContainer.appendChild(row);
        for(let comment of comments){
            let text = commentsRenderer.asComment(comment);
            row.appendChild(text);
            row = parseHTML('<div class="row mt-4"></div>');
            commentContainer.appendChild(row);
        }
        return commentContainer;
    }
};

export { commentsRenderer };