const Datastore = require('nedb');

const userSchema = new Datastore();
const publicationSchema = new Datastore();

module.exports = { userSchema, publicationSchema };