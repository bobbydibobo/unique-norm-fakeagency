/*---------------------
DEPENDENCIES
---------------------*/
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

/*---------------------
INIT APP
---------------------*/
const app = express();

/*---------------------
DB CONNECT
---------------------*/
const database = require('./config/keys').MongoURI;
mongoose.connect(database, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Successfully connected to MongoDB'))
.catch(err => console.log(`An error occured: ${err}`));

/*---------------------
MIDDLEWARE
---------------------*/
//templating
app.use(ejsLayouts);
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

/*---------------------
ROUTES
---------------------*/
app.use('/', require('./routes/index'));
app.use('/team', require('./routes/team'));
app.use('/projects', require('./routes/projects'));
app.use('/contact', require('./routes/contact'));

/*---------------------
PORT
---------------------*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listens to PORT ${PORT}`));