const HTTP_STATUS = require('../../config/constants')
const sqlRequest = require('../models/Users.dao')
const { jwtSign } = require('../../utils/jwt')

const login = (req, res) => {
  sqlRequest.verifyCredentials(req.body.email, req.body.password)
    .then((user) => {
      user.length > 0
        ? res.status(200).json({ token: jwtSign({ email: req.body.email }) })
        : res.status(404).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
    })
    .catch((error) => res.status(500).json(error))
}

module.exports = { login }
