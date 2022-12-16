const User = require("../models/user");

exports.index = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

exports.store = async (req, res, next) => {
    try {
        //TODO: validation
        let user = new User(req.body);
        user = await user.save();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

exports.show = async (req, res, next) => {
    try {
        //TODO: validation
        const user = await User.findById({ _id: req.params.id });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user);

    } catch (error) {
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try {
        let user = await User.findById({ _id: req.params.id });
        if (!user) {
            return res.status(404).send("User not found");
        }

        user = Object.assign(user, req.body).save((error, userUpdated) => {
            if (error) console.error(error);
            res.status(201).json(userUpdated);
        })
    } catch (error) {
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try {
        let user = await User.findById({ _id: req.params.id });
        if (!user) {
            return res.status(404).send("User not found");
        }

        let deletedUser = await User.deleteOne({ _id: req.params.id })

        console.log(deletedUser);

        if (deletedUser.deletedCount == 1) {
            return res.status(201).json({ message: "Votre profil is deleted!" });
        }

    } catch (error) {
        next(error);
    }
}


