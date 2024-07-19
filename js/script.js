
$(document).ready(function () {
    var winnerIndex = Math.floor(Math.random() * 50);

    $('article').each(function (index) {
        $(this).click(function () {
            if (index === winnerIndex) {
                $('#modal').css('display', 'flex');
                $('#modal-content').addClass('animate__animated animate__zoomInUp');
                $('#container').addClass('animate__animated animate__hinge');
                $('.video-background-2').addClass('hide');
                $('.video-background').removeClass('hide');
            } else {
                $(this).addClass('animate__animated animate__zoomOutDown');
            }
        });
    });

});
