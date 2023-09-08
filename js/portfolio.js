$(function () {
    $('.Main_content').fullpage({
        anchors: ['main', 'w_sub01', 'w_sub02', 'w_sub03', 'w_sub04', 'w_sub05', 'vi_sub01', 'vi_sub02', 'vi_sub03', 'vi_sub04', 'vi_sub05', 'profile'],
        navigation: false,
        responsiveWidth: 700,
        scrollOverflow: false,
        afterRender: function () {
            $('.Main_content .section').eq(0).addClass('on')
        },
        _afterLoad: function (link, idx) {
            console.log(link, idx);
            $('.Main_content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');




            // <<<<< header_top 최상단 올리는 버튼 설정>>>>
            if (idx > 1) {
                $('.header_top').css({ display: "block" });
            }
            if (idx == 1) {
                // 메인 첫 페이지에선 안보이게
                $('.header_top').css({ display: "none" });
            }




            // <<<<<< dots list : 웹,비주얼 섹션별 설정 >>>>
            $('.web_dots li').eq(idx - 2).addClass('on').siblings().removeClass('on');
            $('.visual_dots li').eq(idx - 7).addClass('on').siblings().removeClass('on');

            if (idx > 1 && idx < 7) {
                $('.list1').css({ display: "block" });
                $('.list2').css({ display: "none" });

            } else {
                $('.list1').css({ display: "none" });
                $('.list2').css({ display: "block" });
            }

            if (idx == 1) {
                // 메인 첫 페이지에선 안보이게
                $('.list1').css({ display: "none" });
                $('.list2').css({ display: "none" });
            }
            if (idx == 12) {
                // 프로필 마지막 페이지에선 안보이게
                $('.list1').css({ display: "none" });
                $('.list2').css({ display: "none" });
            }
        },





        get afterLoad() {
            return this._afterLoad;
        },
        set afterLoad(value) {
            this._afterLoad = value;
        },
    });






    // <<<< 메뉴바 아이콘 >>>>>>>>
    // 메뉴바 클릭했을때 나왔다들어갔다 toggle
    $('.header_bar').on('click', function () {
        $('.header_gnb').toggleClass('on');
    });
    // 원하는 메뉴 클릭했을때 메뉴바 없어지면서 해당 메뉴로 이동
    $('.header_gnb a').on('click', function (e) {
        $('.header_gnb').removeClass('on');
        $('.bars').removeClass('xi-close').addClass('xi-bars');
    })
    // 메뉴바 아이콘 클릭하면 다른 아이콘으로 변경
    $('.header_bar').click(function () {
        if ($('.bars').hasClass("xi-bars")) {
            $('.header_gnb').slideDown('fast');
            $('.bars').removeClass('xi-bars').addClass('xi-close');
        } else {
            $('.header_gnb').slideUp('fast');
            $('.bars').removeClass('xi-close').addClass('xi-bars');
        }
    })

    // < 반응형때 메뉴 클릭 시 서브메뉴 나오게 >
    //     $('.header_gnb>ul>li>a').on('click', function (e) {
    //         e.preventDefault();
    //         $(this).next().slideToggle();
    //         $(this).parent().siblings().find('.sub').slideUp();
    //     })

})