/*jshint esversion: 6 */

$(function(){

	console.log('hello');

	var $window = $(window);
	var $infoElems = $('.info-inner');

	var threshold = 200;
	var scrollTimer;
	//Cached heights/widths
	// var window_height;
	// var window_top_position;
	// var window_bottom_position;
	// var $element;
	// var element_height;
	// var element_top_position;
	// var element_bottom_position;
	// setValues();

	
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
		// $window.on('scroll resize', _.throttle(checkers, threshold));
		// $window.trigger('scroll resize');

		AOS.init({
			duration: 500,
		});

		

		$('#nav-toggle').on('click', onNavAnimation);

	}

	function checkers(){
		// checkIfInView();
		navLinksCheck();

	}

	// function bindScroll(){
	// 	$window.on('scroll resize', function(){

	// 		setScrollTimer();
	// 		checkIfInView();
			
	// 	});
	// }

	// function setScrollTimer(){
	// 	unbindScroll();
	// 	scrollTimer = window.setTimeout(function(){
	// 		bindScroll();
	// 	}, threshold);

	// }

	// function unbindScroll(){
	// 	$window.unbind('scroll');
	// }

	
	// function setValues(){
	// 	window_height = $window.height();
	// 	console.log('window_height:',window_height);
	// 	window_top_position = $window.scrollTop();
	// 	console.log('window_top_position:',window_top_position);
	// 	window_bottom_position = (window_top_position + window_height);
	// 	$.each($infoElems, function() {
	// 		$element = $(this);
	// 		element_height = $element.outerHeight();
	// 		element_top_position = $element.offset().top;
	// 		element_bottom_position = (element_top_position + element_height);
	// 	});

	// }

	// function checkIfInView(){
	// 	// console.log('its running');
	// 	var window_height = $window.height();
	// 	var window_top_position = $window.scrollTop();
	// 	var window_bottom_position = (window_top_position + window_height);
	// 	// console.log('window_height:',window_height);
	// 	console.log('window_top_position:',window_top_position);
	// 	// console.log('window_bottom_position:',window_bottom_position);
		

	// 	$.each($infoElems, function() {
	// 		var $element = $(this);
	// 		var element_height = $element.outerHeight();
	// 		var element_top_position = $element.offset().top;
	// 		var element_bottom_position = (element_top_position + element_height);
	// 		// console.log('$element:',$element);
	// 		// console.log('element_height:',element_height);
	// 		// console.log('element_top_position:',element_top_position);
	// 		// console.log('element_bottom_position:',element_bottom_position);

	// 		//check to see if this current container is within viewport
	// 		if ((element_bottom_position >= window_top_position) &&
	// 		(element_top_position <= window_bottom_position)) {
	// 			// console.log('class added to', $element);
	// 		$element.addClass('in-view');
	// 		// $element.velocity({opacity: 1}, {duration: 750});
	// 		} 
	// 		else {
	// 			// console.log('class removed from', $element);
	// 			$element.removeClass('in-view');
	// 			// $element.velocity({opacity: 0}, {duration: 750});
	// 		}
	// 	});
	// }

	function navLinksCheck(){
		var $element = $('.my-social-navbar-vert');
		console.log( $window.scrollTop());
		if($window.scrollTop() > 800){
			console.log('it should show now');
			$element.css('visibility', 'visible');
		} else {
			$element.css('visibility', 'hidden');
		}
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