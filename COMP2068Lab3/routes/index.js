'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'My Family' });
});

/* GET mom's page. */
router.get('/abebech', function (req, res) {
    res.render('abebech', { name: 'Abebech' });
});

/* GET dad's page. */
router.get('/bogale', function (req, res) {
    res.render('bogale', { name: 'Bogale' });
});

module.exports = router;
