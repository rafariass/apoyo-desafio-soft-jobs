const daoSQL = require('../models/Users.dao')

const saveUserRequest = (req, res) => {
  daoSQL.saveUserToDB(req.body)
    .then((user) => {
      user.length > 0
        ? res.status(200).json(user)
        : res.status(404).json({ code: '500', message: 'Could not save the user :(' })
    })
    .catch((error) => res.status(500).json(error))
}

module.exports = { saveUserRequest }
