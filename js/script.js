/*jshint esversion: 6 */

$(function(){

	console.log('hello');
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
	}
	//

});