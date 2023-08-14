const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Importing the JWT library
const User = require('../models/users');

// JWT secret key (should be stored in a safer manner, perhaps as an environment variable)
const jwtSecret = process.env.JWTSECRET;



//ROUTE1: Signup
router.post('/signup', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
            });

            // Hash the password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                           .then(user => res.json({user,message : "Signed in successfully"}))
                           .catch(err => res.status(400).json('Error: ' + err));
                });
            });
        })
        .catch(err => res.status(500).json('Server Error: ' + err));
});

//ROUTE2: Login
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: 'User does not exist' });
            }

            // Compare password
            bcrypt.compare(req.body.password, user.password)
                  .then(isMatch => {
                      if (!isMatch) {
                          return res.status(400).json({ message: 'Invalid credentials' });
                      }
                      const payload = { id: user.id, name: user.name, email: user.email }; 
                      jwt.sign(payload, jwtSecret, { expiresIn: 3600 }, (err, token) => {
                          if (err) throw err;
                          res.json({ message: 'Logged in successfully', token: "Bearer " + token });
                      });
                  })
                  .catch(err => res.status(500).json('Error comparing passwords: ' + err));
        })
        .catch(err => res.status(500).json('Server Error: ' + err));
});
""
module.exports = router;
