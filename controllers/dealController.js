const knex = require("knex")(require("../knexfile"));

//GET Requests
//-----------------------------------

const getDeals = async (_req, res) => {
  try {
    const data = await knex("deals");
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

  const createdDeal = await knex("deals").insert(req.body);
  const newDealId = createdDeal[0];
  const newDealResponse = await knex("deals").where({ id: newDealId });
  res.status(201).json(newDealResponse);
};

module.exports = {
  getDeals,
  postDeal,
};
