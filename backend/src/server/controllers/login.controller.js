const daoSQL = require('../models/Login.dao')
const { jwtSign } = require('../../utils/jwt')

const authentication = (req, res) => {
  daoSQL.verifyCredentials(req.body.email, req.body.password)
    .then((user) => {
      user.length > 0
        ? res.status(200).json({ token: jwtSign({ email: req.body.email }) })
        : res.status(404).json({ code: '404', message: 'User not found :(' })
    })
    .catch((error) => res.status(500).json(error))
}

module.exports = { authentication }
