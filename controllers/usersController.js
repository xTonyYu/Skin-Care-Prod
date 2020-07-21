//Read Route

const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if(err) console.log(err);

        res.render('users', {
            user: allUsers, 
        })
    })
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});


module.exports = router;