<?php get_header(); ?>	<div id="primary" class="site-content">		<div id="content" role="main" class="border-page">		<?php if ( have_posts() ) : ?>			<?php while ( have_posts() ) : the_post(); ?>				<?php get_template_part( 'template-all', get_post_format() ); ?>			<?php endwhile; ?>		<?php else : ?>			<article id="post-0" class="post no-results not-found">			<?php if ( current_user_can( 'edit_posts' ) ) :			?>				<header class="entry-header">					<h1 class="entry-title"><?php _e( '没有文章', 'hmjblog' ); ?></h1>										</header>				<div class="entry-content">					<p><?php printf( __( '准备好发布您的第一篇文章吗? <a href="%s">在这里开始</a>.', 'hmjblog' ), admin_url( 'post-new.php' ) ); ?></p>				</div>			<?php else : ?>				<header class="entry-header">					<h1 class="entry-title"><?php _e( '没有找到', 'hmjblog' ); ?></h1>				</header>			<?php endif; ?>			</article>		<?php endif; ?>		<?php dmeng_paging_nav(); ?>		</div>	</div><?php get_sidebar(); ?><?php get_footer(); ?>