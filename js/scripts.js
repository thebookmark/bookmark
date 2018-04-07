
$(document).ready(function() {

	$(function() { $('body').hide().show(); });

	"use strict";


	FirstLoad();
	LazyLoad();
	HeroSection();
	AjaxLoad();
	HideShowHeader();
	MasonryPortfolio();
	//VirtualScr();
	FooterAppear();
	Sliders();
	Lightbox();
	AppearIteam();
	BackToTop();

	CollagePlus();
	PlayVideo();
	PageShare();

	toggler();
	rotater();
	changeDate();








});

$(window).on('load', function() {
	$('#return-to-top').click(function() {      // When arrow is clicked
				console.log("working!");
				$('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 1015);
    });


		$('#fadeandscale').popup({
				pagecontainer: '.container',
				transition: 'all 0.3s'
		});

});

function changeDate(){


	x=document.getElementsByClassName("copyright");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Updated April 2018";    // Change the content
    }
}



/*--------------------------------------------------
Function Scroll to Top
---------------------------------------------------*/
function scrollTop(){
	$('#return-to-top').click(function() {      // When arrow is clicked
				console.log("working!");
				$('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 1015);
    });
}

/*--------------------------------------------------
Function toggler
---------------------------------------------------*/

function toggler(){
	$("#toggler-challenge").click(function(){
		$("#div-challenge").slideToggle();
	});


	$("#toggler-research").click(function(){
		$("#div-research").slideToggle();
	});

	$("#toggler-ideation").click(function(){
		$("#div-ideation").slideToggle();
	});

	$("#toggler-testing").click(function(){
		$("#div-testing").slideToggle();
	});

	$("#toggler-final").click(function(){
		$("#div-final").slideToggle();
	});
}

/*--------------------------------------------------
Function toggler
---------------------------------------------------*/

function rotater(){
	$(".rotate").click(function(){
		$(this).toggleClass("down")  ;
	});

}








/*--------------------------------------------------
Function FirstLoad
---------------------------------------------------*/

	function FirstLoad() {

		$("html,body").animate({scrollTop: 0}, 1);

		$('.item-image').each(function() {
			var image = $(this).data('src');

			$(this).css({
				'background-image': 'url(' + image + ')'
			});
		});

		$('#menu-burger, #nav-container, #black-fade').on('click', function() {
			$('#menu-burger').toggleClass('open');
		});

		$('.project-next').on('click', function() {
			$('#main').addClass('hidden');
			$('header').addClass('menu-open');
		});

		$('a.ajax-link').on('click', function() {
			$(".page-overlay").addClass("from-bottom");
			$('#main').addClass('hidden');

		});

		$('.nav-title').on('mouseenter', function() {
			$(".nav-project-title").addClass('hover');
		}).on('mouseleave', function() {
			$(".nav-project-title").removeClass('hover');
		});

		$('#open-filters, .close-page-action, #shareproject').on('click', function() {
			$('.page-action-overlay').toggleClass('active');
		});

		$("header.solid, #image-border-left, #image-border-right, #menu-overlay").css('background', function () {
			return $("#page-content").data('bgcolor');
		});

		$("h1, h2, h3, h4, h5, h6, .hero-title, #open-filters, #open-share, #backtoworks, [data-tooltip], .light-content a.link, .post-title, .blog-numbers").css('color', function () {
			return $("#page-content").data('textcolor');
		});

		if( jQuery('.tooltip-hover').length > 0 ){

			var tooltips = document.querySelectorAll('.item-overlay');

			window.onmousemove = function (e) {
				var x = (e.clientX + 20) + 'px',
					y = (e.clientY + 20) + 'px';
				for (var i = 0; i < tooltips.length; i++) {
					tooltips[i].style.top = y;
					tooltips[i].style.left = x;
				}
			};

		}

		$('a.project-link').on('click', function() {
			$('#portfolio').addClass('hidden');
			setTimeout( function(){
				$(".page-overlay").addClass("from-bottom");
			} , 100 );

		});

		$('.next-project').hover(function(){
			$('.project-links').addClass('hover');
		},
		function(){
			$('.project-links').removeClass('hover');
		});



	}// End First Load

/*--------------------------------------------------
Function Hero Section
---------------------------------------------------*/

	function HeroSection() {


		var HeroCaption = document.getElementById('hero-caption');
		var windowScrolled;


		window.addEventListener('scroll', function windowScroll() {
			windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
			if ($('#hero-styles').hasClass("scale-onscroll")) {
				HeroCaption.style.transform = 'scale('+(100 - windowScrolled/100)/100+')';
			}
			if ($('#hero-styles').hasClass("parallax-onscroll")) {
				HeroCaption.style.transform = 'translate3d(' + windowScrolled / -2.5 + 'px, 0, 0)';
			}
			if ($('#hero-styles').hasClass("opacity-onscroll")) {
				HeroCaption.style.opacity =  (1 - (windowScrolled/20) / 20);
			}

			if( $('#hero-image').length > 0 ){
				if($(this).scrollTop() >= $('#hero-image').offset().top) {
					$("#hero-image").addClass("bgrelative");
				} else {
					$("#hero-image").removeClass("bgrelative");
				}
			}
		});
		if ($('#hero-styles').hasClass("normal-onscroll")) {
			$('#hero').addClass('normal');
			$('#hero-height').addClass('hidden');
		}

		$('.hero-title, .hero-subtitle, .overlay-hover .item-title, .overlay-hover .item-cat').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});
	}//End Hero Section



