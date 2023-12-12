const boxs = document.querySelectorAll('.box');

boxs.forEach((box) => {
	box.onmousemove = function (e) {
		let x = e.pageX - box.offsetLeft;
		let y = e.pageY - box.offsetTop;

		box.style.setProperty('--x', x + 'px');
		box.style.setProperty('--y', y + 'px');
	};
});
