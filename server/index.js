const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');
require('dotenv').config();
const usersRoutes = require('./routes/users');
const userProfileRoutes = require('./routes/userProfile');

// CONNECTION TO MONDODB ATLAS
const URI = process.env.MONGO_URI;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected");
});

const app = express();

// MIDDLEWARES

app.use(cors());

// app.options('*', cors());  // Enable preflight requests for all routes

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-auth-token');
    res.sendStatus(200);
  });


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    next();
});



// APIs
app.use('/auth', usersRoutes); 
app.use('/user', userProfileRoutes); 

// Error handling middleware
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
