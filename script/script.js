var isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

$(document).ready(function() {
	$('.menu-burger').click(function() {
		$('.header__menu,.menu-burger').toggleClass('active');
	}),
	// $('#openContact').click(function() {
	// 	$('.contact__content,.contact').addClass('activ');
	// }),
	$('#closeContact').click(function() {
		$('.contact__content,.contact').removeClass('activ');
	}),
	$('.input,input').focus(function() {
		$(this).addClass('focus');
	}),
	$('.input,input').blur(function() {
		$(this).removeClass('focus');
	}),
	$("a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 900);
		return false;
	});
});


$(window).on('scroll', function() {
	if($(window).scrollTop() >= 1){
		$('.header__topnav,.header-bg').addClass('active');
	}else{
		$('.header__topnav,.header-bg').removeClass('active');
	}
});

var scroll
if(isMobile.any()){
	$('body').addClass('touch');
} else {
	$('body').addClass('mouse');
}