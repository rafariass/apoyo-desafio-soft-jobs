const { execQuery } = require('../databases/execQuery')

console.log('\n\n -> models/users.dao \n next: verifyCredentials <-\n\n\n')
const verifyCredentials = async (email, password) => await execQuery('SELECT * FROM usuarios WHERE email = $1 and password = $2;', [email, password])
const resBD = verifyCredentials
console.log('Login.dao/resBD response->', resBD)
module.exports = { verifyCredentials }
