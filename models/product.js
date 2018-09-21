import db from 'db/index.js';
import Shop from './shop';
import LineItem from './line_item';

const Shop = db.Model.extend({
    tableName: 'shops',
    shop: function () {
        return this.belongsTo(Shop);
    },
    line_items: function () {
        return this.hasMany(LineItem);
    }
});

export default Shop;