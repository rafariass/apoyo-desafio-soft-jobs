const { execQuery } = require('../databases/execQuery')

const verifyCredentials = async (email, password) => await execQuery('SELECT * FROM usuarios WHERE email = $1 and password = $2;', [email, password])

module.exports = { verifyCredentials }
