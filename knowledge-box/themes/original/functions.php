<?php

function enq (){

    //googleiconの定義
    wp_enqueue_style(
        //名前
        'google-icon',
        //パス
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        //依存関係
        [],
        //バージョン
        1
    );
    //リセットスタイルシートの定義
    // wp_enqueue_style(
    //     //名前
    //     'reset',
    //     //パス
    //     get_theme_file_uri("/css/reset.css"),
    //     //依存関係
    //     array(),
    //     //バージョン
    //     1,
    //   false // headタグ内に出力
    // );
    //スタイルシートの定義
    wp_enqueue_style(
        //名前
        'style',
        //パス
        get_theme_file_uri("/css/style.css"),
        //依存関係
        array(),
        1,
      false // headタグ内に出力
    );
    //検索用スタイルシート
    wp_enqueue_style(
        //名前
        'search',
        //パス
        get_theme_file_uri("/css/search.css"),
        //依存関係
        array(),
        1,
      false // headタグ内に出力
    );

    //fontawesome読み込み
    wp_enqueue_style(
        //名前
        'font_awesome',
        //パス
        "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
        //依存関係
        [],
        //バージョン
        1    
    );
}
add_action('wp_enqueue_scripts','enq');

//js読み込み
function fenq(){
    wp_enqueue_script(
        'jquery', 
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js", 
        []
    );
    wp_enqueue_script(
        'footer', 
        get_theme_file_uri("/js/footerFixed.js"), 
        []
    );
    wp_enqueue_script(
        'zoom', 
        get_theme_file_uri("/js/ios-zoom.js"), 
        []
    );
    // wp_enqueue_script(
    //     'smoothscroll', 
    //     get_theme_file_uri("/js/smooth-scroll.js"), 
    //     []
    // );
    wp_enqueue_script(
        'objectFitPolyfill', 
        get_theme_file_uri("/js/smoothscroll.min.js"), 
        []
    );
    wp_enqueue_script(
        'main', 
        get_theme_file_uri("/js/main.js"), 
        []
    );
    wp_enqueue_script(
        'img_modal', 
        get_theme_file_uri("/js/img_modal.js"), 
        []
    );
    wp_enqueue_script(
        'fuwa_view', 
        get_theme_file_uri("/js/fuwa_view.js"), 
        []
    );
    wp_enqueue_script(
        'infinity_wordpress', 
        get_theme_file_uri("/js/infinity_wordpress.js"), 
        []
    );
    wp_enqueue_script(
        'boot', 
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", 
        []
    );
}
add_action('wp_enqueue_scripts','fenq');


//画面遷移用関数
function page_link($page){
    $path = '/'.$page;
    $page_obj = get_page_by_path($path);
    echo get_page_link($page_obj);
}

//アイキャッチ機能をonにする
add_theme_support('post-thumbnails');
add_image_size( 'blog_thumbnail', 240, 240, array('center','top'));

//本文抜粋オプション
function wpdocs_custom_excerpt_length( $length ) {
    return 50;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

add_action('init', function() {
  remove_filter('the_content', 'wpautop');
});
?>