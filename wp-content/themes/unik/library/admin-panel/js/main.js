// image Uploader Functions ##############################################
	function weblusive_styling_uploader(field) {
		var button = "#upload_"+field+"_button";
		jQuery(button).click(function() {
			window.restore_send_to_editor = window.send_to_editor;
			tb_show('', 'media-upload.php?referer=weblusive-settings&amp;type=image&amp;TB_iframe=true&amp;post_id=0');
			styling_send_img(field);
			return false;
		});
		jQuery('#'+field).change(function(){
			jQuery('#'+field+'-preview img').attr("src",jQuery('#'+field).val());
		});
	}
	function styling_send_img(field) {
		window.send_to_editor = function(html) {
			imgurl = jQuery('img',html).attr('src');
			
			if(typeof imgurl == 'undefined') // Bug fix By Fouad Badawy
				imgurl = jQuery(html).attr('src');
				
			jQuery('#'+field+'-img').val(imgurl);
			jQuery('#'+field+'-preview').show();
			jQuery('#'+field+'-preview img').attr("src",imgurl);
			tb_remove();
			window.send_to_editor = window.restore_send_to_editor;
		}
	};
	
	
jQuery(document).ready(function() {

    jQuery('.tooltip').tipsy({fade: true, gravity: 's'});
	
			
// image Uploader Functions ##############################################
	function weblusive_set_uploader(field) {
		var button = "#upload_"+field+"_button";
		jQuery(button).click(function() {
			window.restore_send_to_editor = window.send_to_editor;
			tb_show('', 'media-upload.php?referer=weblusive-settings&amp;type=image&amp;TB_iframe=true&amp;post_id=0');
			weblusive_set_send_img(field);
			return false;
		});
		jQuery('#'+field).change(function(){
			jQuery('#'+field+'-preview').show();
			jQuery('#'+field+'-preview img').attr("src",jQuery('#'+field).val());
		});
	}
	function weblusive_set_send_img(field) {
		window.send_to_editor = function(html) {
			imgurl = jQuery('img',html).attr('src');
			
			if(typeof imgurl == 'undefined') // Bug fix By Fouad Badawy
				imgurl = jQuery(html).attr('src');
				
			jQuery('#'+field).val(imgurl);
			jQuery('#'+field+'-preview').show();
			jQuery('#'+field+'-preview img').attr("src",imgurl);
			tb_remove();
			window.send_to_editor = window.restore_send_to_editor;
		}
	};
	
	weblusive_set_uploader("logo");
	weblusive_set_uploader("favicon");
	weblusive_set_uploader("gravatar");
	weblusive_set_uploader("dashboard_logo");

	
	
// Del Preview Image ##############################################
	jQuery(document).on("click", ".del-img" , function(){
		jQuery(this).parent().fadeOut(function() {
			jQuery(this).hide();
			jQuery(this).parent().find('input[class="img-path"]').attr('value', '' );
		});
	});	
	


// Single Post Head ##############################################
	var selected_item = jQuery("select[name='_weblusive_post_head'] option:selected").val();
	
	if (selected_item == 'promotext') {jQuery('#_weblusive_promotext-item, #_weblusive_promotext').show();}
	if (selected_item == 'slider') {jQuery('#_weblusive_post_slider-item').show();}
	if (selected_item == 'revslider') {jQuery('#_weblusive_revslider-item, #_weblusive_revslider').show();}
	jQuery("select[name='_weblusive_post_head']").change(function(){
		var selected_item = jQuery("select[name='_weblusive_post_head'] option:selected").val();
		
		if (selected_item == 'promotext') {
			jQuery('#_weblusive_post_slider-item, #_weblusive_revslider, #_weblusive_revslider-item').hide();
			jQuery('#_weblusive_promotext, #_weblusive_promotext-item').fadeIn();
		}
		
		if (selected_item == 'revslider') {
			jQuery('#_weblusive_post_slider-item,  #_weblusive_promotext-item').hide();
			jQuery('#_weblusive_revslider, #_weblusive_revslider-item').fadeIn();
		}
		if (selected_item == 'slider') {
			jQuery('#_weblusive_promotext-item, #_weblusive_promotext, #_weblusive_revslider, #_weblusive_revslider-item').hide();
			jQuery('#_weblusive_post_slider-item').fadeIn();
		}
		if (selected_item == 'thumb' || selected_item == 'none' || selected_item == '') {
			jQuery('#_weblusive_promotext-item, #_weblusive_post_slider-item, #_weblusive_revslider, #_weblusive_revslider-item').hide();
		}
	 });

	 

// Slider Query Type ##############################################
	var selected_type = jQuery("input[name='weblusive_options[slider_query]']:checked").val();
	
	if (selected_type == 'category') {jQuery('#slider_cat-item').show();}
	if (selected_type == 'tag') {jQuery('#slider_tag-item').show();}
	if (selected_type == 'post') {jQuery('#slider_posts-item').show();}
	if (selected_type == 'page') {jQuery('#slider_pages-item').show();}
	if (selected_type == 'custom') {jQuery('#slider_custom-item').show();}
 
	
// Save Settings Alert	##############################################
	jQuery(".mpanel-save").click( function() {
		jQuery('#save-alert').fadeIn();
	});
	
// Del Cats ##############################################
	jQuery(document).on("click", ".del-cat" , function(){
		jQuery(this).parent().parent().addClass('removered').fadeOut(function() {
			jQuery(this).remove();
		});
	});


// Delete Sidebars Icon ##############################################
	jQuery(document).on("click", ".del-sidebar" , function(){
		var option = jQuery(this).parent().find('input').val();
		jQuery(this).parent().parent().addClass('removered').fadeOut(function() {
			jQuery(this).remove();
			jQuery('#custom-sidebars select').find('option[value="'+option+'"]').remove();

		});
	});	
	
	
// Delete Custom Text Icon ##############################################
	jQuery(document).on("click", ".del-custom-text" , function(){
		var option = jQuery(this).parent().find('input').val();
		jQuery(this).parent().parent().addClass('removered').fadeOut(function() {
			jQuery(this).remove();
		});
	});	
	
	
// Sidebar Builder ##############################################
	jQuery("#sidebarAdd").click(function() {
		var SidebarName = jQuery('#sidebarName').val();
		if( SidebarName.length > 0){
			jQuery('#sidebarsList').append('<li><div class="widget-head">'+SidebarName+' <input id="weblusive_sidebars" name="weblusive_options[sidebars][]" type="hidden" value="'+SidebarName+'" /><a class="del-sidebar"></a></div></li>');
			jQuery('#custom-sidebars select').append('<option value="'+SidebarName+'">'+SidebarName+'</option>');
		}
		jQuery('#sidebarName').val('');

	});	
	
	jQuery('a[rel=tooltip]').mouseover(function(e) {
		var tip = jQuery(this).attr('title');    
		jQuery(this).attr('title','');
		jQuery(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip +'</div><div class="tipFooter"></div></div>');     
			 
		jQuery('#tooltip').css('top', e.pageY -10 );
		jQuery('#tooltip').css('left', e.pageX - 20 );
			 
		jQuery('#tooltip').fadeIn('500');
		jQuery('#tooltip').fadeTo('10',0.8);
					 
	}).mousemove(function(e) {
				 
		jQuery('#tooltip').css('top', e.pageY -10 );
		jQuery('#tooltip').css('left', e.pageX - 20 );
					 
	}).mouseout(function() {
				 
		jQuery(this).attr('title',jQuery('.tipBody').html());
		jQuery(this).children('div#tooltip').remove();
		 
	});
			

	jQuery(".tabs-wrap").hide();
	jQuery(".admin-panel-tabs ul li:first").addClass("active").show();
	jQuery(".tabs-wrap:first").show(); 
	jQuery("li.weblusive-tabs").click(function() {
		jQuery(".admin-panel-tabs ul li").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".tabs-wrap").hide();
		var activeTab = jQuery(this).find("a").attr("href");
		jQuery(activeTab).fadeIn();
		return false;
	});
	
	
	/*jQuery("#theme-pattern input:checked").parent().addClass("selected");
	jQuery("#theme-pattern .checkbox-select").click(
		function(event) {
			event.preventDefault();
			jQuery("#theme-pattern li").removeClass("selected");
			jQuery(this).parent().addClass("selected");
			jQuery(this).parent().find(":radio").attr("checked","checked");			 
		}
	);	
	*/
	
	jQuery("#sidebar-position-options input:checked").parent().addClass("selected");
	jQuery("#sidebar-position-options .checkbox-select").click(
		function(event) {
			event.preventDefault();
			jQuery("#sidebar-position-options li").removeClass("selected");
			jQuery(this).parent().addClass("selected");
			jQuery(this).parent().find(":radio").attr("checked","checked");			 
		}
	);	

	jQuery(".weblusive-cats-options input:checked").parent().addClass("selected");
	jQuery(document).on("click", ".weblusive-cats-options .checkbox-select" , function(event){
		event.preventDefault();
		jQuery(this).parent().parent().find("li").removeClass("selected");
		jQuery(this).parent().addClass("selected");
		jQuery(this).parent().find(":radio").attr("checked","checked");			 
		
	});
	
	
	jQuery("#tabs_cats input:checked").parent().addClass("selected");
	jQuery("#tabs_cats span").click(
		function(event) {
			event.preventDefault();
			if( jQuery(this).parent().find(":checkbox").is(':checked') ){
				jQuery(this).parent().removeClass("selected");
				jQuery(this).parent().find(":checkbox").removeAttr("checked");			 
			}else{
				jQuery(this).parent().addClass("selected");
				jQuery(this).parent().find(":checkbox").attr("checked","checked");
			}				
		}
	);
	
	// Drag & Drop sorting 
	
	jQuery(function($) {
		$('#sortable-table tbody').sortable({
			axis: 'y',
			handle: '.column-order img',
			placeholder: 'ui-state-highlight',
			forcePlaceholderSize: true,
			update: function(event, ui) {
				var theOrder = $(this).sortable('toArray');
	
				var data = {
					action: 'sneek_update_post_order',
					postType: $(this).attr('data-post-type'),
					order: theOrder
				};
	
				$.post(ajaxurl, data);
			}
		}).disableSelection();
	
	});
	
	jQuery(function($) {
		$('#sortable-table-portfolio tbody').sortable({
			axis: 'y',
			handle: '.column-order',
			placeholder: 'ui-state-highlight',
			forcePlaceholderSize: true,
			update: function(event, ui) {
				var theOrder = $(this).sortable('toArray');
	
				var data = {
					action: 'portfolio_update_post_order',
					postType: $(this).attr('data-post-type'),
					order: theOrder
				};
	
				$.post(ajaxurl, data);
			}
		}).disableSelection();
	
	});
	 

});
		
