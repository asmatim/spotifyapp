const Song = require("../../models/song");
const User = require("../../models/user");


const validate = async function (req, res, next) {
    try {
        const user = await User.findById({ _id: req.body.artist });
        if(user && user.role === 1) {
            next();
        } else {
            throw new Error("User in not an artist");
        }
    } catch (error) {
        next(error);
    }

}

module.exports = validate;
