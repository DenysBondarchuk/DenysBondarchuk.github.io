 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: false,
  arrows: true,
  touchMove: false,
  infinite: true,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: true
      }
    }
    ]
});

$('.slider-nav').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        arrows: false
      }
    }
    ]
});
