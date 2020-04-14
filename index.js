const pug = require('pug')
const express = require('express')
const app = express()


// plugins
if (process.env.NODE_ENV == 'production') {
	app.use(require('compression'))
	app.use(require('express-http-to-https').redirectToHTTPS())
}


// middlewares
app.use(require('./src/404-middleware.js'))
app.use(require('./src/pug-middleware.js'))
app.use(require('./src/sass-middleware.js'))
app.use(require('./src/terser-middleware.js'))


// static fiels
app.use(express.static('public'))


// '/' route
app.get('/', (req, res) =>
	res.send(pug.renderFile('public/index.pug'))
)


// listen
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`))