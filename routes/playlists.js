var express = require('express');
var playlistRouter = express.Router();
const playlistController = require("../controllers/playlistController");
const validatePlaylist = require("../middlewares/playlist/playlistValidation");

/* GET playlists listing. */
playlistRouter.get('/', playlistController.index);

/* POST playlist */
playlistRouter.post("/add", validatePlaylist, playlistController.store);

/* GET playlist By id. */
playlistRouter.get("/:id", playlistController.show);

/* UPDATE playlist */
playlistRouter.put("/edit/:id", playlistController.update);

/* DELETE playlist */
playlistRouter.delete("/delete/:id", playlistController.delete);

module.exports = playlistRouter;