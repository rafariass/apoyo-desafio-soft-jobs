const daoSQL = require('../models/Login.dao')
const { jwtSign } = require('../../utils/jwt')
const HTTP_STATUS = require('../../config/constants')

const authentication = (req, res) => {
  daoSQL.verifyCredentials(req.body.email, req.body.password)
    .then((user) => {
      user.length > 0
        ? res.status(HTTP_STATUS.ok.code).json({ token: jwtSign({ email: req.body.email }) })
        : res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
    })
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}

module.exports = { authentication }
