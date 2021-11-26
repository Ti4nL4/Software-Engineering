const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    forgotUser,
    resetToken,
    resetUpdatePassword
  } = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/forgot").post(forgotUser);
router.route("/reset/:token").get(resetToken);
router.route("/reset/password/:token").put(resetUpdatePassword);

module.exports = router;