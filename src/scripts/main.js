$(document).ready(function () {
    const $dot = $('<div class="cursor-dot"></div>').appendTo('body');
    const $outline = $('<div class="cursor-outline"></div>').appendTo('body');

    $(document).on('mousemove', function (e) {
        $dot.css({ left: e.clientX, top: e.clientY });
        setTimeout(() => {
            $outline.css({ left: e.clientX, top: e.clientY });
        }, 50);
    });

    $('a, button, #headerSpan > span').hover(
        function () {
            $outline.addClass('link-hover');
            $dot.addClass('link-hover');
        },
        function () {
            $outline.removeClass('link-hover');
            $dot.removeClass('link-hover');
        }
    );
});