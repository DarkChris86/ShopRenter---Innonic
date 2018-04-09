jQuery(document).ready(function($){
    
    
    
    /*--------------------------------------------------
        Mobile Menu Navigation
    ---------------------------------------------------*/
    
    $('body').on('click', '#burger__menu', function () {
        $('body').toggleClass('menu__visible');
    });
    
    $('body').on('click', '#body__click', function () {
        $('body').removeClass('menu__visible');
    });
    
    $('body').on('click', '#search__button', function () {
        $('body').toggleClass('search__visible');
        $('#mobile__search input').focus();
    });
    
    
    
    
    if ($(window).width() > 991) {
        
        var nav = $('#nav');
        
        if (nav.length) {
        
            $(window).scroll( function() {

                if($(window).scrollTop() > 120) {

                    $("body").addClass("sticky");

                } else {

                    $("body").removeClass("sticky")
                }

            });
            
        }
        
    }
    

    
    /*--------------------------------------------------
        Function SwiperCarousel
    ---------------------------------------------------*/	
	
    SwiperCarousel();
    
	function SwiperCarousel() {
		
		if( $('.banner__slider').length > 0 ) {
            
            var swiper = new Swiper('.banner__slider', {
              slidesPerView: 1,
              spaceBetween: 0,
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
              },
              grabCursor: true,
              simulateTouch: true,
            });
			
        }
        
        if( $('.today__offers').length > 0 ) {

            var swiper = new Swiper('.today__offers', {
              slidesPerView: 4,
              spaceBetween: 0,
              loop: true,
              navigation: {
                nextEl: '#today__offers .button-next',
                prevEl: '#today__offers .button-prev',
              },
              grabCursor: true,
              simulateTouch: true,
              breakpoints: {
                1199: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                }
              }
            });
            
        }
    }
    

    
    /*--------------------------------------------------
        Scroll to Top
    ---------------------------------------------------*/	
    
    if( $('#back__to__top').length > 0 ) {
    
        $(function () {
            
            $(window).scroll(function () {
                
                if ($(this).scrollTop() > 1500) {
                    $("#back__to__top").addClass("active");
                } else {
                    $("#back__to__top").removeClass("active");
                }
                
            });

            $("#back__to__top").click(function () {

                $("body,html").animate({
                    scrollTop: 0
                }, 800);

                return false;

            });

        });
    
    }
    
    
});