/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {

		setTimeout(function(){
			$('body').removeClass('hidden');
		} , 100 );

		if( $('#portfolio').length > 0 ){

			$('body').waitForImages({
				finished: function() {
					HeroColor();
					setTimeout( function(){
						$(".page-overlay").addClass("from-bottom-end");
						setTimeout( function(){
							$(".page-overlay").removeClass("from-bottom");
							$(".page-overlay").removeClass("from-bottom-end");
							setTimeout(function(){
								$("#all").trigger('click');
							} , 150 );
						} , 800 );
					} , 100 );
				},
				waitForAll: true
			});

		} else if( $('#hero-image').length > 0 ){

			$('#hero-image').waitForImages({
				finished: function() {
					HeroColor();
					setTimeout( function(){
						$(".page-overlay").addClass("from-bottom-end");
						setTimeout( function(){
							$(".page-overlay").removeClass("from-bottom");
							$(".page-overlay").removeClass("from-bottom-end");
						} , 800 );
					} , 100 );
				},
				waitForAll: true
			});

		} else {

			setTimeout( function(){
				HeroColor();
				$(".page-overlay").addClass("from-bottom-end");
				setTimeout( function(){
					$(".page-overlay").removeClass("from-bottom");
					$(".page-overlay").removeClass("from-bottom-end");
				} , 800 );
			} , 100 );
		}

	}// End Lazy Load



/*--------------------------------------------------
Function Ajax Load
---------------------------------------------------*/

	function AjaxLoad() {

		jQuery(document).ready(function(){
		  var isAnimating = false,
			newLocation = '';
			firstLoad = false;

		  //trigger smooth transition from the actual page to the new one
		  $('main').on('click', '[data-type="page-transition"]', function(event){
			event.preventDefault();
			//detect which page has been selected
			var newPage = $(this).attr('href');
			//if the page is not already being animated - trigger animation
			if( !isAnimating ) changePage(newPage, true);
			firstLoad = true;
		  });

		  //detect the 'popstate' event - e.g. user clicking the back button
		  $(window).on('popstate', function() {
			if( firstLoad ) {
			  /*
			  Safari emits a popstate event on page load - check if firstLoad is true before animating
			  if it's false - the page has just been loaded
			  */
			  var newPageArray = location.pathname.split('/'),
				//this is the url of the page to be loaded
				newPage = newPageArray[newPageArray.length - 1];

			  if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
			}
			firstLoad = true;
			});

			function changePage(url, bool) {
			isAnimating = true;
			// trigger page animation
			$('body').addClass('page-is-changing');
			$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				loadNewContent(url, bool);
			  newLocation = url;
			  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
			//if browser doesn't support CSS transitions
			if( !transitionsSupported() ) {
			  loadNewContent(url, bool);
			  newLocation = url;
			}
			}

			function loadNewContent(url, bool) {
				url = ('' == url) ? 'index.html' : url;

			var section = $('<div class="cd-main-content "></div>');


			section.load(url+' .cd-main-content > *', function(event){
			  // load new content and replace <main> content with the new one

			  $('main').html(section);

				$('header').addClass('initial');
				$('html, body').scrollTop(0);

			  //if browser doesn't support CSS transitions - dont wait for the end of transitions
			  var delay = ( transitionsSupported() ) ? 30 : 0;
			  setTimeout(function(){
				//wait for the end of the transition on the loading bar before revealing the new content
				$('body').removeClass('page-is-changing');
				$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				  isAnimating = false;
				  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});

				FirstLoad();
				HeroSection();
				LazyLoad();
				scrollTop();
				MasonryPortfolio();
				HideShowHeader();
				FooterAppear();
				Sliders();
				Lightbox();
				AppearIteam();
				BackToTop();

				CollagePlus();
				PlayVideo();
				PageShare();



				if( !transitionsSupported() ) isAnimating = false;
			  }, delay);
			  if(url!=window.location && bool){
				window.history.pushState({path: url},'',url);
			  }
				});
		  }

		  function transitionsSupported() {
			return $('html').hasClass('csstransitions');
		  }
		});


	}// End Ajax Load


