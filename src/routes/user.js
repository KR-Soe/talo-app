const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.getUsers);
router.post('/', controller.createUser);
// router.get('/:id', controller.getUser);

module.exports = router;
