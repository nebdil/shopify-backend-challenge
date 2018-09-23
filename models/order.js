const db = require('../db/index.js');
const Shop = require('../models/shop');
const LineItem = require('../models/line_item');

const Order = db.Model.extend({
    tableName: 'orders',
    line_items: function () {
        return this.hasMany(LineItem);
    },
    shop: function () {
        return this.belongsTo(Shop);
    }
});

module.exports = Order;