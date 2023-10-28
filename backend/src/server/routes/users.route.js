const express = require('express')
const router = express.Router()
const users = require('../controllers/users.controller')
const { verifyToken } = require('../middlewares/verification.middleware')

router.get('/usuarios', verifyToken, users.findUsers)
router.get('/usuarios', verifyToken, users.findSingleUser)

module.exports = router
