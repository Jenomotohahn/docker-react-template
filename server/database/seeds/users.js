exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "ed" },
        { username: "raymond" },
        { username: "jason" }
      ]);
    })
    .then(function() {
      return knex("tasks")
        .del()
        .then(function() {
          return knex("tasks").insert([
            { status: "pending", task: "Feed Cat" },
            { status: "active", task: "Buy Cat Food" },
            { status: "done", task: "Dee Dishes" }
          ]);
        });
    });
};
