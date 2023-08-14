const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');
require('dotenv').config();
const usersRoutes = require('./routes/users');

//CONNECTION TO MONDODB ATLAS
const URI = process.env.MONGO_URI;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log("Database Connected")
)



const app = express();

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})




// APIs

app.use('/auth', usersRoutes); 

app.use('/userprofile', usersRoutes); 



