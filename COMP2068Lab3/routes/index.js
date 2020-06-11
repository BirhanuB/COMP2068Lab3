'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { name: 'My Family' });
});

/* GET mom's page. */
router.get('/abebech', function (req, res) {
    res.render('abebech', { name: 'Abebech' });
});

/* GET dad's page. */
router.get('/bogale', function (req, res) {
    res.render('bogale', { name: 'Bogale' });
});

/* GET older sister's page. */
router.get('/abiyot', function (req, res) {
    res.render('abiyot', { name: 'Abiyot' });
});

/* GET other older sister's page. */
router.get('/adey', function (req, res) {
    res.render('adey', { name: 'Adey' });
});

/* GET my page. */
router.get('/birhanu', function (req, res) {
    res.render('birhanu', { name: 'Birhanu' });
});

/* GET younger brother's page. */
router.get('/wondwosen', function (req, res) {
    res.render('wondwosen', { name: 'Wondwosen' });
});

/* GET younger sister's page. */
router.get('/yeabsira', function (req, res) {
    res.render('yeabsira', { name: 'Yeabsira' });
});

module.exports = router;
