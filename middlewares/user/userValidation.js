const User = require("../../models/user");


const validate = async function (req, res, next) {
    try {

        if (req.body.role === 1 || req.body.role === 2) {
            next();
        } else {
            throw new Error("Invalid role user!!!");
        }
    } catch (error) {
        next(error);
    }
}

module.exports = validate;
