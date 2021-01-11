/*---------------------
DEPENDENCIES
---------------------*/
const express = require('express');

/*---------------------
SCHEMAS
---------------------*/
const UserMessage = require('../models/UserMessage');

/*---------------------
ROUTER
---------------------*/
const router = express.Router();

/*---------------------
GET ROUTES
---------------------*/
router.get('/', (req, res) => res.render('theAgency'));

/*---------------------
MESSAGE HANDLER
---------------------*/
router.post('/', (req, res) => {
    const {name, email, msg} = req.body;

    const newUserMessage = new UserMessage({
        name,
        email,
        msg
    });

    newUserMessage.save();

    res.render('thx');
});

module.exports = router;