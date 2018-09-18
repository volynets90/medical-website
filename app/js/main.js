$('.accordion__item').next().hide();
$('.accordion__item').click(function () {
	
	
	$(this).next().slideToggle();
	$('.accordion__item').removeClass('accordion_h4_default_clicked');
	$('.accordion__item').not(this).next().stop(true, true).slideUp();
	if($(this).hasClass('accordion_h4_default_clicked'))
	{
		$(this).removeClass('accordion_h4_default_clicked');
	}
	else{
		$(this).addClass('accordion_h4_default_clicked');
	}
});
/*
function toggleBtnBg(){
	$('.accordion__item').click(function () {
		$('.accordion__item').removeClass('accordion_h4_default_clicked');
		$(this).addClass('accordion_h4_default_clicked');
	});
}/*
function removeBgBtn(){
	console.log('unpress');
	if($('.accordion__item').hasClass('accordion_h4_default_clicked'))
	{	console.log('unpress2');
		$('.accordion__item').removeClass('accordion_h4_default_clicked');
		console.log('unpress3');
	}
	
}*/