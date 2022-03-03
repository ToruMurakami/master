<?php
require_once '../../../wp-load.php';
$offset = isset( $_POST['post_num_now'] ) ? $_POST['post_num_now'] : 0;
$posts_per_page = isset( $_POST['post_num_add'] ) ? $_POST['post_num_add'] : 0;

$ajax_query = new WP_Query(
array(
'post_type' => 'post',
'posts_per_page' => $posts_per_page,
'offset' => $offset,
)
);

?>
<?php if ($ajax_query->have_posts()) :  ?>
<?php while ( $ajax_query->have_posts() ) : ?>
<?php $ajax_query->the_post(); ?>

<div class="main-card wrap load-up">
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
<?php endwhile; ?>
<?php endif; ?>
<?php wp_reset_postdata();?>