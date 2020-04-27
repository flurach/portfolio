const { src, dest, watch, parallel, series } = require('gulp')
const gulpPug = require('gulp-pug')
const gulpSass = require('gulp-sass')
const gulpTerser = require('gulp-terser')
const gls = require('gulp-live-server')
const sync = require('browser-sync').create()


// pug
function pug(cb) {
	src('./public/**/*.pug')
		.pipe(gulpPug())
		.pipe(dest('./dist'))
	cb()
}


// sass
function sass(cb) {
	src('./public/**/*.sass')
		.pipe(gulpSass({ outputStyle: 'compressed' }).on('error', gulpSass.logError))
		.pipe(dest('./dist'))
		.pipe(sync.stream())
	cb()
}


// terser
function terser(cb) {
	src('./public/**/*.js')
		.pipe(gulpTerser({
			toplevel: true,
			warnings: true,
			compress: {
				booleans_as_integers: true,
				drop_console: true,
				keep_fargs: false,
				passes: 2
			}
		}))
		.pipe(dest('./dist'))
	cb()
}



// server
function server(cb) {
	gls.static('./dist', process.env.PORT || 3000).start()
	cb()
}



// watch
exports.watch = cb => {
	sync.init({ server: ['./dist', './public'] })

	watch('./public/**/*.pug', { ignoreInitial: false }, pug)
		.on('change', sync.reload)
	watch('./public/**/*.sass', { ignoreInitial: false }, sass)
	watch('./public/**/*.js', { ignoreInitial: false}, terser)
		.on('change', sync.reload)
}


// start script
exports.start = series(parallel(pug, sass, terser), server)