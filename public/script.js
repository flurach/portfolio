const nav = document.querySelector('nav')

const set_go_top = () => {
	const go_top = document.getElementById('go-top')

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 200)
			go_top.style.right = '20px'
		else
			go_top.style.right = '-100%'
	})

	go_top.onclick = () =>
		window.scrollTo(0, 0)
}

const set_nav = () => window.addEventListener('scroll', () => {
	if (window.pageYOffset > 50 && nav.classList.contains('bg') == false)
		nav.classList.add('bg')
	else if (window.pageYOffset < 50 && nav.classList.contains('bg'))
		nav.classList.remove('bg')
})

const set_tooltips = () => document.querySelectorAll('#skills img').forEach(img => img.onmouseover = () => {
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

const set_social_links = () => document.querySelectorAll('footer img').forEach(link => {
	if (link.hasAttribute('href'))
		link.onclick = () =>
			window.location.href = link.getAttribute('href')
})

window.onload = () => {
	set_go_top()
	set_nav()
	set_tooltips()
	set_social_links()
}