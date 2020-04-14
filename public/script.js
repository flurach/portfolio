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

// Set nav btn
document.querySelector('nav a:last-child').onclick = () => {
	window.scrollTo(0, 0)

	const links = document.getElementById('links')
	links.style.scale = '1.2'
	setTimeout(() => links.style.scale = '1', 250)
}