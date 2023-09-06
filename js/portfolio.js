$(function () {

    $('.Main_content').fullpage({
        anchors: ['main', 'w_sub01', 'w_sub02', 'w_sub03', 'w_sub04', 'w_sub05', 'vi_sub01', 'vi_sub02', 'vi_sub03', 'vi_sub04', 'vi_sub05', 'footer'],
        //  스크롤 내릴때마다 한 풀페이지마다 주소url에 이름 변경하기
        navigation: false,
        //  왼쪽에 몇번째 풀페이지인지 도트 표기 할지 안할지
        responsiveWidth: 700,
        scrollOverflow: false,
        //line-height: 1에서 font-size가 box를 초과할 때 스크롤이 생기는 초기값을 false로 설정함.

        afterRender: function () {
            $('.Main_content .section').eq(0).addClass('on')
        },
        afterLoad: function (link, idx) {
            //  afterLoad : 풀페이지 페이지마다 왼쪽바 같이 연동되게
            console.log(link, idx);
            $('.Main_content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
            if (idx == 1) {
                // $('.header').addClass('on');
                // $('.gnb').addClass('on');
            } else {
                // $('.header').removeClass('on');
                // $('.gnb').removeClass('on');
            }
        },
    });






    // <<<< 헤더 : 메뉴바 아이콘 >>>>>>>>
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