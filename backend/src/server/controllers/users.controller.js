const daoSQL = require('../models/Users.dao')
const { jwtSign, jwtVerify } = require('../../utils/jwt')
const HTTP_STATUS = require('../../config/constants')

const findSingleUserRequest = (req, res) => {
  const decoded = jwtVerify(req
    .headers
    .authorization
    .split(' ')
    .slice(1)[0]
  )
  daoSQL.findSingleUserFromDB(decoded.email)
    .then((user) => {
      user.length > 0
        ? res.status(HTTP_STATUS.ok.code).json(user)
        : res
          .status(HTTP_STATUS.not_found.code)
          .json(
            {
              code: HTTP_STATUS.not_found.code,
              message: HTTP_STATUS.not_found.text
            }
          )
    })
    .catch((error) => res.status(500).json(error))
}

const authenticationRequest = (req, res) => {
  daoSQL.verifyCredentials(req.body.email, req.body.password)
    .then((user) => {
      user.length > 0
        ? res
          .status(HTTP_STATUS.ok.code)
          .json({ token: jwtSign({ email: req.body.email }) })
        : res
          .status(HTTP_STATUS.not_found.code)
          .json(
            {
              code: HTTP_STATUS.not_found.code,
              message: HTTP_STATUS.not_found.text
            }
          )
    })
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}

const saveUserRequest = (req, res) => {
  daoSQL.saveUserToDB(req.body)
    .then((user) => {
      user.length > 0
        ? res.status(HTTP_STATUS.ok.code).json(user)
        : res
          .status(HTTP_STATUS.internal_server_error.code)
          .json(
            {
              code: HTTP_STATUS.internal_server_error.code,
              message: HTTP_STATUS.internal_server_error.text
            }
          )
    })
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}

module.exports = {
  findSingleUserRequest,
  authenticationRequest,
  saveUserRequest
}
