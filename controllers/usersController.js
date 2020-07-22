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

//New User Form
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//Create User
router.post('/', (req, res) => {
    db.User.create(req.body, (err, newUser) => {
        if(err) console.log(err);
        
        console.log(newUser)

        res.redirect('/confirm')
    })
})

//Delete User
router.delete('/:id', (req, res) => {

    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if(err) console.log(err);

        res.redirect('/users')
    })
})

module.exports = router;