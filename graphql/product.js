const Product = require('../models/product');
// Get individual product by id and name
// + CRUD operations on product
module.exports = {
    getProductById: async ({
        id
    }) => {
        const product = await Product
            .where('id', id)
            .fetch()
            .then(product => {
                return product.toJSON()
            })
        return product;
    },
    getProductByName: async ({
        name
    }) => {
        const product = await Product
            .where('name', name)
            .fetch()
            .then(product => {
                return product.toJSON()
            })
        return product;
    },
    getProductsById: async ({
        id
    }) => {
        const product = await Product
            .where('id', id)
            .fetchAll()
            .then(product => {
                return product.toJSON()
            })
        return product;
    },
    getProductsByName: async ({
        name
    }) => {
        const product = await Product
            .where('name', name)
            .fetchAll()
            .then(product => {
                return product.toJSON()
            })
        return product;
    },
    createProduct: async ({
        name,
        price,
        shop_id
    }) => {
        let newProduct = new Product({
                name: name,
                price: price,
                shop_id: shop_id
            })
            .save()
            .then(e => e.toJSON());
        return newProduct;
    },
    updateProductName: async ({
        id,
        name
    }) => {
        const product = await Product
            .where('id', id)
            .save({
                name: name
            }, {
                patch: true
            })
            .then(e => e.toJSON());
        return product;
    },
    updateProductPrice: async ({
        id,
        price
    }) => {
        const product = await Product
            .where('id', id)
            .save({
                price: price
            }, {
                patch: true
            })
            .then(e => e.toJSON());
        return product;
    },
    deleteProduct: async ({
        id
    }) => {
        let deleted = false;
        await Product
            .where('id', id)
            .destroy()
            .then(() => {
                deleted = true;
            })
        return deleted;
    }
};