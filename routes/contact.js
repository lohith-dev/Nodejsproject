const express = require('express');
const contactController = require('../controllers/contact.js')
const router = express.Router();

router.get('/',contactController.getContact);
router.post('/success',contactController.postContact);

module.exports = router;