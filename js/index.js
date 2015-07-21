$('.close').click(function(event) {
    console.log("close");
    fadeToTarget($('#target'));
});

function fadeToTarget(targetJ) {
    var targetTop =  targetJ.offset().top;
    var targetLeft = targetJ.offset().left;
    console.log(targetTop+"---"+targetLeft);

    $('.panel').animate({
        width:0,
        height:0,
        top:500,
        left:1000
    }, 1000);
    
}