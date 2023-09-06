$(function () {

    $('.Main_content').fullpage({
        anchors: ['main', 'inedx', 'w_sub01', 'w_sub02', 'w_sub03', 'w_sub04', 'w_sub05', 'vi_sub01', 'vi_sub02', 'vi_sub03', 'vi_sub04', 'vi_sub05', 'footer'],
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
        // onLeave: function (idx, nidx, dir) {
        //     $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on')
        //     console.log(idx, nidx, dir);
        // }
    });





})