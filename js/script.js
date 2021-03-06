$(document).ready(function () {
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
		if (document.documentElement.clientWidth > 767) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header__school-body").style.height = "50px";
				document.getElementById("school-button").style.display = "none";
			} else {
				document.getElementById("header__school-body").style.height = "125px";
				document.getElementById("school-button").style.display = "inline-block";
			}
		} else {
			document.getElementById("header__school-body").style.height = "50px";
			document.getElementById("school-button").style.display = "none";
		}
	}
	$('.header__school-burger, .close-menu-area, .header__school-link').click(function (event) {
		$('.header__school-burger, .bg-for-menu, .header__school-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__school-mobile-phone, .school-button').toggleClass('visibility');
	});
	$('.choice__slider, .about__slider-2').slick({
		arrows: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		easing: 'ease',
		autoplay: true,
		touchThreshold: 10,
		centerMode: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false
				}
			}
		]
	});
	$('.about__slider-1').slick({
		arrows: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		easing: 'ease',
		autoplay: true,
		autoplaySpeed: 1500,
		touchThreshold: 10,
		centerMode: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
					centerMode: false,
					variableWidth: false
				}
			}
		]
	});
	$('.testimonials__slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		easing: 'ease',
		touchThreshold: 10,
		centerMode: true,
		variableWidth: true,
		appendArrows: $('.testimonials')
	});
	$('.structure__spoiler-head').click(function (event) {
		if ($('.structure__spoilers').hasClass('one')) {
			$('.structure__spoiler-head').not($(this)).removeClass('active');
			$('.structure__spoiler-body').not($(this).next()).slideUp('300');
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	$('#choice__input-1, #choice__input-2').on('focus', function (e) {
		$(this).attr('placeholder', '');
	});
	$('#choice__input-1, #choice__input-2').on('blur', function (e) {
		$('#choice__input-1').attr('placeholder', 'Имя');
		$('#choice__input-2').attr('placeholder', 'Email');
	});
	$('#choice__button').on('click', function (e) {
		if ($('#choice__input-1').val() == '') {
			$('#choice__input-1').css('border', '1px solid red');
		} else {
			$('#choice__input-1').css('border', '1px solid #e3e3e3');
			$('#choice__input-1').on('mouseenter', function () {
				$(this).css('border', '1px solid #000000');
			});
			$('#choice__input-1').on('mouseleave', function () {
				$(this).css('border', '1px solid #e3e3e3');
			});
		}
		if ($('#choice__input-2').val() == '') {
			$('#choice__input-2').css('border', '1px solid red');
		} else {
			$('#choice__input-2').css('border', '1px solid #e3e3e3');
			$('#choice__input-2').on('mouseenter', function () {
				$(this).css('border', '1px solid #000000');
			});
			$('#choice__input-2').on('mouseleave', function () {
				$(this).css('border', '1px solid #e3e3e3');
			});
		}
	});
	$('#popup__unibutton').on('click', function (e) {
		if ($('#popup__input-1').val() == '') {
			e.preventDefault();
			$('#popup__input-1').css('border', '1px solid #AD6060');
		} else {
			$('#popup__input-1').css('border', '1px solid #e3e3e3');
			$('#popup__input-1').on('mouseenter', function () {
				$(this).css('border', '1px solid #000000');
			});
			$('#popup__input-1').on('mouseleave', function () {
				$(this).css('border', '1px solid #e3e3e3');
			});
		}
		if ($('#popup__input-2').val() == '') {
			e.preventDefault();
			$('#popup__input-2').css('border', '1px solid #AD6060');
		} else {
			$('#popup__input-2').css('border', '1px solid #e3e3e3');
			$('#popup__input-2').on('mouseenter', function () {
				$(this).css('border', '1px solid #000000');
			});
			$('#popup__input-2').on('mouseleave', function () {
				$(this).css('border', '1px solid #e3e3e3');
			});
		}
	});
	$('#popup__input-1, #popup__input-2').on('focus', function (e) {
		$(this).attr('placeholder', '');
	});
	$('#popup__input-1, #popup__input-2').on('blur', function (e) {
		$('#popup__input-1').attr('placeholder', 'Имя');
		$('#popup__input-2').attr('placeholder', 'Email');
	});
});