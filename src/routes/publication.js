const express = require('express');
const controller = require('../controllers/publication');

const router = express.Router();

router.get('/', controller.getPublications);
router.post('/', controller.createPublication);
router.get('/:userId', controller.getPublicationsUser);
router.delete('/:id', controller.deletePublication);

module.exports = router;
