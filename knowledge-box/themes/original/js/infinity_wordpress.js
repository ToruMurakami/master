jQuery(function () {
  let documentHeight = jQuery(document).height();
  let windowsHeight = jQuery(window).height();
  let url =
    "http://localhost/work_wp/sampleCode/wp-content/themes/original/ajax-item.php";
  let postNumNow = 5; /* 最初に表示されている記事数 */
  let postNumAdd = 1;
  let flag = false;
  jQuery(window).on("scroll", function () {
    let scrollPosition = windowsHeight + jQuery(window).scrollTop();
    if (scrollPosition >= documentHeight - 200) {
      if (!flag) {
        flag = true;
        jQuery.ajax({
          type: "POST",
          url: url,
          data: {
            post_num_now: postNumNow,
            post_num_add: postNumAdd,
          },
          success: function (response) {
            jQuery(".top-main-box").append(response);
            documentHeight = jQuery(document).height();
            postNumNow += postNumAdd;
            flag = false;
          },
        });
      }
    }
  });
});
