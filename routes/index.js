const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
//sfsdfssfsfsdfsdfsdsfsfsdfsfsdssfssfsd
router.get('/',  		paymentController.index)
router.get('/redirect', paymentController.redirect)

module.exports = router;
