const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5050;

//Middleware
//-----------------------------------
app.use(express.json());
app.use(cors());

//Routers
//-----------------------------------
const companyRoutes = require("./routes/companyRoute");
const dealRoutes = require("./routes/dealRoute");

app.use("/companies", companyRoutes);
app.use("/deals", dealRoutes);

app.get("/", (_req, res) => res.send("Connected to the backend"));

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