/*--------------------------------------------------
Function Hide Show Header
---------------------------------------------------*/

	function HideShowHeader() {

			var didScroll;
			var lastScrollTop = 0;
			var delta = 50;
			var navbarHeight = 250;
			var navbarHideAfter = navbarHeight;

			$(window).scroll(function(event){
				didScroll = true;
			});

			if( $('.scroll-hide').length > 0 ){

				setInterval(function() {
					if (didScroll) {
						hasScrolled();
						didScroll = false;
					}
				}, 100);

			}

			return false;

			function hasScrolled() {
				var st = $(this).scrollTop();

				if(Math.abs(lastScrollTop - st) <= delta)
					return;

				if (st > lastScrollTop && st > navbarHideAfter){
					if( $('.scroll-hide').length > 0 ){
					$('header').addClass('nav-hide');
					}
				} else {
					if( $('.scroll-hide').length > 0 ){
					if(st + $(window).height() < $(document).height()) {
						$('header').removeClass('nav-hide');
					}
					}
				}

				lastScrollTop = st;
			}


	}//End Hide Show Header




/*--------------------------------------------------
Function Header Color
---------------------------------------------------*/


	function HeroColor() {
		$('#hero').waitForImages({
			finished: function() {
		if( $('#hero-height').length > 0 ){


			if ($('#hero-bg-image').hasClass("light-content")) {
				$('#hero-styles').addClass('light-content').addClass('animate');
				setTimeout(function(){
					$('header').addClass('light-content');
				} , 650 );
			}
			setTimeout(function(){
				$('#hero-caption').addClass('animate');
				$('#hero-height').removeClass('hidden');
			} , 250 );

		}
		},
			waitForAll: true
		});



	}// End Header Color




