const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/', controller.getUser);

module.exports = router;