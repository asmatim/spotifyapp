const Song = require("../../models/song");
const User = require("../../models/user");


const validate = async function (req, res, next) {
    try {

        // validate user
        const user = await User.findById({ _id: req.body.user });
        if(!user) {
            throw new Error("User is not valid.");
        }


        // validate songs list
        const songIds = req.body.songs;
        const songs = await Song.find().where('_id').in(songIds);
        
        if(!songs || songs.length != songIds.length) {
            // not all songs found
            throw new Error("Songs list is not valid.");
        }

        // all good
        next();
        
    } catch (error) {
        next(error);
    }

}

module.exports = validate;
