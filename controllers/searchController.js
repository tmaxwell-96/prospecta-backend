const knex = require("knex")(require("../knexfile"));

const searchDealorCompany = (endpoint, keyword) => {
  const tableName = endpoint === "/companies" ? "companies" : "deals";
  const searchFields =
    endpoint === "/companies"
      ? [
          "company_name",
          "address",
          "city",
          "country",
          "contact_name",
          "contact_position",
          "contact_phone",
          "contact_email",
        ]
      : [
          "deal_name",
          "description",
          "value",
          "percent_certainty",
          "expected_sale_date",
          "company_name",
        ];

  let query = knex(tableName).select("*");
  if (tableName === "deals") {
    query = query
      .innerJoin("companies", "companies.id", "deals.company_id")
      .select("deals.*", "companies.company_name as company_name");
  }

  return query.where((builder) => {
    builder.orWhere(function () {
      for (const field of searchFields) {
        this.orWhere(field, "like", `%${keyword}%`);
      }
    });
  });
};

const searchDealsByDate = async (req, res) => {
  try {
    const deals = await knex("deals")
      .whereBetween("expected_sale_date", [
        req.body.startDate,
        req.body.endDate,
      ])
      .innerJoin("companies", "companies.id", "deals.company_id")
      .select("deals.*", "companies.company_name as company_name");

    res.json(deals);
  } catch (error) {
    console.log(`Error reaching the server, please try again later.`);
  }
};

module.exports = {
  searchDealorCompany,
  searchDealsByDate,
};
