import db from 'db/index.js';
import Shop from './shop';
import LineItem from './line_item';

const Order = db.Model.extend({
    tableName: 'orders',
    line_items: function () {
        return this.hasMany(LineItem);
    },
    shop: function () {
        return this.belongsTo(Shop);
    }
});

export default Order;