const router = require("express").Router();
const authorize = require("../middleware");
const companyController = require("./../controllers/companyController");

router
  .route("/")
  .get(authorize, companyController.getCompanies)
  .post(authorize, companyController.postNewCompany);

router
  .route("/:id")
  .put(authorize, companyController.updateCompany)
  .delete(authorize, companyController.deleteCompany)
  .get(authorize, companyController.getCompanyById);

module.exports = router;
