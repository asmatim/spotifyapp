const { mongoose, Schema } = require('mongoose');

const USER_TYPE = 2;
const ARTIST_TYPE = 1;

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
        default: USER_TYPE,
        required: true,
        type: Number,
    },
})


const User = mongoose.model("User", userSchema);
module.exports = User;