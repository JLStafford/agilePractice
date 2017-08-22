
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'natalie', password: 'natalie', email: 'natalie@natalie.com', age: 5},
        {username: 'thomas', password: 'thomas', email: 'thomas@thomas.com', age: 1},
        {username: 'jesse', password: 'jesse', email: 'jesse@jesse.com', age: 999},
        {username: 'rich', password: 'rich', email: 'rich@rich.com', age: 1000},
        {username: 'michael', password: 'michael', email: 'michael@michael.com', age: 0}
      ]);
    });
};
