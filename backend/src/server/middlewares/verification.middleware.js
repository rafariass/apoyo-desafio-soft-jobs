const { jwtVerify } = require('../../utils/jwt')

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    return res.status(401).json({
      code: 401,
      message: 'There is no token to validate'
    })
  }

  const [bearer, token] = authorizationHeader.split(' ')

  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({
      code: 401,
      message: 'Invalid format token'
    })
  }

  try {
    jwtVerify(token) && next()
  } catch (error) {
    return res.status(401).json({
      code: 401,
      message: 'Invalid token'
    })
  }
}

module.exports = { verifyToken }
