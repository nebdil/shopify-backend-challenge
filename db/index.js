const environment = 'development'; // if something else isn't setting ENV, use development
const configuration = require('./knexfile.js')[environment]; // require environment's settings from knexfile
const knex = require('knex')(configuration);
const bookshelf = require('bookshelf')(knex);
const cascadeDelete = require('bookshelf-cascade-delete');
bookshelf.plugin(cascadeDelete);

module.exports = bookshelf;