jQuery(function ($) {
  $(".img_box img").click(function () {
    $("#grayDisplay").html($(this).prop("outerHTML"));
    $("#grayDisplay").fadeIn(200);
    return false;
  });

  $("#grayDisplay").click(function () {
    $("#grayDisplay").fadeOut(200);
    return false;
  });
});
