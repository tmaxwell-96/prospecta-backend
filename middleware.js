const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET;

function authorize(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization.slice("Bearer ".length);
  jwt.verify(token, jwt_secret, (error, decoded) => {
    if (error) {
      res.send("Token validation failed");
    } else {
      req.decoded = decoded;
      next();
    }
  });
}

module.exports = authorize;
