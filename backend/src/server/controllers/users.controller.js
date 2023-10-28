const daoSQL = require('../models/Users.dao')
const { jwtVerify } = require('../../utils/jwt')

const findUsers = (_, res) => {
  daoSQL.findUsers()
    .then((user) => {
      user.length > 0
        ? res.status(200).json(user)
        : res.status(404).json({ code: '404', message: 'findUsers: user not found :(' })
    })
    .catch((error) => res.status(500).json(error))
}

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
        ? res.status(200).json(user)
        : res.status(404).json({ code: '404', message: 'findSingleUserRequest: user not found :(' })
    })
    .catch((error) => res.status(500).json(error))
}

module.exports = {
  findUsers,
  findSingleUserRequest
}
