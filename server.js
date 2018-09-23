const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./graphql/schema.js');
const Shop = require('./graphql/shop.js')
const Order = require('./graphql/order.js')
const Product = require('./graphql/product.js')
const LineItem = require('./graphql/line_item.js')
const root = {
  getShopById: Shop.getShopById,
  getShopsById: Shop.getShopsById,
  getShopByName: Shop.getShopByName,
  getShopsByName: Shop.getShopsByName,
  createShop: Shop.createShop,
  updateShopName: Shop.updateShopName,
  deleteShop: Shop.deleteShop,
  getOrderById: Order.getOrderById,
  getOrdersById: Order.getOrdersById,
  getOrderByName: Order.getOrderByName,
  getOrdersByName: Order.getOrdersByName,
  createOrder: Order.createOrder,
  updateOrderPrice: Order.updateOrderPrice,
  deleteOrder: Order.deleteOrder,
  getProductById: Product.getProductById,
  getProductsById: Product.getProductsById,
  getProductByName: Product.getProductByName,
  getProductsByName: Product.getProductsByName,
  createProduct: Product.createProduct,
  updateProductName: Product.updateProductName,
  updateProductPrice: Product.updateProductPrice,
  deleteProduct: Product.deleteProduct,
  getLineItemById: LineItem.getLineItemById,
  getLineItemsById: LineItem.getLineItemsById,
  getLineItemByName: LineItem.getLineItemByName,
  getLineItemsByName: LineItem.getLineItemsByName,
  createLineItem: LineItem.createLineItem,
  updateLineItemQuantity: LineItem.updateLineItemQuantity,
  updateLineItemPrice: LineItem.updateLineItemPrice,
  deleteLineItem: LineItem.deleteLineItem
};
app.set('view engine', 'ejs');
// index page 
app.get('/', function (req, res) {
  res.render('index');
});
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));