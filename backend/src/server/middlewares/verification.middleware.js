const { jwtVerify } = require('../../utils/jwt')
const HTTP_STATUS = require('../../config/constants')

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    return res.status(HTTP_STATUS.unauthorized.code).json({
      code: HTTP_STATUS.unauthorized.code,
      message: HTTP_STATUS.unauthorized.text.op1
    })
  }

  const [bearer, token] = authorizationHeader.split(' ')

  if (bearer !== 'Bearer' || !token) {
    return res.status(HTTP_STATUS.unauthorized.code).json({
      code: HTTP_STATUS.unauthorized.code,
      message: HTTP_STATUS.unauthorized.text.op2
    })
  }

  try {
    jwtVerify(token) && next()
  } catch (error) {
    return res.status(HTTP_STATUS.unauthorized.code).json({
      code: HTTP_STATUS.unauthorized.code,
      message: HTTP_STATUS.unauthorized.text.op3
    })
  }
}

module.exports = { verifyToken }
