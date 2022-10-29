const express  = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import routes
const mainRoute = require('./routes/main');

app.use('/main', mainRoute);

//Routes
app.get('/', (req,res) => {
    res.send('Home')
});


//Connect to DB
mongoose.connect(process.env.DB_connection, () => 
    console.log('connected to DB!')
);

//to the servevr
app.listen(3000);