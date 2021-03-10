const knex = require('knex');
const config = require('../knexfile.js');
let db = knex(config.development)
module.exports = db
