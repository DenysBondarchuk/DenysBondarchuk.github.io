// for composition

$('.ev-composition__item').click(function () {
    $(this).siblings().removeClass("ev-composition__item-full_height");
    $(this).toggleClass("ev-composition__item-full_height");
});

// for doctor

$(".plus").click(function(){
	$(".under_revolution_text").toggleClass("active_text");

	if ($(".under_revolution_text").hasClass("active_text")) {
		$(".plus").text("-");
	}
	else {
		$(".plus").text("+");
	}

});


//for review

$(".review_plus").click(function(){
	$(this).parent().toggleClass("review_item_active");

	if ($(this).parent().hasClass("review_item_active")) {
		$(this).text("-");
		$(this).parent().css("box-shadow","none");
		$(this).next().css("max-height","1000px");
	}
	else {
		$(this).text("+");
		$(this).parent().css("box-shadow","inset 0px -150px 100px -50px #ffffff");
		$(this).next().css("max-height","293px");
	}

});

// for video/audio

$(".video_btn").click(function(){

	$(this).addClass("active_btn");
	$(".audio_btn").removeClass("active_btn");

	$(".video_reviews_wrap").css("display", "block");
	$(".audio_reviews_wrap").css("display", "none");

});

$(".audio_btn").click(function(){

	$(".audio_reviews_wrap").css("display", "block");
	$(".video_reviews_wrap").css("display", "none");

	$(this).addClass("active_btn");
	$(".video_btn").removeClass("active_btn");

});

// for review

$( document ).ready(function() {
        $(".twelfth-btn_popup1").click(function() {
        $(".popup-container").show(), $(".popup-container").mouseup(function(p) {
            var e = $(".popup-container");
            0 === e.has(p.target).length && (e.hide(), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active"), $(".popup-review").val(""))
        })
    }), $(".popup-btn").click(function() {
        $(".popup-review").val().length > 0 && ($(".popup-block-second").addClass("active"), $(".popup-block-first").addClass("active"))
    }), $(".popup-close").click(function() {
        $(".popup-container").hide(), $(".popup-review").val(""), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active")
    })

});

// for shok content

$(".shok_btn").click(function(){
	$(this).parent().parent().find(".img_no_blur").toggleClass("z_index");
});

