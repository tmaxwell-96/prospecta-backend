const router = require("express").Router();
const dealController = require("./../controllers/dealController");

router.route("/").get(dealController.getDeals).post(dealController.postDeal);

router.route("/company/:id").get(dealController.getDealsByCompany);

router
  .route("/:id")
  .put(dealController.putDeal)
  .delete(dealController.deleteDeal)
  .get(dealController.getDealById);

module.exports = router;
