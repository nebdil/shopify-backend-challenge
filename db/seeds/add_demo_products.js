exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1,
          name: "Caramel",
          price: 100,
          shop_id: 1
        },
        {
          id: 2,
          name: "Bonbon",
          price: 200,
          shop_id: 1
        },
        {
          id: 3,
          name: "Chocolat",
          price: 300,
          shop_id: 1
        },
        {
          id: 4,
          name: "Poutine",
          price: 100,
          shop_id: 2
        },
        {
          id: 5,
          name: "Smoked Meet",
          price: 200,
          shop_id: 2
        }
      ]);
    });
};
