const { src, dest, watch, parallel } = require('gulp')
const gulpPug = require('gulp-pug')
const gulpSass = require('gulp-sass')
const gulpTerser = require('gulp-terser')
const sync = require('browser-sync').create()
const gulpWait = require('gulp-wait')


// pug
async function pug(done) {
	src('./public/**/*.pug')
		.pipe(gulpWait(1000))
		.pipe(gulpPug())
		.pipe(dest('./dist'))
	done()
}


// sass
async function sass(done) {
	src('./public/**/*.sass')
		.pipe(gulpSass({
			outputStyle: 'compressed',
		}).on('error', gulpSass.logError))
		.pipe(dest('./dist'))
		.pipe(sync.stream())
	done()
}


// terser
async function terser(done) {
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
	done()
}


// watch
exports.watch = () => {
	sync.init({ server: ['./dist', './public'] })

	watch('./public/**/*.pug', { ignoreInitial: false }, pug)
		.on('change', sync.reload)
	watch('./public/**/*.sass', { ignoreInitial: false }, sass)
	watch('./public/**/*.js', { ignoreInitial: false}, terser)
		.on('change', sync.reload)
}


// compile
exports.compile = parallel(pug, sass, terser)