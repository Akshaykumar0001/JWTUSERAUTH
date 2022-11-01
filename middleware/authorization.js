const jwt = require("jsonwebtoken");
require("dotenv").config();

function authentication(req, res, next) {
  const authHeader = req.headers ["authorization"];
  const Token = authHeader && authHeader.split(" ")[1];
  if (Token == null) return res.status(401).json({ error: "null token" });
  jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.status(403).json({ error: error.message });
    req.user = user;
    next();
  });
}
module.exports = { authentication };
