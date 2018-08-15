	// REVIEW
	$('.review__btn').click(function(){
		if ($(this).prev().hasClass('active')) {
			$(this).prev().removeClass('active');
			$(this).parent().find('.review__crown').removeClass('active__crown');
			$(this).parent().find('.review__img').removeClass('review__img-active');
			$(this).find('.arrow__lines').removeClass('block__op');
		}
		else {
			if ($('.review__text__wrap').hasClass('active')) {
					$('.review__text__wrap').removeClass('active');
					$('.review__crown').removeClass('active__crown');
					$('.review__img').removeClass('review__img-active');
					$('.arrow__lines').removeClass('block__op');
			}
			$(this).prev().addClass('active');
			$(this).parent().find('.review__crown').addClass('active__crown');
			$(this).parent().find('.review__img').addClass('review__img-active');
			$(this).find('.arrow__lines').addClass('block__op');
		}
});

// ANCHOR
$(".header__expression").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});


// PARALLAX
function parallax() {
		//king recipe 
    var scene1 = document.getElementById('scene1');
    var scene2 = document.getElementById('scene2');
    var scene3 = document.getElementById('scene3');
    var parallax = new Parallax(scene1);
    var parallax = new Parallax(scene2);
    var parallax = new Parallax(scene3);
    // map
    // var scene4 = document.getElementById('scene4');
    // var parallax = new Parallax(scene4);
 }
 parallax();

// TIMER
// додати клас count для тегу, де повинна відбуватися анімація
// додати data-name="необхідне відсоткове значення" для тегу, де повинна відбуватися анімація

$(document).ready(function(){
	$('.count').text(0);
   var show = true;
	 var countbox = ".section3";											// назва блоку з лічильником
	 $(window).on("scroll", function(){
	  if(!show) return false;                   			// Відміна анімації, якщо вона уже була виконана
	  var w_top = $(window).scrollTop();        			// Кількість пікселів на яку прокручена сторінка
	  var e_top = $(countbox).offset().top - 300;       // Відстань від блоку з лічильника до верху всього документу
	  var w_height = $(window).height();        			// Висота вікна браузера
	  var d_height = $(document).height();      			// Висота всього документа
	  var e_height = $(countbox).outerHeight(); 			// Повна висока блоку з лічильником
	  if(w_top >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
	   $('.count').each(function(){
	    $(this).animate({
	     count: $(this).data("name")
	    }, {
	     duration: 2500,  														//час анімації
	     easing: 'swing',
	     step:function(now){
	      $(this).text(Math.ceil(now));
	     }
	    });
	   });

	   show = false;
	  }
	 });
});

// GSAP ANIMATION
// header start
var line_green = $('.header').height();

let tl1 = new TimelineMax();
tl1
	.fromTo('.header__line', 1.2, {height:0, opacity:0}, {height:line_green + 20, opacity:1})
	.fromTo('.header__form-anim', 1, {opacity:0}, {opacity:1})
	.fromTo('.form__rhomb', 1, {rotation: 20, opacity:0}, {rotation: 0, opacity: 1},'=-1');

let tl2 = new TimelineMax();
tl2
	.fromTo('.header__name', 1, {opacity:0, x:-100}, {opacity:1, x:0})
	.fromTo('.header__title', 1, {opacity:0, x:-100}, {opacity:1, x:0}, '=-1')
	.fromTo('.header__undertitle', 1, {opacity:0, x:-100}, {opacity:1, x:0}, '=-1')
	.staggerFromTo('.header__list .header__list__item', 1, {opacity:0, x:-200}, {opacity:1, x:0}, 0.1, '=-1')
	.fromTo('.header__expression__wrap', 1, {opacity:0, x:200}, {opacity:1, x:0}, 0.05, '=-1');

let tl3 = new TimelineMax();
tl3
	.fromTo('.prod_name_svg1-header', 2.5, {strokeDashoffset:-670},{strokeDashoffset:0})
	.fromTo('.prod_name_svg2-header', 1, {strokeDashoffset:70},{strokeDashoffset:0},"=-1.5")
	.fromTo('.prod_name_svg1-header', 1, {fill:"rgba(107,186,84,0)"},{fill:"rgba(107,186,84,1)"},"=-0.5");

// header end

var controller = new ScrollMagic.Controller();

// section2 start

var tween2 = new TimelineMax();
tween2
	.fromTo('.section2', 1, {opacity:0}, {opacity:1})
	.fromTo('.properties__rhomb-back', 2, {rotation: 0}, {rotation: 90}, '=-1') 
	.staggerFromTo('.properties__left .properties__item', 1, {opacity:0, x:-100}, {opacity:1, x:0}, 0.1, '=-1.5')
	.staggerFromTo('.properties__right .properties__item', 1, {opacity:0, x:100}, {opacity:1, x:0}, 0.1, '=-1.5');
var scene2 = new ScrollMagic.Scene({
  triggerElement: ".section2",
  reverse: false  
})
	// .addIndicators()
	.setTween(tween2)
	.addTo(controller);

// section2 end

// section3 start

var tween3 = new TimelineMax();
tween3
	.fromTo('.section3', 1, {opacity:0}, {opacity:1})
	.fromTo('.green__circle', 1, {scale:0}, {scale:1},'=-1')
	.fromTo('.yellow__circle', 1, {scale:0}, {scale:1},'=-1')
	.fromTo('.yellow__descr', 1, {x:-100}, {x:0},'=-1')
	.fromTo('.green__descr', 1, {x:-100}, {x:0},'=-1');
