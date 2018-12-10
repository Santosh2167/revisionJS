const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: "bio not entered"
    },
    gender: {
        type: String,
        enum: ["male","female","non binary"],
        default: "non binary"
    }
});

module.export = AuthorSchema;