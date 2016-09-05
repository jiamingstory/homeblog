<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Fabthemes
 */

get_header(); ?>
<div class="col-md-12">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section class="error-404 not-found">
				<div class="entry-content">
					<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'fabthemes' ); ?></p>
				</div><!-- .page-content -->
			</section><!-- .error-404 -->
		</main><!-- #main -->
	</div><!-- #primary -->
</div>
<?php get_footer();
