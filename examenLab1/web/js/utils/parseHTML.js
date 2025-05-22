"use strict";

function parseHTML(str) {
    const template = document.createElement('template');
    template.innerHTML = str.trim();
    return template.content.firstChild;
}

export { parseHTML };
