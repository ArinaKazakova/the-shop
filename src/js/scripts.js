// Your code here...
$(document).ready(function(){
$(".color-white").on('click' , function(){
	if(!$(this).hasClass('pick')){
		$(this).siblings().removeClass('pick');
		$(this).addClass('pick');
	}
	if(!$(".white").hasClass('top')){
		$(".white").siblings().removeClass('top');
		$(".white").addClass('top');
	}
/*	$(this).addClass('pick');
	$(".color__green").removeClass("pick");
	$(".color__yellow").removeClass("pick");
	$(".white").addClass("top");
	$(".green").removeClass("top");
	$(".yellow").removeClass("top");*/
});

$(".color-green").on('click' , function(){
		if(!$(this).hasClass('pick')){
		$(this).siblings().removeClass('pick');
		$(this).addClass('pick');
	}
	if(!$(".green").hasClass('top')){
		$(".green").siblings().removeClass('top');
		$(".green").addClass('top');
	}
	/*$(this).addClass('pick');
	$(".color__yellow").removeClass("pick");
	$(".color__white").removeClass("pick");
	$(".green").addClass("top");
	$(".yellow").removeClass("top");
	$(".white").removeClass("top");*/
});

$(".color-yellow ").on('click' , function(){
		if(!$(this).hasClass('pick')){
		$(this).siblings().removeClass('pick');
		$(this).addClass('pick');
	}
	if(!$(".yellow").hasClass('top')){
		$(".yellow").siblings().removeClass('top');
		$(".yellow").addClass('top');
	}
	/*$(this).addClass('pick');
	$(".color__green").removeClass("pick");
	$(".color__white").removeClass("pick");
	$(".yellow").addClass("top");
	$(".green").removeClass("top");
	$(".white").removeClass("top");*/
});



	$('.item__description-size a').click(function(){
		if(!$(this).hasClass('pick')){
		$(this).siblings().removeClass('pick');
		$(this).addClass('pick');
}
});

$(".nav__link-menu").on('click' , function(){
	$(".nav__link").slideToggle();
});

});