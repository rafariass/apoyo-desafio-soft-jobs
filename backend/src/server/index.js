require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use(routes.login)
app.use(routes.users)
app.use(routes.register)
// app.use(routes.errors)

app.all('*', (_, res) => res.status(404).json({ code: 404, message: '\'Page Not Found from backend :(\'' }))

app.listen(PORT, () => console.log(`Server started at: http://localhost:${PORT}`))

module.exports = app
