win10Mask();

function win10Mask() {
    initMask();

    var timer;

    function initMask() {

        $('.mask')
            .height($(document).height())
            .width($(document).width());

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

        // $('.mask-close').hide(); //隐藏按钮
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