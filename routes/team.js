/*---------------------
DEPENDENCIES
---------------------*/
const express = require('express');

/*---------------------
ROUTER
---------------------*/
const router = express.Router();

/*---------------------
GET ROUTES
---------------------*/
router.get('/', (req, res) => res.render('teamMain'));

module.exports = router;