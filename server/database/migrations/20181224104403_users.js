exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", function(table) {
      table.increments("id");
      table.string("username");
    })
    .createTable("tasks", table => {
      table.increments("id").primary();
      table.string("status");
      table.string("task");
      table.timestamp("created_at");
      table.timestamp("completed_at");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users").dropTable("tasks");
};
