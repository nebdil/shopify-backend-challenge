const bookshelf = require('bookshelf');
const environment = 'development'; // if something else isn't setting ENV, use development
const configuration = require('./knexfile.js')[environment]; // require environment's settings from knexfile
const knex = require('knex')(configuration);

module.exports = bookshelf((knex), { debug: true });