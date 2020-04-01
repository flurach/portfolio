// Setup image displayer
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