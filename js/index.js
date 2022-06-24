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

   function topMove() {
      $("#topMove").click(function () {
         $("html, body").scrollTop(0);
      });
   }

   function openChatroom() {
      var windowWidth = $(window).width();

      if (windowWidth < 992) {
         $("#topMove").hide();
      } else {
         $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
               $("#topMove").fadeIn();
            } else {
               $("#topMove").fadeOut();
            }
         });
      }
   }

   scrollEvent();
   topMove();
   openChatroom();
});
