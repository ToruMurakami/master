$(function(){

    var runFlug = false;

    window.onscroll =function(){
        const pos = $('.hero').offset();
        const scroll = window.pageYOffset;

        if(pos.top < scroll && runFlug == false){
            $('header').addClass("header_sc");
            runFlug = true;
        }
        if(scroll == 0 && runFlug == true){
            $('header').removeClass("header_sc");
            runFlug = false;

        }
    }
    
    //newsスクロール処理
    var i = 1;
    var px = 1200;
    var new_scroll = function(){

        //newsカードスクロール処理
        $('#news_sc').animate({scrollLeft : px},1500);
        px += 1200;
        
        //ポインターフラグ
        const p = document.getElementById('news_sc').scrollLeft;
        if(p== 0){
            $('#cursor1').html('○');
            $('#cursor2').html('●');
            $('#cursor3').html('○');
            $('#cursor4').html('○');
        }else if(p == 1200){
            $('#cursor1').html('○');
            $('#cursor2').html('○');
            $('#cursor3').html('●');
            $('#cursor4').html('○');
        }else if(p == 2400){
            $('#cursor1').html('○');
            $('#cursor2').html('○');
            $('#cursor3').html('○');
            $('#cursor4').html('●');
        }else{
            $('#cursor1').html('●');
            $('#cursor2').html('○');
            $('#cursor3').html('○');
            $('#cursor4').html('○');
        }
            i++;
            if(i > 3){
                //スクロール位置をリセット
                document.getElementById('news_sc').scrollLeft = 0;
                i = 0;
                px= 0;
            }
    } 
    setInterval(new_scroll, 6000);

    //タブパネル
    $('#tab_btn li').on('click', function () {
        var index = $('#tab_btn li').index(this);
        $('#tab_btn li').removeClass('active');
        $(this).addClass('active');
        
        $('.tab_content ul').removeClass('show').eq(index).addClass('show');
    });
    
    //モーダル
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        
        //モーダル画面画像表示
        const src_pass = $(this).find('img').attr('src');
        const elem = document.getElementById("modal_img");
        elem.src = src_pass;

        //モーダル画面テキスト表示
        //クリックされた画像が含まれるリスト内の各要素を取得
        const menu_price = $(this).parent().find('.menu_price').clone(true);
        const menu_title = $(this).parent().find('.menu_title').clone(true);
        const menu_text = $(this).parent().find('.menu_txt').clone(true);

        //取得した要素のクラス名をmodal用に変更
        menu_price.removeClass().addClass('modal_price');
        menu_title.removeClass().addClass('modal_title');
        menu_text.removeClass().addClass('modal_txt');
        
        //モーダル画面に要素を丸々アペンド
        $('.modal__content').append(menu_price);
        $('.modal__content').append(menu_title);
        $('.modal__content').append(menu_text);

        console.log(menu_price);
        console.log(menu_title);
        console.log(menu_text);

        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut(function(){
            $('.modal_price').remove();
            $('.modal_title').remove();
            $('.modal_txt').remove();
        });
        return false;
    });

    //reserveモーダル
    $(function(){
    $('.res-js-modal-open').on('click',function(){
        //$('.res-js-modal').fadeIn();
        $('res-modal__bg').fadeIn();
        $('.res-modal').addClass('show');
        return false;
    });
    $('.res-js-modal-close').on('click',function(){
        //$('.res-js-modal').fadeOut();
        $('.res-modal').removeClass('show');
        $('res-modal__bg').removeClass('show');
        return false;
    });
});




});
