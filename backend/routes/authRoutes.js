const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser); // in case of cookie based authentication , we need to have a logout route , we just can not remove the token from the client side , we need to clear the cookie from the server side as well
router.get("/me", protect, getMe);
module.exports = router;
