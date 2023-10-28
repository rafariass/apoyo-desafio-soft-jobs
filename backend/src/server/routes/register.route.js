const express = require('express')
const router = express.Router()
const register = require('../controllers/register.controller')

router.post('/usuarios', register.saveUserRequest)

module.exports = router
