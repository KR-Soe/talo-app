const express = require('express');
const routes = require('./user');
const login = require('./login');
const publication = require('./publication');

const app = express();

app.use(express.json());
app.use('/v1/users', routes);
app.use('/v1/login', login);
app.use('/v1/publication', publication);

module.exports = app;