var scene3 = new ScrollMagic.Scene({
	triggerElement: ".section3",
	reverse: false  
})
	// .addIndicators()
	.setTween(tween3)
	.addTo(controller);

// section3 end

// section4 start

var tween4= new TimelineMax();
tween4
	.fromTo('.section4', 1, {opacity:0}, {opacity:1})
	.fromTo('.title-know', 1, {opacity:0, y:-30}, {opacity:1, y:0}, '=-1')
	.fromTo('.makeup__mid', 1, {opacity:0, y:100, rotation:10}, {opacity:1, y:0, rotation:0}, '=-1')
	.fromTo('.makeup__right', 1, {opacity:0, y:100, rotation:10}, {opacity:1, y:0, rotation:0}, '=-1');
var scene4 = new ScrollMagic.Scene({
	triggerElement: ".section4",
	reverse: false  
})
	// .addIndicators()
	.setTween(tween4)
	.addTo(controller);

// section4 end

// section5 start

var tween5= new TimelineMax();
tween5
	.fromTo('.section5', 1, {opacity:0}, {opacity:1})
	.fromTo('.paraguay__title', 1, {opacity:0, y:-50}, {opacity:1, y:0}, '=-1')
	.fromTo('.paraguya__map', 1, {opacity:0, scale:0}, {opacity:1, scale:1}, '=-1')
	.fromTo('.paraguay__prod', 1, {opacity:0, x:100}, {opacity:1, x:0}, '=-1');
var scene5 = new ScrollMagic.Scene({
	triggerElement: ".section5",
	reverse: false  
})
	// .addIndicators()
	.setTween(tween5)
	.addTo(controller);

// section5 end

// section6 start

var tween6= new TimelineMax();
tween6
	.fromTo('.section6', 1, {opacity:0}, {opacity:1})
	.fromTo('.expert__top__left', 1, {opacity:0, y:75}, {opacity:1, y:0}, '=-0.8')
	.fromTo('.expert__top__right', 1, {opacity:0, y:75}, {opacity:1, y:0}, '=-0.8')
	.fromTo('.expert__about', 1, {opacity:0, x:-75}, {opacity:1, x:0}, '=-0.5')
	.fromTo('.expert__descr', 1, {opacity:0, x:-75}, {opacity:1, x:0}, '=-0.7');
var scene6 = new ScrollMagic.Scene({
	triggerElement: ".section6",
	reverse: false  
})
	// .addIndicators()
	.setTween(tween6)
	.addTo(controller);

// section6 end

// section7 start

var tween7= new TimelineMax();
tween7
	.fromTo('.section7', 1, {opacity:0}, {opacity:1})
	.fromTo('.title-media', 1, {opacity:0, y: 40}, {opacity:1, y: 0},'=-1')
	.fromTo('.media__first', 1, {opacity:0, x:70}, {opacity:1, x:0}, '=-0.5')
	.fromTo('.media__second', 1, {opacity:0, x:-70}, {opacity:1, x:0}, '=-1');
var scene7 = new ScrollMagic.Scene({
	triggerElement: ".section7",
	reverse: false  
})
	.setTween(tween7)
	.addTo(controller);

// section7 end

// section8 start

var tween8= new TimelineMax();
tween8
	.fromTo('.section8', 1, {opacity:0}, {opacity:1})
	.staggerFromTo('.recipe__item', 1, {opacity:0, y: -100}, {opacity:1, y: 0}, 0.1, '=-0.5')
	.staggerFromTo('.recipe__number', 1, {opacity:0, x: -50}, {opacity:1, x: 0}, 0.1, '=-1');
var scene8 = new ScrollMagic.Scene({
	triggerElement: ".section8",
	reverse: false  
})
	// .addIndicators()
	.setTween(tween8)
	.addTo(controller);

// section8 end

// section9 start

var tween8= new TimelineMax();
tween8
	.fromTo('.section9', 1, {opacity:0}, {opacity:1})
	.fromTo('.title__king', 1, {opacity:0, x:-50, y:-50}, {opacity:1, x:0, y:0}, '=-0.8')
	.fromTo('.king__under', 1, {opacity:0, x:-50, y:-50}, {opacity:1, x:0, y:0}, '=-0.7')
	.fromTo('.king__left', 1, {opacity:0, x:-50, y:50}, {opacity:1, x:0, y:0}, '=-1')
	.fromTo('.king__right', 1, {opacity:0, x:50, y:50}, {opacity:1, x:0, y:0}, '=-1');
var scene8 = new ScrollMagic.Scene({
	triggerElement: ".section9",
	reverse: false  
})
	// .addIndicators()
	.setTween(tween8)
	.addTo(controller);

// section9 end

// section11 start

var tween8= new TimelineMax();
tween8
	.fromTo('.section11', 1, {opacity:0}, {opacity:1})
	.fromTo('.prod_name_svg1-order', 2, {strokeDashoffset:-670},{strokeDashoffset:0}, '=-1')
	.fromTo('.prod_name_svg2-order', 1, {strokeDashoffset:70},{strokeDashoffset:0},"=-1")
	.fromTo('.prod_name_svg1-order', 1, {fill:"rgba(107,186,84,0)"},{fill:"rgba(107,186,84,1)"},"=-0.5")
	.staggerFromTo('.order__item', 1, {opacity:0, y:75},{opacity:1, y:0},0.3, '=-2');
var scene8 = new ScrollMagic.Scene({
	triggerElement: ".section11",
	reverse: false  
})
	// .addIndicators()
	.setTween(tween8)
	.addTo(controller);

// section11 end

