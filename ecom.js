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
  
    // =========== NEW: Buy Now Button Logic ===========
    $(".buy-now-btn").on("click", function () {
      // Find the container with data-product and data-price
      // For "All Products", "Clothing", "Shoes", "Accessories" => .img-content
      // For "Top Sales" => .best-p1-txt
      // So we can do:
      const parent = $(this).closest("[data-product][data-price]");
  
      // Extract data attributes
      const productName = parent.data("product");  // e.g. "Black Suit"
      const productPrice = parent.data("price");   // e.g. "350"
  
      // Build the URL to checkout.html
      // We'll pass productName and productPrice as query params
      const checkoutURL = `checkout.html?product=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}`;
  
      // Redirect to checkout page
      window.location.href = checkoutURL;
    });
  });
  
