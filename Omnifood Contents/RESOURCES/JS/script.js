$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "70px;",
    }
  );
  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      3000
    );
  });
  $(".js--scroll-to-feature").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-feature").offset().top,
      },
      2500
    );
  });
  /* Scroll on navigation links */
  $("a[href*='#']").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          2000
        );
      }
    }
  });

  /* -------------------------------------------------- */
  /* Animations */
  /* -------------------------------------------------- */

  // Features Tab Animations
  $(".js--wp-features-tab-1").waypoint(
    function () {
      $(".js--wp-features-tab-1").addClass(
        "animate__animated animate__backInUp"
      ),
        $(".js--wp-features-tab-2").addClass(
          "animate__animated animate__backInUp animate__delay-2s"
        ),
        $(".js--wp-features-tab-3").addClass(
          "animate__animated animate__backInUp animate__delay-3s"
        ),
        $(".js--wp-features-tab-4").addClass(
          "animate__animated animate__backInUp animate__delay-4s"
        );
    },
    { offset: "85%" }
  );

  //Steps section animation
  $(".js--wp-section-steps").waypoint(
    function () {
      $(".js--wp-steps-img").addClass("animate__animated animate__zoomInLeft"),
        $(".js--wp-steps-box-1").addClass(
          "animate__animated animate__bounceInRight"
        ),
        $(".js--wp-steps-box-2").addClass(
          "animate__animated animate__bounceInRight animate__delay-2s"
        ),
        $(".js--wp-steps-box-3").addClass(
          "animate__animated animate__bounceInRight animate__delay-3s"
        );
    },
    {
      offset: "45%",
    }
  );

  //Cities section animation
  $(".js--wp-section-cities").waypoint(
    function () {
      $(".js--wp-section-cities-box-1").addClass(
        "animate__animated animate__lightSpeedInLeft"
      ),
        $(".js--wp-section-cities-box-2").addClass(
          "animate__animated animate__lightSpeedInLeft"
        ),
        $(".js--wp-section-cities-box-3").addClass(
          "animate__animated animate__lightSpeedInRight animate__delay-2s"
        ),
        $(".js--wp-section-cities-box-4").addClass(
          "animate__animated animate__lightSpeedInRight animate__delay-2s"
        );
    },
    {
      offset: "35%",
    }
  );

  //Plans section animation
  $(".js--section-plans").waypoint(
    function () {
      $(".js--wp-section-plans-box-1").addClass(
        "animate__animated animate__flipInY"
      );
    },
    {
      offset: "20%",
    }
  );

  // Navigation Menu
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-i");

    nav.slideToggle(300);
    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-xmark");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-xmark");
    }
  });
});
