"use strict"

const formValidator = {
    validateForm: function (formData) {
        let errors = [];

        let artist = formData.get("artist");
        let title = formData.get("title");
        let numTracks = formData.get("numTracks")

        if (artist.length < 3) {
            errors.push("The artist name should have more than 3 characters");
        }

        if (artist.length == title.length) {
            errors.push("title length = artist length");
        }

        if (numTracks < 0 || numTracks > 20) {
            errors.push("numTracks mal");
        }
        return errors;
    }
}

export { formValidator };
