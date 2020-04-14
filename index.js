const compression = require('compression')
const express = require('express')
const app = express()


// plugins
app.use(compression())


// middlewares
app.use(require('./src/pug-middleware.js'))
app.use(require('./src/sass-middleware.js'))
app.use(require('./src/terser-middleware.js'))


// static fiels
app.use(express.static('public'))


// '/' route
app.use('/', (req, res) => res.redirect('/index.pug'))


// listen
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`))