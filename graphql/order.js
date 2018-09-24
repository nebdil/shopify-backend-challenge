const Order = require("../models/order");
// Get individual order by id and name
// + CRUD operations on order
module.exports = {
  getOrderById: async ({ id }) => {
    const order = await Order.where("id", id)
      .fetch()
      .then(order => order.toJSON());
    return order;
  },
  getOrderByName: async ({ name }) => {
    const order = await Order.where("name", name)
      .fetch()
      .then(order => order.toJSON());
    return order;
  },
  getOrdersById: async ({ id }) => {
    const order = await Order.where("id", id)
      .fetchAll()
      .then(order => order.toJSON());
    return order;
  },
  getOrdersByName: async ({ name }) => {
    const order = await Order.where("name", name)
      .fetchAll()
      .then(order => order.toJSON());
    return order;
  },
  createOrder: async ({ price, shop_id }) => {
    let newOrder = new Order({
      price: price,
      shop_id: shop_id
    })
      .save()
      .then(e => e.toJSON());
    return newOrder;
  },
  updateOrderPrice: async ({ id, newPrice }) => {
    const order = await Order.where("id", id)
      .save(
        {
          price: newPrice
        },
        {
          patch: true
        }
      )
      .then(e => e.toJSON());
    return order;
  },
  deleteOrder: async ({ id }) => {
    let deleted = false;
    await Order.where("id", id)
      .destroy()
      .then(() => {
        deleted = true;
      });
    return deleted;
  }
};