/*--------------------------------------------------
Function Masonry Portfolio
---------------------------------------------------*/

	function MasonryPortfolio() {

		if( $('#portfolio-wrap').length > 0 ){


			var $container = $('#portfolio');

			$container.isotope({
				layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});

			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector });
				return false;
			});

			$('#filters #all').on('click', function() {
				$('.item').removeClass('item-margins');
			});

			$(window).on( 'resize', function () {

				var winWidth = window.innerWidth;
				columnNumb = 1;
				var attr_col = $('#portfolio').attr('data-col');

				 if (winWidth >= 1466) {


					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() + 'px'});
					var portfolioWidth = $('#portfolio-wrap').width();

					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 2;

					postHeight = window.innerHeight;
					postWidth = Math.floor(portfolioWidth / columnNumb);
					$container.find('.item').each(function () {

						if ( $('#portfolio').attr('data-col') === '2' ) {

								$('.item').css( {
									width : postWidth * 2 + 'px',
									height : postWidth * 0.6   + 'px',
									margin : 0 + 'px',
								});

								$('.item.tall').css( {
									width : postWidth * 2  + 'px',
									height : postWidth * 1.2  + 'px',
									margin : 0 + 'px'
								});
						}

					});


				} else if (winWidth > 1024) {

					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 200 + 'px'});
					/*var*/portfolioWidth = $('#portfolio-wrap').width();

					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb);
					$container.find('.item').each(function () {

						$('.item').css( {
							width : postWidth * 2 + 'px',
							height : postWidth * 0.6   + 'px',
							margin : 0 + 'px',
						});

						$('.item.tall').css( {
							width : postWidth * 2  + 'px',
							height : postWidth * 1.2  + 'px',
							margin : 0 + 'px'
						});

					});


				}else if (winWidth > 767) {

					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 100 + 'px'});
					var portfolioWidth = $('#portfolio-wrap').width();

					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb);
					$container.find('.item').each(function () {

						$('.item').css( {
							width : postWidth * 2 + 'px',
							height : postWidth * 0.6   + 'px',
							margin : 0 + 'px',
						});

						$('.item.tall').css( {
							width : postWidth * 2  + 'px',
							height : postWidth * 1.2  + 'px',
							margin : 0 + 'px'
						});

					});


				}	else if (winWidth > 479) {

					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 80 + 'px'});
					var portfolioWidth = $('#portfolio-wrap').width();

					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)
					$container.find('.item').each(function () {

						$('.item').css( {
							width : postWidth * 2 + 'px',
							height : postWidth * 0.6   + 'px',
							margin : 0 + 'px',
						});

						$('.item.tall').css( {
							width : postWidth * 2  + 'px',
							height : postWidth * 1.2  + 'px',
							margin : 0 + 'px'
						});

					});


				}

				else if (winWidth <= 479) {

					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() -60 + 'px'});
					var portfolioWidth = $('#portfolio-wrap').width();

					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)
					$container.find('.item').each(function () {

						$('.item').css( {
							width : postWidth * 2 + 'px',
							height : postWidth * 1.3   + 'px',
							margin : 0 + 'px',
						});

						$('.item.tall').css( {
							width : postWidth * 2  + 'px',
							height : postWidth * 2.6  + 'px',
							margin : 0 + 'px'
						});

					});


				}
				return columnNumb;


			}).resize();

			$("#all").trigger('click');





				$('.item').removeClass('out-view');
				$(".item").addClass('in-view');
				var $animation_elements = $('.item');
				var $window = $(window);

				function check_if_in_view_down() {
				  var window_height = $window.height();
				  var window_top_position = $window.scrollTop();
				  var window_bottom_position = (window_top_position + window_height);

				  $.each($animation_elements, function() {
					var $element = $(this);
					var element_height = $element.outerHeight();
					var element_top_position = $element.offset().top;
					var element_bottom_position = (element_top_position + element_height);

				//check to see if this current container is within viewport



					if ((element_bottom_position >= window_top_position) &&	(element_top_position <= window_bottom_position)) {
						$element.addClass('in-view');
					} else {
					  	$element.removeClass('in-view');

					}
				});
				}



				var lastScrollTop = 0;
				$(window).scroll(function(event){
				   var st = $(this).scrollTop();
				   if (st > lastScrollTop){
					   $('.item').removeClass('out-view');
					   check_if_in_view_down();
				   } else {
					  $('.item').addClass('out-view');
					  check_if_in_view_down();
				   }
				   lastScrollTop = st;
				});

		}

	}//End MasonryPortfolio




/*--------------------------------------------------
Function Virtual Scroll
---------------------------------------------------*/

	function VirtualScr() {

		new SmoothScroll();

		function SmoothScroll(el) {
		var t = this, h = document.documentElement;
		el = el || window;
		t.rAF = false;
		t.target = 0;
		t.scroll = 0;
		t.animate = function() {
		t.scroll += (t.target - t.scroll) * 0.1;
		if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
		cancelAnimationFrame(t.rAF);
		t.rAF = false;}
		if (el == window) scrollTo(0, t.scroll);
		else el.scrollTop = t.scroll;
		if (t.rAF) t.rAF = requestAnimationFrame(t.animate);};
		el.onmousewheel = function(e) {
		e.preventDefault();
		e.stopPropagation();
		var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
		t.target += (e.wheelDelta > 0) ? -100 : 100;
		if (t.target < 0) t.target = 0;
		if (t.target > scrollEnd) t.target = scrollEnd;
		if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);};
		el.onscroll = function() {
		if (t.rAF) return;
		t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
		t.scroll = t.target;};
		}


	}// End First Load


