$(document).ready(function(){
	$('.header__school-burger').click(function(event){
		$('.header__school-burger, .bg-for-menu, .header__school-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});