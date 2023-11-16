/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("deals", (table) => {
    table.increments("id").primary();
    table
      .integer("company_id")
      .unsigned()
      .references("companies.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("deal_name").notNullable();
    table.string("description").notNullable();
    table.integer("value").notNullable();
    table.string("percent_certainty").notNullable();
    table.string("expected_sale_date").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("deals");
};
