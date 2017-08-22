
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 1, title: 'First Seed Title', body: 'This is the body of the first seed post'},
        {user_id: 2, title: 'Second Seed Title', body: 'This is the body of the second seed post'},
        {user_id: 3, title: 'Third Seed Title', body: 'This is the body of the third seed post'}
      ]);
    });
};