/*--------------------------------------------------
Function FooterAppear
---------------------------------------------------*/

	function FooterAppear() {

		if( $('#page-content').length > 0 ){
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();

				if (scroll >= 300) {
					$(".progress-page, #page-action-holder").addClass('is-active');
				} else {
					$(".progress-page, #page-action-holder").removeClass('is-active');
				}
			});
		}

		var lastScroll = 0;

		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll > lastScroll) {
				$(".progress-page, #page-action-holder").addClass("is-visible");
			} else if (scroll < lastScroll) {
				$(".progress-page, #page-action-holder").removeClass("is-visible");
			}
			lastScroll = scroll;
		});

  }//End FooterAppear





/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/

	function Sliders() {

		$('.slider').owlCarousel({
			loop:true,
			margin:500,
			center: true,
			autoHeight:false,
			nav:true,
			navSpeed: 300,
			items:1,
		});

		if( $('.slider').length > 0 ){
			setTimeout(function(){
				$('.owl-prev').append('<span>Prev</span>');
				$('.owl-next').append('<span>Next</span>');
					var tooltips  = document.querySelectorAll('.owl-controls span');
					window.onmousemove = function (e) {
						var x = (e.clientX + 30) + 'px',
							y = (e.clientY - 30) + 'px';
						for (var i = 0; i < tooltips.length; i++) {
							tooltips[i].style.top = y;
							tooltips[i].style.left = x;
						}
					};
			} , 50 );
		}

		$('.carousel').owlCarousel({
			loop:true,
			margin:20,
			autoHeight:false,
			nav: true,
			navSpeed: 600,
			responsive:{
				0:{
					items:1
				},
				479:{
					items:2
				},
				1024:{
					items:3
				},
				1466:{
					items:3
				}
			}
		});

		if( $('.text-carousel').length > 0 ){
			$(".text-carousel").owlCarousel({
				loop:true,
				dots:true,
				dotsEach: 1,
				items:1,
				autoplay:true,
				smartSpeed: 750,
				autoplayHoverPause:true
			});
		}


	}//End Sliders



