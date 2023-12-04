const router = require("express").Router();
const dealController = require("./../controllers/dealController");
const authorize = require("../middleware");

router
  .route("/")
  .get(authorize, dealController.getDeals)
  .post(authorize, dealController.postDeal);

router.route("/company/:id").get(authorize, dealController.getDealsByCompany);

router
  .route("/:id")
  .put(authorize, dealController.putDeal)
  .delete(authorize, dealController.deleteDeal)
  .get(authorize, dealController.getDealById);

module.exports = router;
