const fs = require('fs')
const path = require('path')
const pug = require('pug')
const sass = require('dart-sass')
const express = require('express')
const app = express()


// watch critical.css
const critical_sass = path.resolve('public/styles/critical.sass')
const critical_css = path.resolve('public/styles/critical.css')

const compile_critical = () => fs.writeFileSync(critical_css, sass.renderSync({
	file: critical_sass,
	outputStyle: 'compressed'
}).css.toString())

compile_critical()
if (process.env.NODE_ENV != 'production')
	fs.watchFile(critical_sass, { interval: 1000 }, compile_critical)


// plugins
if (process.env.NODE_ENV == 'production') {
	app.use(require('compression')())
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
	res.send(pug.renderFile(
		'public/index.pug',
		{ critical_css: fs.readFileSync(critical_css) }
	))
)


// listen
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`))