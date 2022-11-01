const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtToken({ id, name, email }) {
  const user = { id, name, email };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2m",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "20m",
  });
  return({accessToken,refreshToken})
}
module.exports ={jwtToken};
