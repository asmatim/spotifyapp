const { mongoose, Schema } = require("mongoose");

const playlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    songs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Song"
        }]
})


const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;