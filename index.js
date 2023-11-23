const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 5050;
const knex = require("knex")(require("./knexfile"));

const jwt_secret =
  "e596628aad6b0a5bd58541bc688c893671d73b73f80b7fcc8af4c5a9adf5e838";

//Middleware
//-----------------------------------
app.use(express.json());
app.use(cors());

//Authorizaion
//-----------------------------------
function authorize(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization.slice("Bearer ".length);
  jwt.verify(token, jwt_secret, (error, decoded) => {
    if (error) {
      res.send("Token validation failed");
    } else {
      req.decoded = decoded;
      console.log(decoded);
      next();
    }
  });
}

app.post("/signup", async (req, res) => {
  const { username, name, password } = req.body;

  await knex("users").insert(req.body);

  res.json({ success: "true" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = await knex("users").where({ username: username });

  if (users.length > 0) {
    const user = users[0];

    if (user.username === username && user.password === password) {
      const token = jwt.sign({ name: user.name }, jwt_secret);
      res.json({ token: token });
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

//Routers
//-----------------------------------
const companyRoutes = require("./routes/companyRoute");
const dealRoutes = require("./routes/dealRoute");
const searchRoutes = require("./routes/searchRoute");

app.use("/companies", companyRoutes);
app.use("/deals", dealRoutes);
app.use("/search", searchRoutes);

app.get("/", (_req, res) => res.send("Connected to the backend"));

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
