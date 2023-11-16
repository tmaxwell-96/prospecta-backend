const knex = require("knex")(require("../knexfile"));

//GET Requests
//-----------------------------------

const getCompanies = async (_req, res) => {
  try {
    const data = await knex("companies");
    res.status(200).json(data);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error reaching the server, please try again later` });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const data = await knex("companies").where({ id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error reaching the server, please try again later` });
  }
};

//Post Requests
//-----------------------------------

const postNewCompany = async (req, res) => {
  const newCompany = req.body;

  if (
    !newCompany.company_name ||
    !newCompany.address ||
    !newCompany.city ||
    !newCompany.country ||
    !newCompany.contact_name ||
    !newCompany.contact_position ||
    !newCompany.contact_phone ||
    !newCompany.contact_email
  ) {
    res
      .status(400)
      .json({ message: `Invalid or incomplete data in the request` });
  }
  try {
    const createdCompany = await knex("companies").insert(req.body);
    const newCompanyId = createdCompany[0];
    const newCompany = await knex("companies").where({
      id: newCompanyId,
    });
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new company, please try again later. Error: ${error}`,
    });
  }
};

//Put Requests
//-----------------------------------

const updateCompany = async (req, res) => {
  const companyId = req.params.id;
  const newCompany = req.body;

  if (
    !newCompany.company_name ||
    !newCompany.address ||
    !newCompany.city ||
    !newCompany.country ||
    !newCompany.contact_name ||
    !newCompany.contact_position ||
    !newCompany.contact_phone ||
    !newCompany.contact_email
  ) {
    res
      .status(400)
      .json({ message: `Invalid or incomplete data in the request` });
  }

  try {
    const rowsUpdated = await knex("companies")
      .where({ id: companyId })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res
        .status(404)
        .json({ message: `Company with ID ${req.params.id} not found` });
    }

    const updatedCompany = await knex("companies").where({ id: req.params.id });
    res.json(updatedCompany);
  } catch (error) {
    res.status(500).json({
      message: `Unable to update company, please try again later. Error: ${error}`,
    });
  }
};

//Delete Requests
//-----------------------------------
const deleteCompany = async (req, res) => {
  try {
    const rowsDeleted = await knex("companies")
      .where({ id: req.params.id })
      .delete();

    if (rowsDeleted === 0) {
      res
        .status(404)
        .json({ message: `Warehouse with ID ${req.params.id} not found` });
    }

    res.status(200).json({ message: `Delete successful` });
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete company, please try again later. Error: ${error}`,
    });
  }
};

module.exports = {
  getCompanies,
  postNewCompany,
  updateCompany,
  deleteCompany,
  getCompanyById,
};
