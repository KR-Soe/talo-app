const express = require('express');
const routes = require('.');

const app = express();
app.use('/v1/users', routes)

module.exports = app;