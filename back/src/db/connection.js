const knex = require('knex')
const config = require('../../knexfile')
const instance = knex(config.development)

module.exports = instance