const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.adminGetProduct);

router.post('/add-product', adminController.adminPostProduct);

module.exports = router;