var express = require('express');
var userRouter = express.Router();
const userController = require("../controllers/userController");
const validateUser = require("../middlewares/user/userValidation");

/* GET users listing. */
userRouter.get('/', userController.index);

/* POST user */
userRouter.post("/add", validateUser , userController.store);

/* GET user By id. */
userRouter.get("/:id", userController.show);

/* UPDATE user */
userRouter.put("/edit/:id", userController.update);

/* DELETE user */
userRouter.delete("/delete/:id", userController.delete);

module.exports = userRouter;
