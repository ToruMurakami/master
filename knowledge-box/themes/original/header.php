<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>knowledge-box</title>

    <link rel=" preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
    <?php wp_head();?>
</head>


<body>
    <header id="header">
        <div class="container">
            <h1 id="h1"><a href="<?php echo home_url(); ?>">knowledge-box</a></h1>
        </div>
        <div class="Search-box sp">
            <?php get_search_form(); ?>
        </div>
    </header>