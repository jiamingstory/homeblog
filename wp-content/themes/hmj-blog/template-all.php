<style>	@media only screen and (min-width: 900px) {		.type-post, .type-page {			float: left;			width: 670px;		}	}</style>	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>		<header class="entry-header">			<?php if ( is_single() ) : ?>			<h1 class="entry-title"><?php the_title(); ?></h1>			<?php else : ?>			<h1 class="entry-title">				<?php if( is_sticky() ) echo '<span>置顶</span>' ?><?php 					$t1=$post->post_date;					$t2=date("Y-m-d H:i:s");					$diff=(strtotime($t2)-strtotime($t1))/3600;					if($diff<24){echo "<span>New</span>";} 					else{echo "";} 				?><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>			</h1>			<?php endif; ?>			<div class="meta-top1">				<div class="meta-top2">						<?php hmjblog_entry_meta(); ?>			<?php if ( is_singular() && get_the_author_meta( 'description' ) && is_multi_author() ) : ?>				<div class="author-info">					<div class="author-avatar">						<?php						$author_bio_avatar_size = apply_filters( 'hmjblog_author_bio_avatar_size', 68 );						echo get_avatar( get_the_author_meta( 'user_email' ), $author_bio_avatar_size );						?>					</div>					<div class="author-description">						<h2><?php printf( __( 'About %s', 'hmjblog' ), get_the_author() ); ?></h2>						<p><?php the_author_meta( 'description' ); ?></p>						<div class="author-link">							<a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author">							<?php printf( __( '显示 %s 作者所有文章 <span class="meta-nav">&rarr;</span>', 'hmjblog' ), get_the_author() ); ?>							</a>						</div>					</div>				</div>			<?php endif; ?>			</div>				<?php if ( comments_open() ) : ?>				<div class="comments-link">					<i class="fa fa-comments"></i><?php comments_popup_link('<span class="leave-reply">'.__('暂无评论','hmjblog').'</span>',__('1条评论','hmjblog' ), __( '%条评论', 'hmjblog')); ?>　<i class="fa fa-eye"></i><?php post_views('', '次浏览'); ?>				</div>				<?php endif; ?>				<?php if ( !comments_open()) : ?>				<div class="comments-link" style="margin: 10px 0px;">					<i class="fa fa-comments"></i><span class="leave-reply">评论关闭</span>　<i class="fa fa-eye"></i><?php post_views('', '次浏览'); ?>				</div>				<?php endif; ?>			</div>		</header>						<div class="post-thumbnail">			<a href="<?php echo get_permalink(); ?>" title="<?php the_title(); ?>"><?php if (  ! post_password_required() && ! is_attachment() && !is_single() ) :				the_post_thumbnail();			endif; ?></a>			</div>		<?php if ( !is_single() ) : ?>		<div class="entry-summary">			<?php the_excerpt() ?> 		</div>		<?php else : ?>		<div class="entry-content">			<?php the_content( __( '阅读全文 <span class="meta-nav">&rarr;</span>', 'hmjblog' ) ); ?>			<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'hmjblog' ), 'after' => '</div>' ) ); ?>		</div>		<?php endif; ?>	</article>