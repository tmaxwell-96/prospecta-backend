const router = require("express").Router();
const companyController = require("./../controllers/companyController");

router
  .route("/")
  .get(companyController.getCompanies)
  .post(companyController.postNewCompany);

router
  .route("/:id")
  .put(companyController.updateCompany)
  .delete(companyController.deleteCompany)
  .get(companyController.getCompanyById);

module.exports = router;
