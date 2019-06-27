$(function ($) {
    $("#fullPage").fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function (link, index) {
            $(".section").eq(index - 1).addClass("now");
        }
        ,
        onLeave: function (index, nextIndex, dirction) {
            if (index == 2 && nextIndex == 3) {
                $(".section").eq(index - 1).addClass("leaved");
            } else if (index == 3 && nextIndex == 4) {
                $(".section").eq(index - 1).addClass("leaved");
            } else if (index == 5 && nextIndex == 6) {
                $(".section").eq(index - 1).addClass("leaved");
                $(".section").eq(index).addClass("leaved");
            }
        },
        afterRender: function () {
            $(".more").on("click", function () {
                $.fn.fullpage.moveSectionDown();
            })
            $(".screen08").on('mousemove', function (e) {
                $(this).find(".hand").css({
                    top: e.clientY - 130,
                    left: e.clientX - 420
                })
            }).find(".again").on('click', function () {
                console.log(111);
                $(".now").removeClass("now");
                $(".leaved").removeClass("leaved");
                $.fn.fullpage.moveTo(1);
            })
        }
    })
})