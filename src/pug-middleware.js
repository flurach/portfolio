const path = require('path')
const pug = require('pug')


module.exports = (req, res, next) => {
	const file = path.resolve('public') + req.originalUrl

	if (file.endsWith('.pug'))
		return res.send(pug.renderFile(file))

	next()
}