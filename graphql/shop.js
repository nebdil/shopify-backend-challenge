const Shop = require("../models/shop");
// Get individual shop by id and name
// + CRUD operations on shop
module.exports = {
  getShopById: async ({ id }) => {
    const shop = await Shop.where("id", id)
      .fetch({
        withRelated: ["orders", "products"]
      })
      .then(shop => shop.toJSON());
    return shop;
  },
  getShopByName: async ({ name }) => {
    const shop = await Shop.where("name", name)
      .fetch({
        withRelated: ["orders", "products"]
      })
      .then(shop => shop.toJSON());
    return shop;
  },
  getShopsById: async ({ id }) => {
    const shops = await Shop.where("id", id)
      .fetchAll({
        withRelated: ["orders", "products"]
      })
      .then(shops => shops.toJSON());
    return shops;
  },
  getShopsByName: async ({ name }) => {
    const shops = await Shop.where("name", name)
      .fetchAll({
        withRelated: ["orders", "products"]
      })
      .then(shops => shops.toJSON());
    return shops;
  },
  createShop: async ({ name }) => {
    let newShop = new Shop({
      name: name
    })
      .save()
      .then(e => e.toJSON());
    return newShop;
  },
  updateShopName: async ({ id, name }) => {
    const shop = await Shop.where("id", id)
      .save(
        {
          name: name
        },
        {
          patch: true
        }
      )
      .then(e => e.toJSON());
    return shop;
  },
  deleteShop: async ({ id }) => {
    let deleted = false;
    await Shop.where("id", id)
      .destroy()
      .then(() => {
        deleted = true;
      });
    return deleted;
  }
};
