var $win = $(window);
var $sun = $('.sun');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	/*console.log(scrollPos);  For debugging*/
	$sun.css('transform', 'rotate('  + scrollPos + ' deg)');
});