$(document).ready(function() {
	$('.menu-burger').click(function() {
		$('.header__menu,.menu-burger').toggleClass('active');
	}),
	$('#openContact').click(function() {
		$('.contact__content,.contact').addClass('activ');
	}),
	$('#closeContact').click(function() {
		$('.contact__content,.contact').removeClass('activ');
	}),
	$('.input,input').focus(function() {
		$(this).addClass('focus');
	}),
	$('.input,input').blur(function() {
		$(this).removeClass('focus');
	})
	$('.header__content-arrow').click(function() {
		$('html,body').animate({scrollTop: 780}, 1000);
	});
});

$(window).on('scroll', function() {
	if($(window).scrollTop() >= 50){
		$('.header__topnav,.header-bg').addClass('active');
	}else{
		$('.header__topnav,.header-bg').removeClass('active');
	}
});
