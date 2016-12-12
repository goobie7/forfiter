(function() {


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