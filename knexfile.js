// Update with your config settings.

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './dev.sqlite3'
        },
        migrations:{
            directory: './db/migrations'
        },
        useNullAsDefault : true
    },

    migrations: {
        path: './db/migrations',
        tableName: 'knex_migrations'
    }
};
