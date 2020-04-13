// Set contact links
document.querySelectorAll('#links li').forEach(li => {
	li.onclick = () =>
		window.location.href = li.getAttribute('href')
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
let img_displayer = document.getElementById('img-displayer');
let img_displayer_img = img_displayer.getElementsByTagName('img')[0];
let displayable_images = document.querySelectorAll('img.displayable');

displayable_images.forEach(image => {
	image.onclick = () => {
		let url = image.getAttribute('src');
		img_displayer_img.setAttribute('src', url);
		img_displayer.style.left = '0px';
	}
})

img_displayer.onclick = () =>
	img_displayer.style.left = '100%';

// Set project links
document.querySelectorAll('.project h4').forEach(link =>
	link.onclick = () =>
		window.location.href = link.getAttribute('href')
)