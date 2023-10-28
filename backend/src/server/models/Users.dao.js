const { execQuery } = require('../databases/execQuery')

const findUsers = async () => await execQuery('SELECT * FROM usuarios;')

const findSingleUser = async (email) => await execQuery('SELECT * FROM usuarios WHERE email = $1;', [email])

const saveUserRequest = async ({ email, password, rol, lenguage }) => {
  const query = 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *;'
  const values = [email, password, rol, lenguage]
  return await execQuery(query, values)
}

module.exports = {
  findUsers,
  findSingleUser,
  saveUserRequest
}
