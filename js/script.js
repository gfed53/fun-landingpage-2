/*jshint esversion: 6 */

$(function(){

	console.log('hello');

	var $window = $(window);
	var $infoElems = $('.info-inner');
	
	var $navToggle = $('#nav-toggle');
	var $navLinksMobileContainer = $('.nav-links-mobile-container');

	//Carousel Init
	$('.jcarousel').jcarousel({
        // Configuration goes here
        list: '.jcarousel-list',
        items: '.jcarousel-item',
        transitions: true,
        wrap: 'circular',
        center: true,
        // vertical: true
    });

    $('.jcarousel').jcarouselAutoscroll();
    
	function init(){
		//Scroll Animations
		

		$window.on('scroll resize', checkIfInView);

		$window.trigger('scroll');

		

		$('#nav-toggle').on('click', onNavAnimation);

	}

	

	function checkIfInView(){
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($infoElems, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
				console.log('class added to', $element);
			$element.addClass('in-view');
			} else {
				console.log('class removed from', $element);
				$element.removeClass('in-view');
			}
		});
	}

	//Hamburger Nav Icon Animation
	function onNavAnimation(){
		$('#nav-toggle').toggleClass('active');

		if($('.nav-links-mobile-container').hasClass('enter-active')){
			$('.nav-links-mobile-container').removeClass('enter-active');
			setTimeout(()=>{
				$('.nav-links-mobile-container').addClass('leave');
			}, 50);
			setTimeout(()=>{
				$('.nav-links-mobile-container').removeClass('enter').addClass('leave-active');
			}, 250);
			setTimeout(()=> {
				// navContentRemove();
			}, 350);
		} else {
			$('.nav-links-mobile-container').removeClass('leave');
			setTimeout(()=>{
				$('.nav-links-mobile-container').removeClass('leave-active').addClass('enter');
			}, 50);
			setTimeout(()=>{
				$('.nav-links-mobile-container').addClass('enter-active');
			}, 100);
			setTimeout(()=> {
				// navContentFadeIn();
			}, 350);
		}
	}
	
	init();

});