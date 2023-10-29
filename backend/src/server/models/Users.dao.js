const { execQuery } = require('../databases/execQuery')
const bcrypt = require('bcryptjs')
const { HASHSALTSYNC } = require('../../config/constants')

const findSingleUserFromDB = async (email) => await execQuery('SELECT * FROM usuarios WHERE email = $1;', [email])

const saveUserToDB = async ({ email, password, rol, lenguage }) => {
  const encryptPass = await generateHash(password)
  const query = 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *;'
  const values = [email, encryptPass, rol, lenguage]
  return await execQuery(query, values)
}

const passCompare = async (email, password) => {
  const encrypt = await findSingleUserFromDB(email)
  if (encrypt.length < 1) return []
  const isCorrect = bcrypt.compareSync(password, encrypt[0].password)
  return isCorrect
}

const generateHash = async (password) => await bcrypt.hashSync(password, HASHSALTSYNC, null)

module.exports = {
  findSingleUserFromDB,
  saveUserToDB,
  passCompare
}
