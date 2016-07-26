var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/others');
var ctrlLocations = require('../controllers/locations');


router.get('/about', ctrlMain.about);
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/review/new', ctrlLocations.addReview);

module.exports = router;
