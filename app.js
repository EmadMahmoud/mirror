const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config();
const { PORT, DATABASE_URI } = process.env
const mirrorRoutes = require('./routes/mirror');
const authRoutes = require('./routes/auth');
const errorController = require('./controller/error');
const User = require('./models/user');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session); //pass session object to connect-mongodb function
const { csrfSync } = require('csrf-sync');

const flash = require('connect-flash');

const store = new MongoDBStore({
    uri: DATABASE_URI,
    collection: 'sessions'
})

const { csrfSynchronisedProtection } = csrfSync({
    getTokenFromRequest: (req) => req.body['CSRFToken']
});


app.set("view engine", "ejs");
app.set("views", "views"); //it's the default

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//session
app.use(session({ secret: 'this string should be long in production', resave: false, saveUninitialized: false, store: store }))

app.use(csrfSynchronisedProtection);
app.use(flash());

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then(user => {
            if (!user) {
                return next();
            }
            req.user = user;
            next();
        })
        .catch(err => {
            next(new Error(err));
        });
});


//routes
app.use(mirrorRoutes);
app.use(authRoutes);
app.get('/', (req, res, next) => {
    res.redirect('/profile');
})
app.use('/500', errorController.get500);
app.use(errorController.get404);


//error middlewares
app.use((error, req, res, next) => {

    res.status(500).render('500', {
        pageTitle: 'Error',
        path: '/500'
    })
});


mongoose.connect(DATABASE_URI)
    .then(result => {
        app.listen(PORT || 3000);
        console.log('Db Connected');
    })
    .catch(err => {
        console.log(`Error Connection to DB: ${err}`);
    });