function toggleVisibility(id) {
	var e = document.getElementById(id);
    if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}	

// tipsy, version 1.0.0a
(function(a){function b(a,b){return typeof a=="function"?a.call(b):a}function c(a){while(a=a.parentNode){if(a==document)return true}return false}function d(b,c){this.$element=a(b);this.options=c;this.enabled=true;this.fixTitle()}d.prototype={show:function(){var c=this.getTitle();if(c&&this.enabled){var d=this.tip();d.find(".tipsy-inner")[this.options.html?"html":"text"](c);d[0].className="tipsy";d.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var e=a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var f=d[0].offsetWidth,g=d[0].offsetHeight,h=b(this.options.gravity,this.$element[0]);var i;switch(h.charAt(0)){case"n":i={top:e.top+e.height+this.options.offset,left:e.left+e.width/2-f/2};break;case"s":i={top:e.top-g-this.options.offset,left:e.left+e.width/2-f/2};break;case"e":i={top:e.top+e.height/2-g/2,left:e.left-f-this.options.offset};break;case"w":i={top:e.top+e.height/2-g/2,left:e.left+e.width+this.options.offset};break}if(h.length==2){if(h.charAt(1)=="w"){i.left=e.left+e.width/2-15}else{i.left=e.left+e.width/2-f+15}}d.css(i).addClass("tipsy-"+h);d.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+h.charAt(0);if(this.options.className){d.addClass(b(this.options.className,this.$element[0]))}if(this.options.fade){d.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{d.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){a(this).remove()})}else{this.tip().remove()}},fixTitle:function(){var a=this.$element;if(a.attr("title")||typeof a.attr("original-title")!="string"){a.attr("original-title",a.attr("title")||"").removeAttr("title")}},getTitle:function(){var a,b=this.$element,c=this.options;this.fixTitle();var a,c=this.options;if(typeof c.title=="string"){a=b.attr(c.title=="title"?"original-title":c.title)}else if(typeof c.title=="function"){a=c.title.call(b[0])}a=(""+a).replace(/(^\s*|\s*$)/,"");return a||c.fallback},tip:function(){if(!this.$tip){this.$tip=a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');this.$tip.data("tipsy-pointee",this.$element[0])}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};a.fn.tipsy=function(b){function e(c){var e=a.data(c,"tipsy");if(!e){e=new d(c,a.fn.tipsy.elementOptions(c,b));a.data(c,"tipsy",e)}return e}function f(){var a=e(this);a.hoverState="in";if(b.delayIn==0){a.show()}else{a.fixTitle();setTimeout(function(){if(a.hoverState=="in")a.show()},b.delayIn)}}function g(){var a=e(this);a.hoverState="out";if(b.delayOut==0){a.hide()}else{setTimeout(function(){if(a.hoverState=="out")a.hide()},b.delayOut)}}if(b===true){return this.data("tipsy")}else if(typeof b=="string"){var c=this.data("tipsy");if(c)c[b]();return this}b=a.extend({},a.fn.tipsy.defaults,b);if(!b.live)this.each(function(){e(this)});if(b.trigger!="manual"){var h=b.live?"live":"bind",i=b.trigger=="hover"?"mouseenter":"focus",j=b.trigger=="hover"?"mouseleave":"blur";this[h](i,f)[h](j,g)}return this};a.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:.8,title:"title",trigger:"hover"};a.fn.tipsy.revalidate=function(){a(".tipsy").each(function(){var b=a.data(this,"tipsy-pointee");if(!b||!c(b)){a(this).remove()}})};a.fn.tipsy.elementOptions=function(b,c){return a.metadata?a.extend({},c,a(b).metadata()):c};a.fn.tipsy.autoNS=function(){return a(this).offset().top>a(document).scrollTop()+a(window).height()/2?"s":"n"};a.fn.tipsy.autoWE=function(){return a(this).offset().left>a(document).scrollLeft()+a(window).width()/2?"e":"w"};a.fn.tipsy.autoBounds=function(b,c){return function(){var d={ns:c[0],ew:c.length>1?c[1]:false},e=a(document).scrollTop()+b,f=a(document).scrollLeft()+b,g=a(this);if(g.offset().top<e)d.ns="n";if(g.offset().left<f)d.ew="w";if(a(window).width()+a(document).scrollLeft()-g.offset().left<b)d.ew="e";if(a(window).height()+a(document).scrollTop()-g.offset().top<b)d.ns="s";return d.ns+(d.ew?d.ew:"")}}})(jQuery)


