const Song = require("../models/song");
const User = require("../models/song");

exports.index = async (req, res, next) => {
    try {
        const song = await Song.find();
        res.json(song);
    } catch (error) {
        next(error);
    }
}

exports.store = async (req, res, next) => {
    try {
        let song = new Song(req.body);
        song = await song.save();
        res.status(200).json(song);
    } catch (error) {
        next(error);
    }
}

exports.show = async (req, res, next) => {
    try {
        const song = await Song.findById({ _id: req.params.id });
        if (!song) {
            return res.status(404).send("Song not found");
        }
        res.json(song);

    } catch (error) {
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try {
        let song = await Song.findById({ _id: req.params.id });

        if (!song) {
            return res.status(404).send("Song not found");
        }
        
        song = Object.assign(song, req.body).save((error, songUpdated) => {
            if (error) console.error(error);
            res.status(201).json(songUpdated);
        })

    } catch (error) {
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try {
        let song = await Song.findById({ _id: req.params.id });
        if (!song) {
            return res.status(404).send("Song not found");
        }

        let deletedUser = await Song.deleteOne({ _id: req.params.id });

        if (deletedUser.deletedCount == 1) {
            return res.status(201).json({ message: "Your song is deleted!" });
        }

    } catch (error) {
        next(error);
    }
}


