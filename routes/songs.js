var express = require('express');
var songRouter = express.Router();
const songController = require("../controllers/songController");
const validateSong = require("../middlewares/song/songValidation");

/* GET users listing. */
songRouter.get('/', songController.index);

/* POST user */
songRouter.post("/add", validateSong, songController.store);

/* GET user By id. */
songRouter.get("/:id", songController.show);

/* UPDATE user */
songRouter.put("/edit/:id", songController.update);

/* DELETE user */
songRouter.delete("/delete/:id", songController.delete);

module.exports = songRouter;