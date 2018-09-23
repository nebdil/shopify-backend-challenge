const db = require('../db/index.js');
const Product = require('../models/product');
const Order = require('../models/order');

const Shop = db.Model.extend({
    tableName: 'shops',
    products: function () {
        return this.hasMany(Product);
    },
    orders: function () {
        return this.hasMany(Order);
    }
}, {
    dependents: ['products', 'orders']
});

module.exports = Shop;