import db from 'db/index.js';
import Product from './product';
import Order from './order';

const Shop = db.Model.extend({
    tableName: 'shops',
    products: function () {
        return this.hasMany(Product);
    },
    orders: function () {
        return this.hasMany(Order);
    }
});

export default Shop;