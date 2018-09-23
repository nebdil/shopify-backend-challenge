exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("orders")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("orders").insert([
        {
          id: 1,
          price: 3000,
          shop_id: 1
        },
        {
          id: 2,
          price: 1100,
          shop_id: 2
        }
      ]);
    });
};
