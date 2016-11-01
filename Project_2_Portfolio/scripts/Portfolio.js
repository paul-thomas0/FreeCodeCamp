var viewportHeight = $(window).height();
var viewportWidth = $(window).width();

$(window).scroll(function{
  if($(".portfolio").scrollTop() > 0) {
    $("#logo").html("<p>'+ $(portfolio).scrollTop()+'</p>");
  }
});
