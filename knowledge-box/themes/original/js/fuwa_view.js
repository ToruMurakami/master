jQuery(function ($) {
  $(function () {
    load_effect();
    $(window).scroll(function () {
      scroll_effect();
    });
  });

  //ふわっと表示初期ロード
  function load_effect() {
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $(".load-up").each(function () {
      var yy = $(this).offset().top;
      if (tt > yy - hh) {
        $(this).addClass("done");
      }
    });
  }
  //ふわっと表示スクロール
  function scroll_effect() {
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $(".load-up").each(function () {
      var yy = $(this).offset().top;
      if (tt > yy - hh) {
        $(this).addClass("done");
      }
    });
  }
});
