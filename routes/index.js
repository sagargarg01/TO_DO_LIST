const express = require('express');

const router = express.Router();
const homePage  = require('../controllers/home_page');

console.log('router loaded');

router.get('/',homePage.homepage);

router.post('/create-list',homePage.create);

module.exports = router;