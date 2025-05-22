"use strict";

import { parseHTML } from '../utils/parseHTML.js';

const departmentRenderer = {

    // Converts a department into a badge
    asBadge: function (department) {
        let html = `<span class="badge bg-secondary badge-dpmt">
                        ${department.name} (${department.city})
                    </span>`;
        let badge = parseHTML(html);
        return badge;
    },

    // Converts several departments into a group of badges
    asBadgeGroup: function (departments) {
        let html = `<div class="dept-group"></div>`;
        let group = parseHTML(html);

        // Load the departments
        for (let dpmt of departments) {
            let badge = this.asBadge(dpmt);
            group.appendChild(badge);
        }

        return group;
    }
};

export { departmentRenderer };