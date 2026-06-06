const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    //--> We are using cookie based authentication, so we will get the token from the cookie instead of the Authorization header

    // let token;

    // if (
    //   req.headers.authorization &&
    //   req.headers.authorization.startsWith("Bearer")
    // ) {
    //token = req.headers.authorization.split(" ")[1];
    const token = req.cookies.token;

    console.log("Token:", token);
    if (!token) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
    // } else {
    //   return res.status(401).json({
    //     message: "Not authorized",
    //   });
    // }
  } catch (error) {
    return res.status(401).json({
      message: "Token failed",
    });
  }
};

module.exports = protect;
