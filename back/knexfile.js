module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/dev.sqlite'
    },
    migrations: {
      directory: './src/db/migrations'
    },
    useNullAsDefault: true
  }

};
