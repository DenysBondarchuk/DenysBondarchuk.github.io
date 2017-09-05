$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
  		autoplaySpeed: 2000,
        prevArrow: '<i class="fa fa-chevron-left"></i>',
  		nextArrow: '<i class="fa fa-chevron-right"></i>',
  		responsive: [{
		      breakpoint: 950,
		      settings: {
		        slidesToShow: 2
		      }

		    }, {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 1,
		        arrows: false
		      }
		    }]
    });
});

