
//메인비주얼 슬라이드
$(function () {
    $('.backcontent_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false,
        fade: true
    });


    //슬라이드로 탭구현.
    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .lnk li').removeClass('on');
        $('.main_visual .lnk li').eq(c).addClass('on')
    });

    //슬라이드 arrow
    $('.map_content .arrows .prev').on('click', function () {
        $('.map_content .wrap').slick('slickPrev')
    });

    $('.map_content .arrows .next').on('click', function () {
        $('.map_content .wrap').slick('slickNext')
    });



    $('.map_content .mapimgbox').on('click', function () {
        let idx = $(this).index();
        $('.map_content .map_img').eq(idx).addClass('on').siblings().removeClass('on');
        $('.map_content').css({
            background: `url(./images/www_0${idx + 1}.jpg)no-repeat center center/cover`
        })
    })


});



$(function () {
    $("#bgndVideo").YTPlayer({
        videoURL: 'https://youtu.be/yhxnYq3kVjI',
        containment: '.main_visual',
        autoPlay: true,
        showControls: false,
    });
});


$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })
})

$(function () {
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active')
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().slideToggle();
        }
    })
});
