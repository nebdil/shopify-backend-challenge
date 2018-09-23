exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("line-items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("line-items").insert([
        {
          id: 1,
          quantity: 5,
          price: 500,
          product_id: 1,
          order_id: 1
        },
        {
          id: 2,
          quantity: 5,
          price: 1000,
          product_id: 2,
          order_id: 1
        },
        {
          id: 3,
          quantity: 5,
          price: 1500,
          product_id: 3,
          order_id: 1
        },
        {
          id: 4,
          quantity: 5,
          price: 500,
          product_id: 4,
          order_id: 2
        },
        {
          id: 5,
          quantity: 3,
          price: 600,
          product_id: 5,
          order_id: 2
        }
      ]);
    });
};
