/*jshint esversion: 6 */

$(function(){

	var $window = $(window);
	
	var $navToggle = $('#nav-toggle');
	var $navLinksMobileContainer = $('.nav-links-mobile-container');
	

    
    function init(){

    	//Carousel Init

		$('.jcarousel').jcarousel({
	        // Configuration goes here
	        list: '.jcarousel-list',
	        items: '.jcarousel-item',
	        transitions: true,
	        wrap: 'circular',
	        center: true,
	    });
	    $('.jcarousel').jcarouselAutoscroll();


		//Scroll Animations

		AOS.init({
			duration: 500,
		});


		//Nav Animations

		$navToggle.on('click', onNavAnimation);
	}

	//Hamburger Nav Icon Animation

	function onNavAnimation(){
		$navToggle.toggleClass('active');

		if($navLinksMobileContainer.hasClass('enter-active')){
			$navLinksMobileContainer.removeClass('enter-active');
			setTimeout(()=>{
				$navLinksMobileContainer.addClass('leave');
			}, 50);
			setTimeout(()=>{
				$navLinksMobileContainer.removeClass('enter').addClass('leave-active');
			}, 250);
		} else {
			$navLinksMobileContainer.removeClass('leave');
			setTimeout(()=>{
				$navLinksMobileContainer.removeClass('leave-active').addClass('enter');
			}, 50);
			setTimeout(()=>{
				$navLinksMobileContainer.addClass('enter-active');
			}, 100);
		}
	}


	init();


});