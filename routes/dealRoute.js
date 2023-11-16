const router = require("express").Router();
const dealController = require("./../controllers/dealController");

router.route("/").get(dealController.getDeals).post(dealController.postDeal);

module.exports = router;
