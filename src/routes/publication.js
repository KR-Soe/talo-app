const express = require('express');
const controller = require('../controllers/publication');

const router = express.Router();

router.get('/', controller.getPublications);
router.post('/', controller.createPublication);

module.exports = router;
