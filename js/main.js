$(document).ready(function () {
	$('.homeSlider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<i class="icon-home-left"></i>',
		nextArrow: '<i class="icon-home-right"></i>'
	});
	// Элемент, куда вы хотите записать страницы
	let pages = $('.pagingInfo');
	// Элемент слайдера
	let slider = $('.homeSlider');


	slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

		let i = (currentSlide ? currentSlide : 0) + 1;
		pages.html('<span class="current-slide">' + i + '</span>' + '<span class="all-slide">/' + slick.slideCount + '</span>');
	});
	$('.home-description__current').on('click', function () {
		$('.home-description__text').toggleClass('active');
	});
	$('.toggleMenu').on('click', function () {
		$('.menu-category').slideToggle();
	});
	$('.pro-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<i class="icon-home-left-1"></i>',
		nextArrow: '<i class="icon-home-right-1"></i>'
	});
	let slider2 = $('.homeSlider');
	slider2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

		let i = (currentSlide ? currentSlide : 0) + 1;
		pages.html('<span class="current-slide">' + i + '</span>' + '<span class="all-slide">/' + slick.slideCount + '</span>');
	});

	// Слайдер на странице basket
	$('.basketSlider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		cssEase: 'linear',
		prevArrow: '<i class="icon-basket-left"></i>',
		nextArrow: '<i class="icon-basket-right"></i>',
		responsive: [

			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 320,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<i class="icon-basket-left"></i>',
				nextArrow: '<i class="icon-basket-right"></i>'

			}
		]
	});

	// Элемент, куда вы хотите записать страницы
	let x = $('.pagingInfoBask');
	// Элемент слайдера
	let y = $('.basketSlider');


	y.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

		let i = (currentSlide ? currentSlide : 0) + 1;
		x.html('<span class="current-slideBask">' + i + '</span>' + '<span class="all-slideBask">/' + slick.slideCount + '</span>');
	});


	// Элемент, куда вы хотите записать страницы
	let x2 = $('.pagingInfoBask2');
	// Элемент слайдера
	let y2 = $('.basketSlider');


	y2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

		let i = (currentSlide ? currentSlide : 0) + 1;
		x2.html('<span class="current-slideBask2">' + i + '</span>' + '<span class="all-slideBask2">/' + slick.slideCount + '</span>');
	});



	//аккордеон на странице basket2

	let linkOpen = $('.accordion_head');
	let linkOpen2 = $('.formBtn');
	let linkOpen3 = $('.delivery');
	let linkOpen4 = $('.accordion_head2');

	linkOpen.click(function (event) {
		event.preventDefault();
		$(".accordion_body").css({
			'display': 'flex'
		});
		// $(".formBottom").css({
		// 	'display': 'none'
		// });
		$(".formMiddle").css({
			'display': 'none'
		});
		$('.active').css({
			'color': '#2b2a28'
		});
		$('.formTop__item p').css({
			'color': '#ff9f1b'
		});
		$(".bottom").css({
			'display': 'none'
		});
		$('.titleForm3').css({
			'color': '#2b2a28'
		});
	});

	linkOpen2.click(function (event) {
		event.preventDefault();
		$('.formMiddle').css({
			'display': 'flex'

		});
		$(".accordion_body").css({
			'display': 'none'
		});
		$('.active').css({
			'color': '#ff9f1b'
		});
		$('.formMiddleTitle').css({
			'border-bottom': ' 1px solid #e5e5e5',
			'background': '#ffffff'
		});
		$('.formBottom').css({
			'margin-top': '40px'
		});
		linkOpen.css({
			'display': 'block'
		});
		$('.formTop__item p').css({
			'color': '#2b2a28'
		});

	})

	linkOpen3.click(function (event) {
		event.preventDefault();
		$(".bottom").css({
			'display': 'flex'
		});
		$('.formMiddle').css({
			'display': 'none'
		});
		$('.formBottom__item').css({
			'background': '#ffffff'
		});
		$('.titleForm3').css({
			'color': '#ff9f1b'
		});
		$('.active').css({
			'color': '#2b2a28'
		});
		$('.accordion_head2').css({
			'display': 'block'
		});
		$('.formBottom').css({
			'display': 'flex'
		});
		$('.formTop__item p').css({
			'color': '#2b2a28'
		});
	});

	linkOpen4.click(function (event) {
		event.preventDefault();
		$(".bottom").css({
			'display': 'none'
		});
		$(".formMiddle").css({
			'display': 'flex'
		});
		linkOpen4.css({
			'display': 'none'
		});
		$('.titleForm3').css({
			'color': '#2b2a28'
		});
		$('.active').css({
			'color': '#ff9f1b'
		});
	});



	//таблица 

	$('.show-product').click(function (event) {
		event.preventDefault();
		$('.show-table').css({
			'display': 'flex'
		});
	});

	$('.show-product2').click(function (event) {
		event.preventDefault();
		$('.show-table2').css({
			'display': 'flex'
		});
	});

	/*настраиваем модальное окно*/

	$('.popup-btn').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});
	$('.popup-close').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});




	/*ховер при наведении Сотрудничество*/

	$('.slider-coop__item1').mouseenter(function () {
			$('.left-block__item1').css({
				'display': 'none',
			});
			$('.left-block__item2').css({
				'display': 'block'
			});
			// $('.slider-coop__item1 p').css({
			// 	'display': 'none'
			// });
			// навели курсор на объект (не учитываются переходы внутри элемента)
		})
		.mouseleave(function () {
			$('.left-block__item1').css({
				'display': 'block'
			});
			$('.left-block__item2').css({
				'display': 'none'
			});
			// $('.slider-coop__item1 p').css({
			// 	'display': 'block'
			// });
			// отвели курсор с объекта (не учитываются переходы внутри элемента)
		});

	/*ховер при наведении Сотрудничество*/

	$('.slider-coop__item2').mouseenter(function () {
			$('.left-block__item1').css({
				'display': 'none',
			});
			$('.left-block__item3').css({
				'display': 'block',
			});
			// $('.slider-coop__item2 p').css({
			// 	'display': 'none'
			// });
			// навели курсор на объект (не учитываются переходы внутри элемента)
		})
		.mouseleave(function () {
			$('.left-block__item1').css({
				'display': 'block'
			});
			$('.left-block__item3').css({
				'display': 'none'
			});
			// $('.slider-coop__item2 p').css({
			// 	'display': 'block'
			// });
			// отвели курсор с объекта (не учитываются переходы внутри элемента)
		});

	/*ховер при наведении Сотрудничество*/

	$('.slider-coop__item3').mouseenter(function () {
			$('.left-block__item1').css({
				'display': 'none',
			});
			$('.left-block__item4').css({
				'display': 'block',
			});
			// $('.slider-coop__item3 p').css({
			// 	'display': 'none'
			// });
			// навели курсор на объект (не учитываются переходы внутри элемента)
		})
		.mouseleave(function () {
			$('.left-block__item1').css({
				'display': 'block'
			});
			$('.left-block__item4').css({
				'display': 'none'
			});
			// $('.slider-coop__item3 p').css({
			// 	'display': 'block'
			// });
			// отвели курсор с объекта (не учитываются переходы внутри элемента)
		});




	// Слайдер на странице Сотрудничество
	$('.slider-coop').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 1,
		cssEase: 'linear',
		prevArrow: '<i class="icon-coop3-left"></i>',
		nextArrow: '<i class="icon-coop3-right"></i>',
		responsive: [


			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					prevArrow: '<i class="icon-coop3-left"></i>',
					nextArrow: '<i class="icon-coop3-right"></i>'
				}
			},

		]
	});



	// Слайдер на странице Сотрудничество 2 блок
	$('.catalog-coop__right__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 2,
		slidesToScroll: 1,
		cssEase: 'linear',
		prevArrow: '<i class="icon-coop-left"></i>',
		nextArrow: '<i class="icon-coop-right"></i>',
		responsive: [

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// Слайдер на странице Сотрудничество 2 блок
	$('.catalog-coop2__right__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 2,
		slidesToScroll: 1,
		cssEase: 'linear',
		prevArrow: '<i class="icon-coop-left2"></i>',
		nextArrow: '<i class="icon-coop-right2"></i>',
		responsive: [

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Слайдер на странице Сотрудничество блок лого
	$('.sliderTwo').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		cssEase: 'linear',
		prevArrow: '<i class="icon-logo-left2"></i>',
		nextArrow: '<i class="icon-logo-right2"></i>',
		responsive: [

			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					prevArrow: '<i class="icon-logo-left2"></i>',
					nextArrow: '<i class="icon-logo-right2"></i>',
				}
			},
			{
				breakpoint: 321,
				slidesToShow: 1,
				slidesToScroll: 4,
				prevArrow: '<i class="icon-logo-left2"></i>',
				nextArrow: '<i class="icon-logo-right2"></i>'

			}
		]
	});


	// меню
	var link = $('.icon-menu');
	var link_active = $('.menu-link_active');
	var menu = $('.nav');
	var nav_link = $('.menu a') //убираем меню по клику на ссылку

	$('.menu-button').click(function () {
		link.toggleClass('icon-menu_active');
		menu.toggleClass('nav_active');
	});



});