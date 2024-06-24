const router = require('express').Router();
const path = require('path');

const login = require('./login');
const register = require('./register');

router.post('/login', login);

router.post('/register', register);

module.exports = router;