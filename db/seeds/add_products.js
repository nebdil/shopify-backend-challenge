
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Caramel', price: 100, shopId: 1},
        {id: 2, name: 'Bonbon', price: 200, shopId: 1},
        {id: 3, name: 'Chocolat', price: 300, shopId: 1}
      ]);
    });
};
