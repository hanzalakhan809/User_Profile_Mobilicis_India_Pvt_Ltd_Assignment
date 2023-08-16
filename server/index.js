const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');
require('dotenv').config();
const usersRoutes = require('./routes/users');
const userProfileRoutes = require('./routes/userProfile');

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

const corsOptions = {
    origin: 'https://user-profile-mobilicis-india-pvt-ltd-assignment-wsiz.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-auth-token'],
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));  // Enable preflight requests for all routes


app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    next();
});

// app.use(cors({
//     origin: ["https://user-profile-mobilicis-india-pvt-ltd-assignment-wsiz.vercel.app"],
//     methods: ["POST","GET","PUT"],
//     credentials: true
// }));
// app.use(bodyParser.json());



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})





// APIs

app.use('/auth', usersRoutes); 

app.use('/user', userProfileRoutes); 




