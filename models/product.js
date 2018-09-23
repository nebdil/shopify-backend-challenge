const db = require('../db/index.js');
const Shop = require('../models/shop');
const LineItem = require('../models/line_item');

const Product = db.Model.extend({
    tableName: 'products',
    shop: function () {
        return this.belongsTo(Shop);
    },
    line_items: function () {
        return this.hasMany(LineItem);
    }
});

module.exports = Product;