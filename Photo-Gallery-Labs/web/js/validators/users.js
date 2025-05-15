"use strict";
const userValidator = {
    validateRegister: function (formData) {
        let errors = [];
        let firstName = formData.get("firstName");
        let lastName = formData.get("lastName");
        let password = formData.get("password");
        let password2 = formData.get("password2");
        if (firstName.length < 3 || lastName.length < 3) {
            errors.push("The first and last name should have more than 3 characters");
        }
        if (password !== password2) {
            errors.push("The passwords must match");
        }
        return errors;
    },
    validateLogin: function (formData) {
        let errors = [];
        let email = formData.get("email");
        let password = formData.get("password");
        if (email.length < 3) {
            errors.push("The email should have more than 3 characters");
        }
        if (password.length < 3) {
            errors.push("The password should have more than 3 characters");
        }
        return errors;
    },
};
export { userValidator };
