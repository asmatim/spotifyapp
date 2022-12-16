const { mongoose, Schema } = require('mongoose');

const NORMAL = "normal";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        default: NORMAL,
        required: true,
        type: String,
    },
})


const User = mongoose.model("User", userSchema);
module.exports = User;