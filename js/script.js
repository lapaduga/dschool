$(document).ready(function(){
	$('.header__school-burger, .close-menu-area').click(function(event){
		$('.header__school-burger, .bg-for-menu, .header__school-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__school-mobile-phone, .school-button').toggleClass('visibility');
	});
	$('.header__school-link').click(function(event){
		$('.header__school-burger, .bg-for-menu, .header__school-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});