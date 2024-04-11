$(function () {
  // fade out page after link click
  $("body.fade a").click(function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    $("body.fade").addClass("out");
    setTimeout(function () {
      window.location.href = link;
    }, 1500);
  });

  // fadeee out CURRENT page after link click
  $("body.fadeee a").click(function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    $("body.fadeee").addClass("out");
    setTimeout(function () {
      window.location.href = link;
    }, 1500);
  });

  // HOME -> CLICK
  $("a.enter").click(function (e) {
    e.preventDefault();
    $("body.home .content.home").addClass("hidden");
    $("a.enter").fadeOut();
    setTimeout(function () {
      $("body.home .content.home").addClass("goodbye");
      $("body").removeClass("home");
      $("body").addClass("about");
      $("nav#primary a.about-link").addClass("current");
    }, 1500);
  });

  // ANY PAGE -> BACK TO HOME
  $("a.home-link").click(function () {
    $("body").removeClass("about");
    $("body").removeClass("method");
    $("body").removeClass("app");
    $("body").removeClass("people");
    $("body").removeClass("contact");
    $("body").addClass("home");
    setTimeout(function () {
      $("body.home .content.home").removeClass("goodbye");
    }, 500);
    setTimeout(function () {
      $("body.home .content.home").removeClass("hidden");
      $("a.enter").fadeIn();
    }, 1500);
  });

  // ANY PAGE -> METHOD
  $("a.method-link").click(function (e) {
    e.preventDefault();
    $("body").removeClass("about");
    $("body").removeClass("app");
    $("body").removeClass("people");
    $("body").removeClass("contact");
    $(".content.about").addClass("hidden");
    setTimeout(function () {
      $(".content.about").addClass("goodbye");
      $("body").addClass("method");
      $("nav#primary a.method-link").addClass("current");
    }, 1500);
  });
});
