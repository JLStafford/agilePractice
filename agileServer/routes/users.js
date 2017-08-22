var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../db/knex.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	knex.raw(`SELECT * FROM users`)
	.then(function(users) {
		res.render('users', {users: users.rows});
	})
});

router.get('/:id/edit', function(req, res, next) {
  knex.raw(`SELECT * FROM users where id = ${req.params.id}`)
	.then(function(user) {
		res.render('edit_user', {user: user.rows[0]});
	})
});

router.get('/new', function(req, res, next) {
  res.render('new_user')
});

router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM users where id = ${req.params.id}`)
	.then(function(user) {
		res.render('show_user', {user: user.rows[0]});
	})
});

// router.post('/', function(req, res, next) {
//   knex.raw(`INSERT INTO users VALUES (username, password, email, age)`)
// 	.then(function(user) {
// 		res.redirect('/');
// 	})
// });

// router.post('/:id', function(req, res, next) {
//   knex.raw(`UPDATE users VALUES (username, password, email, age) WHERE id = ${req.params.id}`)
// 	.then(function(user) {
// 		res.redirect('/');
// 	})
// });

router.post('/:id/delete', function(req, res, next) {
  knex.raw(`DELETE from users WHERE id = ${req.params.id}`)
	.then(function(user) {
		res.redirect('/');
	})
});

module.exports = router;
