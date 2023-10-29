const HTTP_STATUS = {
  ok: { code: 200 },
  created: { code: 201 },
  unauthorized: {
    code: 401,
    text: {
      op1: 'There is no token to validate.',
      op2: 'Invalid token format.',
      op3: 'Invalid token.'
    }
  },
  not_found: { code: 404, text: 'Resource not found.' },
  incorrect_pasword: { code: 401, text: 'Incorrect pasword.' },
  internal_server_error: { code: 500, text: 'Internal server error.' }
}

module.exports = HTTP_STATUS
