const express = require('express')
const pug_middleware = require('./src/pug-middleware.js')
const app = express()


// middlwares
app.use(pug_middleware)


// static fiels
app.use(express.static('public'))


// '/' route
app.use('/', (req, res) => res.redirect('/index.pug'))


// listen
const PORT = 8000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`))