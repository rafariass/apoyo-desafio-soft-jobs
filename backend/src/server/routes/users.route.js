const express = require('express')
const router = express.Router()
const users = require('../controllers/users.controller')
const { verifyToken } = require('../middlewares/verification.middleware')

router.get('/usuarios', verifyToken, users.findSingleUserRequest)

module.exports = router
