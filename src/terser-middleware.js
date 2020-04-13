const fs = require('fs')
const path = require('path')
const terser = require('terser')


module.exports = (req, res, next) => {
	const file = path.resolve('public') + req.originalUrl

	if (file.endsWith('.js')) {
		const js = fs.readFileSync(file).toString()
		const result = terser.minify(js, {
			toplevel: true,
			warnings: true,
			compress: {
				booleans_as_integers: true,
				drop_console: true,
				keep_fargs: false,
				passes: 2
			}
		})
		const code = result.code

		if (result.error)
			console.error(result.error)
		if (result.warnings)
			console.warn(result.warnings)

		return res.send(code)
	}

	next()
}