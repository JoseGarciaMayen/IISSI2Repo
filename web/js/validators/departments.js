"use strict";

const departmentsValidator = {
    validateDepartment: function (form) {
        let deptName = form.get("name");
        let depCity = form.get("city");

        let errors = [];

        if (deptName.length < 3) {
            errors.push("The department's name must be at least 3 characters long.");
        }

        if (depCity.length < 2) {
            errors.push("The department's city must be at least 2 characters long.");
        }

        return errors;
    },
};

export { departmentsValidator };