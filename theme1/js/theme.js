;(function($) {
    "use strict"; 
    
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 295) {
                    $(".main_header_area").addClass("navbar_fixed");
                } else {
                    $(".main_header_area").removeClass("navbar_fixed");
                }
            });
            
            //* nav_searchFrom
            $('.nav_searchFrom').on('click',function(){
                $('.searchForm').toggleClass('show');
                return false
            });
            $('.form_hide').on('click',function(){
                $('.searchForm').removeClass('show')
            });
            
            // toggle_menu
            $(".menu_opener").on('click', function () {
                $(".toggle_menu").toggleClass("active");
            });
            $("section, .close").on('click', function () {
                $(".toggle_menu").removeClass("active");
            });
        };
    };   
    
    /* Main Slider js */
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:9000,
                disableProgressBar:"off",  
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,540],
                gridwidth:[1170,1000,750,700,500],
                gridheight:[880,800,650,500,500],
                lazyType:"smart", 
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    };
    
    //* Magnificpopup js
    function magnificPopup() {
        if ($('.example_video, .fetured_project').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });  
            // Image popups
            $('.project_img').magnificPopup({
                delegate: 'a',
                type: 'image',
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () { 
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },
                closeOnContentClick: true,
                midClick: true
            });
        };
    }; 
     
   //* Counter Js 
    function counterUp(){
        if ( $('.counter_area').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        };
    };  
    
    //* Parallaxmouse js
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene); 
        };
    }; 
    
    //* Isotope js
    function protfolioIsotope(){
        if ( $('.protfoli_inner').length ){ 
            // Activate isotope in container
            $(".protfoli_inner").imagesLoaded( function() {
                $(".protfoli_inner").isotope({
                    layoutMode: 'masonry',  
                }); 
            });  
            
            // Add isotope click function 
            $(".protfoli_filter li").on('click',function(){
                $(".protfoli_filter li").removeClass("active");
                $(this).addClass("active"); 
                var selector = $(this).attr("data-filter");
                $(".protfoli_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  
        };
    };  
    
    // Scroll to top
    function scrollToTop() {
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.scroll-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }   
    
    // Preloader JS
    function preloader(){
        if( $('#preloader').length ){
            $(window).on('load', function() {
                $('#preloader').fadeOut();
                $('#preloader').delay(50).fadeOut('slow');  
            })   
        }
    }
    
    /*Function Calls*/
    new WOW().init();
    main_slider ();
    navbarFixed (); 
    magnificPopup (); 
    scrollToTop (); 
    counterUp ();
    parallaxMouse ();
    protfolioIsotope ();
    preloader ();
    
})(jQuery);