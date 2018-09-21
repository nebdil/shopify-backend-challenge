exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops').insert([
        {id: 1, name: 'Chez Dilan'}
      ]);
    });
};