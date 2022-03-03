<?php get_header();?>

<main class="categoryPage">
    <div class="container row contentsArea">
        <div class="column col-lg-9 main-box">
            <?php if ( have_posts() ) : ?>
            <h2 class="categorysResults">
                <?php 
                    $cat =single_cat_title("", false);
                    // $cat_name = $cat->cat_name;                 
                    printf( __( 'Categorys: %s', 'altitude' ), '<span>' . $cat. '</span>' ); ?>
            </h2>
            <?php endif;?>
            <?php ?>
            <?php
                if (have_posts()) : 
                while (have_posts()) :
	            the_post() ;
            ?>
            <div class="main-card">
                <div class="cardTop">
                    <h2 class="main-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <time>
                        公開日:<?php the_time('Y/m/d');?><br>
                        <?php if(get_the_time('Y/m/d') != get_the_modified_date('Y/m/d')):?>
                        最終更新日:<?php the_modified_date('Y/m/d') ?>
                        <?php endif;?>
                    </time>
                </div>
                <div class="tag-box">
                    <?php
                        $categories = get_the_category();
                        foreach( $categories as $category ) {
                            echo '<p class="tags"><a href="'.home_url()."/category/".$category->name.'">'.$category->name.'</a></p>';
                        } 
                    ?>
                </div>
                <div class="excerptText">
                    <?php echo get_the_excerpt(); ?>
                </div>

                <div class="more-link">
                    <a href="<?php the_permalink(); ?>">MORE.</a>
                </div>
            </div>
            <?php endwhile;else:?>
            <div class="notFound">
                該当の投稿がありませんでした。w
            </div>
            <?php endif;?>
        </div>
        <div class="container col-lg-3 side-box">
            <div class="side col-lg-3 pc">
                <h3 class="side-title">Search＆Tags</h3>
                <div class="Search-box">
                    <?php get_search_form(); ?>
                </div>
                <div class="tag-box">
                    <?php
                        $cat_all = get_terms( "category", "fields=all&get=all" );
                        foreach($cat_all as $value):
                    ?>
                    <p class="tags"><a
                            href="<?php echo get_category_link($value->term_id); ?>"><?php echo $value->name;?></a></p>
                    <?php endforeach; ?>
                    <!-- <p class="tags"><a>java</a></p>
                    <p class="tags"><a>php</a></p>
                    <p class="tags"><a>ruby</a></p>
                    <p class="tags"><a>javaScript</a></p>
                    <p class="tags"><a>html&css</a></p> -->
                </div>
            </div>
        </div>
    </div>

</main>
<?php get_footer();?>