$(document).ready(function() {
    0 == ($("html").scrollTop() || $("body").scrollTop()) && $("body").css("overflow", "hidden")
}), $("body > *").not("body > header, body > .section2").mouseover(function() {
    $("body").css("overflow", "auto")
});
var elem = document.getElementById("for_scroll");
elem.addEventListener ? "onwheel" in document ? elem.addEventListener("wheel", onWheel) : "onmousewheel" in document ? elem.addEventListener("mousewheel", onWheel) : elem.addEventListener("MozMousePixelScroll", onWheel) : elem.attachEvent("onmousewheel", onWheel);
var delta2 = 0;

function onWheel(e) {
    var t = (e = e || window.event).deltaY || e.detail || e.wheelDelta;
    if (1 == !!window.sidebar) t = 30 * e.deltaY || 30 * e.detail || 30 * e.wheelDelta;
    if (1 == window.navigator.msPointerEnabled) t = -e.deltaY || -e.detail || -e.wheelDelta;
    (delta2 = +delta2 + t) < -100 && (delta2 = 0), 0 < delta2 && delta2 < 300 && ($(".action0").css("display", "block"), $(".action1").css("display", "none"), $(".action2").css("display", "none"), $(".action3").css("display", "none"), $(".feet_action1").css("opacity", "0"), $(".feet_action2").css("opacity", "0"), $(".feet_action3").css("opacity", "0"), $(".header_bullet1").text("+"), $(".header_bullet2").text("+"), $(".header_bullet3").text("+")), 300 <= delta2 && delta2 < 600 && ($(".action0").css("display", "none"), $(".action1").css("display", "block"), $(".action2").css("display", "none"), $(".action3").css("display", "0"), $(".feet_action1").css("opacity", "1"), $(".feet_action2").css("opacity", "0"), $(".feet_action3").css("opacity", "0"), $(".header_bullet1").text("-"), $(".header_bullet2").text("+"), $(".header_bullet3").text("+")), 600 <= delta2 && delta2 < 900 && ($(".action0").css("display", "none"), $(".action1").css("display", "none"), $(".action2").css("display", "block"), $(".action3").css("display", "none"), $(".feet_action1").css("opacity", "0"), $(".feet_action2").css("opacity", "1"), $(".feet_action3").css("opacity", "0"), $(".header_bullet1").text("+"), $(".header_bullet2").text("-"), $(".header_bullet3").text("+")), 900 <= delta2 && delta2 < 1200 && ($(".action0").css("display", "none"), $(".action1").css("display", "none"), $(".action2").css("display", "none"), $(".action3").css("display", "block"), $(".feet_action1").css("opacity", "0"), $(".feet_action2").css("opacity", "0"), $(".feet_action3").css("opacity", "1"), $(".header_bullet1").text("+"), $(".header_bullet2").text("+"), $(".header_bullet3").text("-"));
    var o = $(window).scrollTop();
    1200 <= delta2 ? $("body").css("overflow", "auto") : 0 == o && $("body").css("overflow", "hidden")
}
$(".footer_bullet1").click(function() {
    $(".footer_action_wrap1").toggleClass("active_opacity"), $(".footer_action_wrap2").removeClass("active_opacity"), $(".footer_action_wrap3").removeClass("active_opacity"), $(".footer_action_wrap1").hasClass("active_opacity") ? $(".footer_bullet1").text("-") : $(".footer_bullet1").text("+"), $(".footer_action_wrap2").hasClass("active_opacity") ? $(".footer_bullet2").text("-") : $(".footer_bullet2").text("+"), $(".footer_action_wrap3").hasClass("active_opacity") ? $(".footer_bullet3").text("-") : $(".footer_bullet3").text("+")
}), $(".footer_bullet2").click(function() {
    $(".footer_action_wrap2").toggleClass("active_opacity"), $(".footer_action_wrap1").removeClass("active_opacity"), $(".footer_action_wrap3").removeClass("active_opacity"), $(".footer_action_wrap1").hasClass("active_opacity") ? $(".footer_bullet1").text("-") : $(".footer_bullet1").text("+"), $(".footer_action_wrap2").hasClass("active_opacity") ? $(".footer_bullet2").text("-") : $(".footer_bullet2").text("+"), $(".footer_action_wrap3").hasClass("active_opacity") ? $(".footer_bullet3").text("-") : $(".footer_bullet3").text("+")
}), $(".footer_bullet3").click(function() {
    $(".footer_action_wrap3").toggleClass("active_opacity"), $(".footer_action_wrap2").removeClass("active_opacity"), $(".footer_action_wrap1").removeClass("active_opacity"), $(".footer_action_wrap1").hasClass("active_opacity") ? $(".footer_bullet1").text("-") : $(".footer_bullet1").text("+"), $(".footer_action_wrap2").hasClass("active_opacity") ? $(".footer_bullet2").text("-") : $(".footer_bullet2").text("+"), $(".footer_action_wrap3").hasClass("active_opacity") ? $(".footer_bullet3").text("-") : $(".footer_bullet3").text("+")
}), $("section, header").on("click", "a", function(e) {
    e.preventDefault();
    var t = $(this).attr("href"),
        o = $(t).offset().top;
    $("body,html").animate({
        scrollTop: o
    }, 1e3), $("body").css("overflow", "auto") /*$(".action0").css("opacity", "0"), $(".action1").css("opacity", "0"), $(".action2").css("opacity", "0"), $(".action3").css("opacity", "1"), $(".header_bullet1").text("+"), $(".header_bullet2").text("+"), $(".header_bullet3").text("-")*/, delta2 = 1400
}), $(document).ready(function() {
    $(".twelfth-btn_popup1").click(function() {
        $(".popup-container").show(), $(".popup-container").mouseup(function(e) {
            var t = $(".popup-container");
            0 === t.has(e.target).length && (t.hide(), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active"), $(".popup-review").val(""))
        })
    }), $(".popup-btn").click(function() {
        0 < $(".popup-review").val().length && ($(".popup-block-second").addClass("active"), $(".popup-block-first").addClass("active"))
    }), $(".popup-close").click(function() {
        $(".popup-container").hide(), $(".popup-review").val(""), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active")
    })
});
var toggle = 1;

function checkResize() {
    var e = $(window).width();
    $(".question").off("click"), e < 768 ? $(".question").on("click", function() {
        $(this), $(this).next().slideToggle();
        $(".answer").not($(this).next()).slideUp(500)
    }) : $(".answer").slideDown(0)
}
$(".plus_review").click(function() {
    $(".more_question").slideToggle("slow"), 1 == toggle ? ($(".plus_review").text("-"), $(".hide_view_name").text("Скрыть"), toggle--) : 0 == toggle && ($(".plus_review").text("+"), $(".hide_view_name").text("Показать все"), toggle++)
}), checkResize(), $(window).on("resize", checkResize);