$(document).ready(function () {
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
		if (document.documentElement.clientWidth > 900) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header__school-body").style.height = "50px";
				document.getElementById("school-button").style.display = "none";
			} else {
				document.getElementById("header__school-body").style.height = "125px";
				document.getElementById("school-button").style.display = "inline-block";
			}
		} else{
			document.getElementById("header__school-body").style.height = "50px";
			document.getElementById("school-button").style.display = "none";
		}
	}
	$('.header__school-burger, .close-menu-area, .header__school-link').click(function (event) {
		$('.header__school-burger, .bg-for-menu, .header__school-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__school-mobile-phone, .school-button').toggleClass('visibility');
	});
	$('.choice__slider').slick({
		arrows: false,
		adaptiveHeight: true,
		slidesToShow:4,
		easing:'ease',
		autoplay: true,
		touchThreshold:10,
		centerMode: true,
		variableWidth: true
		
	});
});