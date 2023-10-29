const express = require('express')
const router = express.Router()
const users = require('../controllers/users.controller')
const { verifyToken } = require('../middlewares/verification.middleware')

router.get('/usuarios', verifyToken, users.findSingleUserRequest)

router.post('/login', users.authenticationRequest)

router.post('/usuarios', users.saveUserRequest)

module.exports = router
