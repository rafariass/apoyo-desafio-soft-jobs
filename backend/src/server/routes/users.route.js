const express = require('express')
const router = express.Router()
const users = require('../controllers/users.controller')
const { verifyToken } = require('../middlewares/verification.middleware')
const { activityReport } = require('../middlewares/activityReport.middleware')

router.get('/usuarios', verifyToken, activityReport, users.findSingleUserRequest)

router.post('/login', activityReport, users.authenticationRequest)

router.post('/usuarios', activityReport, users.saveUserRequest)

module.exports = router
