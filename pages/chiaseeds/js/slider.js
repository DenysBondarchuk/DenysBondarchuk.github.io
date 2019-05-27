$(document).ready(function(){
  $('.review__slider').slick({
    slidesToShow: 4,
    dots: false,
    arrows: false,
    // centerMode: true,
    // centerPadding: '0px',
    // infinite: false,
     responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        // centerPadding: '0px',
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    }
    ]
  });
});