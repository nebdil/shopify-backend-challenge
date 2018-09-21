module.exports = {
    development: {
        client: 'sqlite3',
            connection: {
            filename: "./db.sqlite"
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
}
};