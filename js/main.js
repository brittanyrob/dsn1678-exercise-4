var $win = $(window);

$win.on('scroll', function () {
	var scrollPS = $win.scrollTop();
	
	console.log('Scrolling!');
});