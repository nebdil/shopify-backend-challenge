const db = require('../db/index.js');
const Product = require('./product');
const Order = require('./order');

const LineItem = db.Model.extend({
    tableName: 'line-items',
    product: function () {
        return this.belongsTo(Product);
    },
    order: function () {
        return this.belongsTo(Order);
    }
});

module.exports = LineItem;