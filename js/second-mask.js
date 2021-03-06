$(document).ready(function() {
    win10Mask2();
});

function win10Mask2() {
    //25,26,31,32 这4个系统出现遮罩层
    var selectOSNumInit = $('#selectOS').val(); //系统编号
    var maskHadShowed = false;
    var timer;
    // alert(selectOSNumInit);
    //如果一开始就是这4个系统之一，弹层
    if (selectOSNumInit == 25 || selectOSNumInit == 26 || selectOSNumInit == 31 || selectOSNumInit == 32) {

        showMask();

    } else {
        $(document).on("change", "#selectOS", function() {
            var selectOSNum = $('#selectOS').val();
            // alert(selectOSNum);
            if (maskHadShowed === false) { //未出现过遮罩层
                if (selectOSNum == 25 || selectOSNum == 26 || selectOSNum == 31 || selectOSNum == 32) {

                    showMask();
                    maskHadShowed = true;

                }
            }
        });
    }

    function showMask() {
        var picTop = $(window).height() / 2;
        $('.mask-panel').show();
        $('.mask')
            .height($(document).height())
            .width($(document).width())
            .fadeIn(1100);
        $('.mask-pic').animate({
            top: picTop
        }, 800);

        //消失
        timer = setTimeout(function() {
            fadeToTarget($('#target'));
            // console.log("setTimeout");
        }, 15000);

        $('.mask-close').click(function() {
            fadeToTarget($('#target'));
            clearTimeout(timer);
        });
    }

    /**
     * 向目标缩小
     * @param  {jQuery元素} targetJ 消失目标
     * @return {[type]}         [description]
     */
    function fadeToTarget(targetJ) {

        $('.mask-panel').hide();

        //计算目标位置
        var targetTop = targetJ.offset().top - $(document).scrollTop() + targetJ.height() / 2 + 273;
        var targetLeft = targetJ.offset().left - $(document).scrollLeft() + targetJ.width() / 2 + 445;

        // 图片动画效果
        $('.mask-pic').animate({
            width: 0,
            height: 0,
            top: targetTop,
            left: targetLeft
        }, 800);
        $('.mask').delay(500).fadeOut(500);
    }
}