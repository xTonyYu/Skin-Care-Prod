//Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./models');

const usersController = require('./controllers/usersController');

//Config
app.set('view engine', 'ejs');

//Middleware
const methodOverride = require('method-override');
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname+'/public'));

//Custom Middleware to log method, time, etc
app.use((req, res, next) =>  {
    const method = req.method;
    const url = req.url;
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`${method} ${url} ${timeStamp}`);
    next();
});

//Access controller
app.use('/users', usersController)

// Routes-------------------------------

//Home
app.get('/', (req, res) => {
    res.render('index');
});

//Show page
app.get('/show', (req, res) => {
    db.User.find((err, allUsers) => {
        if(err) console.log(err);
        res.render('show', {
            users: allUsers,
        });
    })
});

//About Page
app.get('/about', (req, res) => {
    res.render('about');
});


// 404 Page-------------------------------
app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>');
});

//Listener
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
