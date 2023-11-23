const router = require("express").Router();
const authorize = require("../middleware");
const companyController = require("./../controllers/companyController");

router
  .route("/")
  .get(authorize, companyController.getCompanies)
  .post(companyController.postNewCompany);

router
  .route("/:id")
  .put(companyController.updateCompany)
  .delete(companyController.deleteCompany)
  .get(companyController.getCompanyById);

module.exports = router;
