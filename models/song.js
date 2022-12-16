const { mongoose, Schema } = require("mongoose");

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})


const Song = mongoose.model("Song", songSchema);
module.exports = Song;