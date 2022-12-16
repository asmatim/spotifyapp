const Playlist = require("../models/playlist");

exports.index = async (req, res, next) => {
    try {
        const playlists = await Playlist.find();
        res.json(playlists);
    } catch (error) {
        next(error);
    }
}

exports.store = async (req, res, next) => {
    try {
        let playlist = new Playlist(req.body);
        playlist = await playlist.save();
        res.status(200).json(playlist);
    } catch (error) {
        next(error);
    }
}

exports.show = async (req, res, next) => {
    try {
        const playlist = await Playlist.findById({ _id: req.params.id });
        if (!playlist) {
            return res.status(404).send("Playlist not found");
        }
        res.json(playlist);

    } catch (error) {
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try {
        let playlist = await Playlist.findById({ _id: req.params.id });

        if (!playlist) {
            return res.status(404).send("Playlist not found");
        }
        
        playlist = Object.assign(playlist, req.body).save((error, playlistUpdated) => {
            if (error) console.error(error);
            res.status(201).json(playlistUpdated);
        })

    } catch (error) {
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try {
        let playlist = await Song.findById({ _id: req.params.id });
        if (!playlist) {
            return res.status(404).send("Song not found");
        }

        let deletedUser = await Song.deleteOne({ _id: req.params.id });

        if (deletedUser.deletedCount == 1) {
            return res.status(201).json({ message: "Your playlist is deleted!" });
        }

    } catch (error) {
        next(error);
    }
}


