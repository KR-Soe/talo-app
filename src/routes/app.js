const express = require('express');
const routes = require('./user');
const login = require('./login');

const app = express();

app.use(express.json());
app.use('/v1/users', routes);
app.use('/v1/login', login);

module.exports = app;