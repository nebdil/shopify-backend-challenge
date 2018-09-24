const LineItem = require("../models/line_item");
const Product = require("../models/product");
// Get individual line_item by id and name
// + CRUD operations on line_item
module.exports = {
  getLineItemById: async ({ id }) => {
    const lineItem = await LineItem.where("id", id)
      .fetch()
      .then(lineItem => lineItem.toJSON());
    return lineItem;
  },
  getLineItemByName: async ({ name }) => {
    const lineItem = await LineItem.where("name", name)
      .fetch()
      .then(lineItem => lineItem.toJSON());
    return lineItem;
  },
  getLineItemsById: async ({ id }) => {
    const lineItem = await LineItem.where("id", id)
      .fetchAll()
      .then(lineItem => lineItem.toJSON());
    return lineItem;
  },
  getLineItemsByName: async ({ name }) => {
    const lineItem = await LineItem.where("name", name)
      .fetchAll()
      .then(lineItem => lineItem.toJSON());
    return lineItem;
  },
  createLineItem: async ({ quantity, product_id, order_id }) => {
    const product = await Product.where("id", product_id)
      .fetch()
      .then(product => product.toJSON());
    let price = product.price * quantity;
    let newLineItem = new LineItem({
      quantity: quantity,
      price: price,
      product_id: product_id,
      order_id: order_id
    })
      .save()
      .then(e => e.toJSON());
    return newLineItem;
  },
  updateLineItemQuantity: async ({ id, quantity }) => {
    const lineItem = await LineItem.where("id", id)
      .save(
        {
          quantity: quantity
        },
        {
          patch: true
        }
      )
      .then(lineItem => lineItem.toJSON());
    return lineItem;
  },
  updateLineItemPrice: async ({ id, price }) => {
    const lineItem = await LineItem.where("id", id)
      .save(
        {
          price: price
        },
        {
          patch: true
        }
      )
      .then(lineItem => lineItem.toJSON());
    return lineItem;
  },
  deleteLineItem: async ({ id }) => {
    let deleted = false;
    await LineItem.where("id", id)
      .destroy()
      .then(() => {
        deleted = true;
      });
    return deleted;
  }
};
