$(document).ready(function () {
  // Smooth scroll for anchor links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Close mobile menu on link click
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });

  // Animation on scroll: add 'visible' class when elements come into view
  $(window).on("scroll", function () {
    $(".animate").each(function () {
      var elementTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();
      if (windowBottom > elementTop + 50) {
        $(this).addClass("visible");
      }
    });
  });

  // Trigger scroll event on page load
  $(window).trigger("scroll");
});
