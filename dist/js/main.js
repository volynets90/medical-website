$('.accordion__item').next().hide();
		$('.accordion__item').click(function(){
			$(this).next().slideToggle();
			$('.accordion__item').not(this).next().stop(true,true).slideUp();
});