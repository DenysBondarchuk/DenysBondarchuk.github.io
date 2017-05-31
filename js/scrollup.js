                                                             /*SCROLLUP BUTTON*/
jQuery( document ).ready(function() {
	jQuery('#scrollup img').mouseover( function(){
		jQuery( this ).animate({opacity: 1},100);
	}).mouseout( function(){
		jQuery( this ).animate({opacity: 0.6},100);
	}).click( function(){
		$('body,html').animate({scrollTop:0},700);
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('#scrollup').fadeIn('slow');
		} else {
			jQuery('#scrollup').fadeOut('slow');
		}
	});
});