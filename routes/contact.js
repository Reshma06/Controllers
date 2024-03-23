const express = require('express');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/contactus', contactController.contactGetProduct);

router.post('/success', contactController.contactPostProduct);

module.exports = router;