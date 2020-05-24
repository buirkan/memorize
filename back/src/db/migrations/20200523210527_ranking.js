
exports.up = function (knex) {
  return knex.schema.createTable('ranking', function (table) {
    table.increments(),
    table.string('gameTime').notNullable(),
    table.string('user_id').notNullable(),
    table.foreign('user_id').references('id').inTable('users')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('ranking')
};
