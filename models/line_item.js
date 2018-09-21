import db from 'db/index.js';
import Product from './product';
import Order from './order';

const LineItem = db.Model.extend({
    tableName: 'line-items',
    product: function () {
        return this.belongsTo(Product);
    },
    order: function () {
        return this.belongsTo(Order);
    }
});

export default LineItem;