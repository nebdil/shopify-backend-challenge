exports.up = function (knex, Promise) {
    return knex.schema.createTable('shops', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('shops')
};
