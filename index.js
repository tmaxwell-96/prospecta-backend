const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 5050;
const knex = require("knex")(require("./knexfile"));

const jwt_secret = process.env.JWT_SECRET;

//Middleware
//-----------------------------------
app.use(express.json());
app.use(cors());

//Authorizaion
//-----------------------------------

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
      const token = jwt.sign({ name: user.name }, jwt_secret, {
        expiresIn: "1day",
      });
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
