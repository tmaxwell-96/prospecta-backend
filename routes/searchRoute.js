const router = require("express").Router();
const searchController = require("./../controllers/searchController");

const searchRouteHandler = (req, res) => {
  const { endpoint } = req.params;
  const searchKey = req.query.searchTerm;
  if (endpoint === "companies" || endpoint === "deals") {
    searchController
      .searchDealorCompany(`/${endpoint}`, searchKey)
      .then((results) => {
        res.json(results);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } else {
    res.status(400).json({ error: "Invalid endpoint" });
  }
};

router.get("/:endpoint", searchRouteHandler);

module.exports = router;
