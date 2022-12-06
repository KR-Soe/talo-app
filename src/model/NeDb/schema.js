const Datastore = require('nedb');

const userSchema = new Datastore();

module.exports = { userSchema };