
$(document).ready(function() {
  $('.menu_trigger').click(function() {
    $('nav ul').slideToggle(630);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 630 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready