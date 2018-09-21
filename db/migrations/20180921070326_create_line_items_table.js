exports.up = function (knex, Promise) {
    return knex.schema.createTable('line-items', function (t) {
        t.increments('id').primary()
        t.integer('quantity').notNullable()
        t.integer('price').notNullable()
        t.integer('productId').references('id').inTable('products').notNullable()
        t.integer('orderId').references('id').inTable('orders').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('line-items')
};
