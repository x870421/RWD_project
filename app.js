$(document).ready(function () {
  $(".hamburger_bt").click(function () {
    $(".nav>ul").toggleClass("show");
  });
  $(".produceImg>a>.heart").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });
  $(".nav>ul>li>a").click(function () {
    const target = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(target).stop().offset().top - 50,
      },
      500
    );
  });
});
