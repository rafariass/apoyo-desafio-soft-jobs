const HTTP_STATUS = {
  ok: { code: 200 },
  created: { code: 201 },
  not_found: { code: 404, text: 'Resource not found.' },
  internal_server_error: { code: 500, text: 'Internal server error.' }
}

module.exports = HTTP_STATUS
