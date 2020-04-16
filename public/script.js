window.onload = function() {
	// Set links
	document.querySelectorAll('.project h4').forEach(el => {
		el.onclick = () =>
			window.open(el.getAttribute('href'), '_blank')
	})

	// Tooltip
	document.querySelectorAll('#skills img').forEach(img => img.onmouseover = () => {
		// set content
		let el = document.createElement('span')
		el.classList.add('tooltip')
		el.innerText = img.getAttribute('alt')

		// set styles
		el.style.padding = '5px 10px'
		el.style.borderRadius = '5px'
		el.style.background = 'black'
		el.style.color = 'white'
		el.style.opacity = '0'

		// position
		const offset = img.getBoundingClientRect()
		el.style.position = 'fixed'
		el.style.top = `${offset.top - 20}px`
		document.body.appendChild(el)
		el.style.left = `${offset.left + img.clientWidth / 2 - el.clientWidth / 2}px`
		setTimeout(() => el.style.opacity = '1', 10)

		// destruct
		img.onmouseout = () => {
			el.style.opacity = '0'
			setTimeout(() => el.parentNode.removeChild(el), 500)
		}
	})
}