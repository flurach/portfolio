const path = require('path')
const sass = require('dart-sass')
const mime = require('mime')


module.exports = async (req, res, next) => {
	const file = path.resolve('public') + req.originalUrl

	if (file.endsWith('.sass')) {
		await res.setHeader('Content-Type', 'text/css')
		return res.send(sass.renderSync({
			file: file,
			outputStyle: 'compressed'
		}).css.toString())
	}

	next()
}