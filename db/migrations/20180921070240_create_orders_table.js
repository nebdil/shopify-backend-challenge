exports.up = function (knex, Promise) {
    return knex.schema.createTable('orders', function (t) {
        t.increments('id').primary()
        t.integer('price').notNullable()
        t.integer('shopId').references('id').inTable('shops').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('orders')
};
