// Set links
document.querySelectorAll('#links li, .project h4').forEach(el => {
	el.onclick = () =>
		window.open(el.getAttribute('href'), '_blank')
})

// Set displayables
document.querySelectorAll('img.displayable').forEach(image =>
	image.onclick = () =>
		window.open(image.getAttribute('src'), '_blank')
)