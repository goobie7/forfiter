(function() {

	const map = $("#map");

	// map.css({
	// 	"background": "red",
	// 	"opacity": 0.6,
	// 	"height": "100%",
	// 	"width": "100%"
	// });

	let $menuBtn = $('.toggle_menu'),
		$closeMenuBtn = $('.close_menu'),
		$mainNav = $('.main_nav');

	$menuBtn.on('click', function(){
		$mainNav.toggleClass('open');
	});

	$closeMenuBtn.on('click', function() {
		$mainNav.toggleClass('open');
	});
})();