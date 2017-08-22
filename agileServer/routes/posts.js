var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../db/knex.js');

//Show all posts
router.get('/', function(req, res, next) {
  knex.raw(`select * from posts`)
    .then(function(postData){
      res.render('posts')
    })
});

// Form for creating a post
router.get('/new', function(req, res, next){
  res.render('newPost')
});

// Create a new post in the database
// router.post('/new', function(req, res, next){
//   knex.raw(`insert into posts (user_id, title, body) values (userID, title, body)`)
//     .then( => res.redirect('/')
//   )
// });

//Show an individual post
router.get('/:id', function(req, res, next){
  knex.raw(`select * from posts where posts.id = ${req.params.id}`)
    .then(function(data){
      res.render('showPost' {data:data.rows[0]})
    })
});

//Form for updating a post
router.get('/:id/edit', function(req, res, next){
  res.render('editPost')
})

//Delete post from database
router.post('/:id/delete', function(req, res, next){
  knex.raw(`delete from posts where posts.id = ${req.params.id}`)
    .then(res.redirect('/'))
})

//Update a post in the database
// router.post('/:id/edit', function(req, res, next){
//   knex.raw(`update posts values(user_id, title, body) where posts.id = ${req.params.id}`)
// })
module.exports = router;
