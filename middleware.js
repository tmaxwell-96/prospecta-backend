const jwt = require("jsonwebtoken");

const jwt_secret =
  "e596628aad6b0a5bd58541bc688c893671d73b73f80b7fcc8af4c5a9adf5e838";

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
