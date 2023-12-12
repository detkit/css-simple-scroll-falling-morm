function loves() {
	let e = document.createElement('div');
	e.setAttribute('class', 'love');
	document.body.appendChild(e);
	e.style.left = Math.random() * +innerWidth + 'px';

	const size = Math.random() * 12;
	const duration = Math.random() * 3;

	e.style.fontSize = 12 + size + 'px';
	e.style.animationDuration = 2 + duration + 's';

	setTimeout(function () {
		document.body.removeChild(e);
	}, 5000);
}

setInterval(function () {
	loves();
}, 100);
