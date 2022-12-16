var express = require('express');
var songRouter = express.Router();
const songController = require("../controllers/songController");
const validateSong = require("../middlewares/song/songValidation");

/* GET songs listing. */
songRouter.get('/', songController.index);

/* POST song */
songRouter.post("/add", validateSong, songController.store);

/* GET song By id. */
songRouter.get("/:id", songController.show);

/* UPDATE song */
songRouter.put("/edit/:id", songController.update);

/* DELETE song */
songRouter.delete("/delete/:id", songController.delete);

module.exports = songRouter;