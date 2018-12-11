const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    bio: {
        type: String,
        default:"No bio provided"
    },
    gender: {
        type: String,
        enum: ["male","female","non binary"],
        default: "non binary"
    }

});

export-modules = AuthorSchema;