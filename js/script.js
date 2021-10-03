$(document).ready(function () {
    $('.navbar-icon').click(function () {
        $('.navbar ul').addClass('active');
        $('.cover').addClass('active');
    })
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar ul').removeClass('active');
        $('.cover').removeClass('active');
    });
    $('.search-icon').click(function (e) { 
        e.preventDefault();
        //$('.search-input').toggle(500);
        $(this).css('color', '#dd2f31');
        //$(this).classList.toggle("menu-icon-active");
    });
    $('.col-inner').mouseover(function () { 
        $(this).children('.product-icon').css({
            'display':'block',

        });
        $(this).css({
            "box-shadow": "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
            "border": "1px solid #f0ecec"
        })
    });
    $('.col-inner').mouseout(function () { 
        $(this).children('.product-icon').css('display', 'none');
        $(this).css({
            "box-shadow": "none",
            "border": "none"
        })
    });
});