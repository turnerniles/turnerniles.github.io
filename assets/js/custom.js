(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

		$('#onedown').on('click',function(){
		$('html, body').animate({scrollTop:700},'50');
		})

		setTimeout(function(){
			$('#onedown').css({

			        "-webkit-animation-name":"rotatearrow",
			        "-webkit-animation-duration":"0.8s",
			        "-webkit-animation-iteration-count":"1",
			        "-webkit-animation-fill-mode" : "forwards",

						});}, 1000);
	});
})(jQuery);