/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/

	function Lightbox() {

		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',
			gallery: {
			  enabled:true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

	}//End Lightbox




/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/

	function AppearIteam() {

		$('.has-animation').each(function() {
			$(this).appear(function() {
				$(this).delay($(this).attr('data-delay')).queue(function(next){
					$(this).addClass('animate-in');
					next();
				});
			});
		});

	}//End AppearIteam



/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/

	function BackToTop() {

		$('.scrolltotop').on('click', function() {
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});

		$(".flexnav").flexNav({ 'animationSpeed' : 0 });

	}//End BackToTop







/*--------------------------------------------------
Function Collage Plus
---------------------------------------------------*/

	function CollagePlus() {

		if( $('.collage').length > 0 ){

			$.fn.removeSpace = function(){
			  $(this).contents().filter(function() {
				return this.nodeType === 3;
			  }).remove();
			};

			$('.collage').removeSpace();

			$('#main').waitForImages({
				finished: function() {

					$('.collage').collagePlus(
						{
							'targetHeight'    : 510,
							'fadeSpeed'       : "fast",
							'effect'          : 'default',
							'direction'       : 'vertical',
							'allowPartialLastRow'       : true,
						}
					);

				},
			waitForAll: true
			});

		}

	}//End Collage Plus


/*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/


	function PlayVideo() {

		if( jQuery('.video-wrapper').length > 0 ){


			$('.video-cover').on('click', function() {
				$(this).addClass('hidden');
				setTimeout(function(){
					$(".bgvid").trigger("click");
				} , 300 );
			});

			var video = $('#myVideo');

			//remove default control when JS loaded
			video[0].removeAttribute("controls");
			$('.control').fadeIn(500);
			$('.caption').fadeIn(500);

			//before everything get started
			video.on('loadedmetadata', function() {

				//set video properties
				$('.current').text(timeFormat(0));
				$('.duration').text(timeFormat(video[0].duration));


				//start to get video buffering data
				setTimeout(startBuffer, 150);

				//bind video events
				$('.videoContainer').on('hover', function() {
					$('.control').stop().fadeIn();
					$('.caption').stop().fadeIn();
				}, function() {
					if(!volumeDrag && !timeDrag){
						$('.control').stop().fadeOut();
						$('.caption').stop().fadeOut();
					}
				})

			});

			//display video buffering bar
			var startBuffer = function() {
				var currentBuffer = video[0].buffered.end(0);
				var maxduration = video[0].duration;
				var perc = 100 * currentBuffer / maxduration;
				$('.bufferBar').css('width',perc+'%');

				if(currentBuffer < maxduration) {
					setTimeout(startBuffer, 500);
				}
			};

			//display current video play time
			video.on('timeupdate', function() {
				var currentPos = video[0].currentTime;
				var maxduration = video[0].duration;
				var perc = 100 * currentPos / maxduration;
				$('.timeBar').css('width',perc+'%');
				$('.current').text(timeFormat(currentPos));
			});

			//CONTROLS EVENTS
			//video screen and play button clicked
			video.on('click', function() { playpause(); } );

			var playpause = function() {
				if(video[0].paused || video[0].ended) {
					video[0].play();
				}
				else {
					video[0].pause();
				}
			};


			//fullscreen button clicked
			$('.btnFS').on('click', function() {
				if($.isFunction(video[0].webkitEnterFullscreen)) {
					video[0].webkitEnterFullscreen();
				}
				else if ($.isFunction(video[0].mozRequestFullScreen)) {
					video[0].mozRequestFullScreen();
				}
				else {
					alert('Your browsers doesn\'t support fullscreen');
				}
			});

			//sound button clicked
			$('.sound').on('click', function() {
				video[0].muted = !video[0].muted;
				$(this).toggleClass('muted');
				if(video[0].muted) {
					$('.volumeBar').css('width',0);
				}
				else{
					$('.volumeBar').css('width', video[0].volume*100+'%');
				}
			});

			//VIDEO EVENTS
			//video canplay event
			video.on('canplay', function() {
				$('.loading').fadeOut(100);
			});

			//video canplaythrough event
			//solve Chrome cache issue
			var completeloaded = false;
			video.on('canplaythrough', function() {
				completeloaded = true;
			});

			//video ended event
			video.on('ended', function() {
				video[0].pause();
			});

			//video seeking event
			video.on('seeking', function() {
				//if video fully loaded, ignore loading screen
				if(!completeloaded) {
					$('.loading').fadeIn(200);
				}
			});

			//video seeked event
			video.on('seeked', function() { });

			//video waiting for more data event
			video.on('waiting', function() {
				$('.loading').fadeIn(200);
			});

			//VIDEO PROGRESS BAR
			//when video timebar clicked
			var timeDrag = false;	/* check for drag event */
			$('.progress').on('mousedown', function(e) {
				timeDrag = true;
				updatebar(e.pageX);
			});
			$(document).on('mouseup', function(e) {
				if(timeDrag) {
					timeDrag = false;
					updatebar(e.pageX);
				}
			});
			$(document).on('mousemove', function(e) {
				if(timeDrag) {
					updatebar(e.pageX);
				}
			});
			var updatebar = function(x) {
				var progress = $('.progress');

				//calculate drag position
				//and update video currenttime
				//as well as progress bar
				var maxduration = video[0].duration;
				var position = x - progress.offset().left;
				var percentage = 100 * position / progress.width();
				if(percentage > 100) {
					percentage = 100;
				}
				if(percentage < 0) {
					percentage = 0;
				}
				$('.timeBar').css('width',percentage+'%');
				video[0].currentTime = maxduration * percentage / 100;
			};

			//Time format converter - 00:00
			var timeFormat = function(seconds){
				var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
				var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
				return m+":"+s;
			};

		}

	}// End PlayVideo


/*--------------------------------------------------
Function Page Share
---------------------------------------------------*/

	function PageShare() {


		$("#share").jsSocials({
            showLabel: false,
    		showCount: false,
    		shares: ["facebook", "twitter", "googleplus", "pinterest"]
        });

	}//End PageShare
