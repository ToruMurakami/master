<footer id="footer">

    <div class="container">
        <small>&copy; 2021 ToruMurakami. All Rights Reserved.</small>
    </div>
    <div class="fixbtn">
        <a class="page-top sp" href="#top" id="btn-backtotop"></a>
        <div class="menu-btn sp">
            <input type="checkbox" id="menu-btn-check">
            <label for="menu-btn-check" class="menu-btn"><span></span></label>
            <div class="menu-content">
                <a href="<?php echo home_url(); ?>" class="footer-prof"></a>
                <div class="tag-box">
                    <?php
                $cat_all = get_terms( "category", "fields=all&get=all" );
                foreach($cat_all as $value):
            ?>
                    <p class="tags"><a
                            href="<?php echo get_category_link($value->term_id); ?>"><?php echo $value->name;?></a>
                    </p>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>


</footer>
<?php wp_footer(); ?>

</body>

</html>