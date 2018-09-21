exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('line-items').del()
    .then(function () {
      // Inserts seed entries
      return knex('line-items').insert([
        {id: 1, quantity: 5, price: 500, productId: 1, orderId: 1},
        {id: 2, quantity: 5, price: 1000, productId: 2, orderId: 1},
        {id: 3, quantity: 5, price: 1500, productId: 3, orderId: 1}
      ]);
    });
};
