const {
    buildSchema
} = require('graphql');

module.exports = buildSchema(`
  type Shop {
    id: Int!
    name: String!
    orders: [Order]!
    products: [Product]!
  }
  type Product {
    id: Int!
    name: String!
    price: Int!
    shop_id: Int!
  }
  type Order {
    id: Int!
    price: Int!
    shop_id: Int!
  }
  type LineItem {
    id: Int!
    quantity: Int!
    price: Int!
    product_id: Int!
    order_id: Int!
  }
  type Query {
	  getShopById(id: Int!): Shop
	  getShopsById(id: Int): [Shop]
	  getShopByName(name: String!): Shop
	  getShopsByName(name: String): [Shop]
    getOrderById(id: Int!): Order
    getOrdersById(id: Int): [Order]
    getOrderByName(name: String!): Order
    getOrdersByName(name: String): [Order]
    getProductById(id: Int!): Product
    getProductsById(id: Int): [Product]
    getProductByName(name: String!): Product
    getProductsByName(name: String): [Product]
    getLineItemById(id: Int!): LineItem
    getLineItemsById(id: Int): [LineItem]
    getLineItemByName(name: String!): LineItem
    getLineItemsByName(name: String): [LineItem]
  }
  type Mutation {
    createShop(name: String!): Shop
    updateShopName(id: Int!, name: String): Shop
    deleteShop(id: Int!): Boolean
    createOrder(price: Int!, shop_id: Int!): Order
    updateOrderPrice(id: Int!, price: Int): Order
    deleteOrder(id: Int!): Boolean
    createProduct(name: String!, price: Int!, shop_id: Int!): Product
    updateProductName(id: Int!, name: String!): Product
    updateProductPrice(id: Int!, price: Int!): Product
    deleteProduct(id: Int!): Boolean
    createLineItem(quantity: Int!, price: Int!, product_id: Int!, order_id: Int!): LineItem
    updateLineItemQuantity(id: Int!, quantity: Int!): LineItem
    updateLineItemPrice(id: Int!, price: Int!): LineItem
    deleteLineItem(id: Int!): Boolean
  }
`);