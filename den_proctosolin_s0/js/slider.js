$(document).ready(function(){
  $('.slider_3d').slick({
  	slidesToShow: 3,
  	dots: true,
  	centerMode: true,
    infinite: false,
    touchMove: false,
    initialSlide: 1,
  	centerPadding: '100px',
     responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
        // infinite: true
      }
    }
    ]
  });
});






 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: false,
  touchMove: false,
  infinite: false,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
});
$('.slider-nav').slick({
  infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.slider-for',
    dots: false,
    touchMove: false,
    infinite: false,
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      }
    }
    ]
});
