
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('todos', table => {
      table.increments()
      table.string('title')
      table.boolean('completed').notNullable().defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos')
};
