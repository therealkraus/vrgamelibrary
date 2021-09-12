$(document).ready(function () {
    var $url;
    $(".video-btn").on("click", function () {
        $url = $(this).data("src");
    });

    $("#videoModal").on('shown.bs.modal', function (e) {
        $("#video-frame").attr('src', $url);
    });

    $("#videoModal").on('hide.bs.modal', function (e) {
        $("#video-frame").attr('src', "");
    });

});