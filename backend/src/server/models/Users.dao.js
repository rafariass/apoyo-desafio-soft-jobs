const { execQuery } = require('../databases/execQuery')
const bcrypt = require('bcryptjs')

const findUsers = async () => await execQuery('SELECT * FROM usuarios;')

const findSingleUserFromDB = async (email) => await execQuery('SELECT * FROM usuarios WHERE email = $1;', [email])

const saveUserToDB = async ({ email, password, rol, lenguage }) => {
  const encryptPass = bcrypt.hashSync(password)
  const query = 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *;'
  const values = [email, encryptPass, rol, lenguage]
  return await execQuery(query, values)
}

module.exports = {
  findUsers,
  findSingleUserFromDB,
  saveUserToDB
}
