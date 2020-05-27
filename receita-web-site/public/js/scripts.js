
(function ($) {

    "use strict";

        function isExists(elem){
			if ($(elem).length > 0) { 
				return true;
			}
	    	return false;
		}
		
		$('.grid').masonry({
			// options
			itemSelector: '.grid-item',
		});

	$(window).on('load', function(){
		
		// ISOTOPE RECEITA WITH FILTER
		if(isExists('.grid')){
			var $container = $('.grid');
			$container.isotope({
				filter: '*',
				layoutMode: 'masonry',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		 
			$('.receitaFilter a').click(function(){  
				$('.receitaFilter .active').removeClass('active');
				$(this).addClass('active');
		 
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					layoutMode: 'masonry',
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				 });
				 return false;
			}); 
		}
	
	});
	
	
	$('a[href="#"]').on('click', function(event){
		return;
	});
	
	
})(jQuery);
