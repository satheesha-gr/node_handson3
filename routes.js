// routes.js
const express = require('express');
const router = express.Router();
const allRoutesMiddleware = require('./Middleware/auth');
const specificRoutesMiddleware = require('./Middleware/auth');

router.use(allRoutesMiddleware);

router.get('/login', specificRoutesMiddleware, (req, res) => {
    res.send({
    msg: "Login API"
  })
});

router.post('/register', specificRoutesMiddleware, (req, res) => {
  res.send({
    msg: "Register API"
  })
});

router.get('/aboutus', (req, res) => {
    res.send({
        msg: "AboutUs API"
    })
});

router.get('/contactus', (req, res) => {
  res.send({
    msg: "Contact Us API"
  }
  )
});

module.exports = router;
