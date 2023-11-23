const knex = require("knex")(require("../knexfile"));

//GET Requests
//-----------------------------------

const getDeals = async (_req, res) => {
  // try {
  const data = await knex("deals")
    .join("companies", "companies.id", "company_id")
    .select("deals.*", "company_name as company_name");
  res.status(200).json(data);
  // } catch (error) {
  //   res
  //     .status(400)
  //     .json({ message: `Error reaching the server, please try again later` });
  // }
};
const getDealById = async (req, res) => {
  try {
    const data = await knex("deals")
      .join("companies", "companies.id", "deals.company_id")
      .select("deals.*", "companies.company_name as company_name")
      .where({ "deals.id": req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error reaching the server, please try again later` });
  }
};

const getDealsByCompany = async (req, res) => {
  try {
    const data = await knex("deals").where({ company_id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error reaching the server, please try again later` });
  }
};

//Post Requests
//-----------------------------------

const postDeal = async (req, res) => {
  const newDeal = req.body;

  if (
    !newDeal.company_id ||
    !newDeal.deal_name ||
    !newDeal.description ||
    !newDeal.value ||
    !newDeal.percent_certainty ||
    !newDeal.expected_sale_date
  ) {
    res
      .status(400)
      .json(`Incomplete information in request, please fill all fields`);
  }
  try {
    const createdDeal = await knex("deals").insert(req.body);
    const newDealId = createdDeal[0];
    const newDealResponse = await knex("deals").where({ id: newDealId });
    res.status(201).json(newDealResponse);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error reaching the server, please try again later` });
  }
};

//Put Requests
//-----------------------------------

const putDeal = async (req, res) => {
  const newDeal = req.body;
  if (
    !newDeal.company_id ||
    !newDeal.deal_name ||
    !newDeal.description ||
    !newDeal.value ||
    !newDeal.percent_certainty ||
    !newDeal.expected_sale_date
  ) {
    res
      .status(400)
      .json(`Incomplete information in request, please fill all fields`);
  }
  try {
    const rowsUpdated = await knex("deals")
      .where({ id: req.params.id })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res
        .status(404)
        .json({ message: `Deal with ID ${req.params.id} not found` });
    }

    const updatedDeal = await knex("deals").where({ id: req.params.id });
    res.status(200).json(updatedDeal);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error reaching the server, please try again later` });
  }
};

//Delete Requests
//-----------------------------------

const deleteDeal = async (req, res) => {
  try {
    const rowsUpdated = await knex("deals")
      .where({ id: req.params.id })
      .delete();

    if (rowsUpdated === 0) {
      return res
        .status(404)
        .json({ message: `Deal with ID ${req.params.id} not found` });
    }

    res.status(200).json({ message: `Delete successful` });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error reaching the server, please try again later` });
  }
};

module.exports = {
  getDeals,
  postDeal,
  putDeal,
  deleteDeal,
  getDealById,
  getDealsByCompany,
};
