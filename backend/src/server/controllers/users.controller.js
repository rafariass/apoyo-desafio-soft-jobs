const daoSQL = require('../models/Users.dao')
const { jwtVerify } = require('../../utils/jwt')

const findUsers = (req, res) => {
  daoSQL.findUsers()
    .then((user) => {
      user.length > 0
        ? res.status(200).json(user)
        : res.status(404).json({ code: '404', message: 'findUsers: user not found :(' })
    })
    .catch((error) => res.status(500).json(error))
}

const findSingleUser = (req, res) => {
  const decoded = jwtVerify(req
    .headers
    .authorization
    .split(' ')
    .slice(1)[0]
  )

  daoSQL.findSingleUser(decoded.email)
    .then((user) => {
      user.length > 0
        ? res.status(200).json(user)
        : res.status(404).json({ code: '404', message: 'findSingleUser: user not found :(' })
    })
    .catch((error) => res.status(500).json(error))
}

module.exports = {
  findUsers,
  findSingleUser
}
