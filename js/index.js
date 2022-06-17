$(document).ready(function () {

    function scrollEvent() {
       $("a.smooth-scroll").click(function (event) {
          event.preventDefault();
          var section = $(this).attr("href");
          $("html, body").animate(
             {
                scrollTop: $(section).offset().top - 0,
             },
             1250,
             "easeInOutExpo"
          );
       });
    }

    scrollEvent();
});
