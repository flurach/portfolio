# Create the output directory
mkdir -p build

# Minify JS
terser --compress --mangle --toplevel src/script.js > build/script.js

# Minift CSS
cleancss src/styles.css > build/styles.css

# Minify HTML
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags \
	--remove-redundant-attributes --remove-script-type-attributes \
	--remove-tag-whitespace --use-short-doctype \
	--minify-css true --minify-js true \
	src/index.html > build/index.html

# Print 'are we cool yet?'
echo "Are we cool yet?"