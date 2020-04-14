// Set links
document.querySelectorAll('#links li, .project h4').forEach(el => {
	el.onclick = () =>
		window.open(el.getAttribute('href'), '_blank')
})

// Set nav a#contact
let rotateAngle = 0
document.querySelector('a[href="#header"]').onclick = function() {
	window.scrollTo(0, 0)
	const links = document.querySelector('#links')

	rotateAngle += 360;
	links.style.filter = `rotateZ(${rotateAngle}deg)`
	setTimeout(
		() => links.style.transform = `rotateZ(${rotateAngle}deg)`,
		250
	)
}

// Set image displayer
document.querySelectorAll('img.displayable').forEach(image =>
	image.onclick = () =>
		window.open(image.getAttribute('src'), '_blank')
)