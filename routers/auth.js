const { Router } = require("express");

const { checkUser, checkUserLogin } = require("../middleware/authMiddleware");
const { signup, signin } = require("../controllers/authController");

const authRouter = Router();

authRouter.route("/signup").post(checkUser, signup);

authRouter.route("/signin").post(checkUserLogin, signin);

module.exports = authRouter;
