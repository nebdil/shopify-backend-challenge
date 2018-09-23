const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./graphql/schema.js");
const Shop = require("./graphql/shop.js");
const Order = require("./graphql/order.js");
const Product = require("./graphql/product.js");
const LineItem = require("./graphql/line_item.js");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const index = require("./routes/index");
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
app.set("view engine", "ejs");
// index page
app.get("/", function(req, res) {
  res.render("index");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(3000, () => console.log("Now browse to localhost:3000/graphql"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

// app.use('/graphql/order', graphqlHTTP({
//   schema: orderSchema,
//   rootValue: orderRoot,
//   graphiql: true
// }));

// app.use('/graphql/line_item', graphqlHTTP({
//   schema: lineItemSchema,
//   rootValue: lineItemRoot,
//   graphiql: true
// }))

// app.use('/graphql/product', graphqlHTTP({
//   schema: productSchema,
//   rootValue: productRoot,
//   graphiql: true
// }));

// app.use('/graphql/shop', graphqlHTTP({
//   schema: shopSchema,
//   rootValue: shopRoot,
//   graphiql: true
// }));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
