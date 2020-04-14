const fs = require('fs')
const path = require('path')


module.exports = (req, res, next) => {
	const file = path.resolve('public') + req.originalUrl

	if (fs.existsSync(file) == false)
		return res.send('404')

	next()
}