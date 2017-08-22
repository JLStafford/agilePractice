
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.integer('user_id');
    table.string('title');
    table.string('body');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
