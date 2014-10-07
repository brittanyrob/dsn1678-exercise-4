var $win = $(window);
var $sun = $('.sun');
var $sunSection =$('.sun-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	/*console.log(scrollPos);  For debugging*/
	$sun.css('transform', 'rotate('  + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});