<?php get_header();?>

<main class="singlePage" id="top">
    <div class="container row contentsArea">
        <div class="column col-lg-9 main-box">

            <div class="main-card">
                <div class="cardTop">
                    <h2 class="main-title"><?php the_title(); ?></h2>
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
                <div class="mainText">
                    <?php the_content(); ?>
                </div>

            </div>
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