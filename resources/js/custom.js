jQuery(function ($) {
    "use strict";

    //Variable for caching
    var windowElement = $(window);

    /* ========================================================================= */
    /*	Page Preloader
    /* ========================================================================= */
    windowElement.on('load', function () {
        calculateNavHeight();
        $('#preloader').attr('style', 'display:none');
    });

    /* ========================================================================= */
    /*	Post image slider
    /* ========================================================================= */
    $("#post-thumb, #gallery-post").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000

    });

    $("#features").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* ========================================================================= */
    /*	Menu item highlighting
    /* ========================================================================= */
    $("#navigation").sticky({
        topSpacing: 0
    });

    /* ========================================================================= */
    /*	Magnific popup
    /* =========================================================================  */
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 160,
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true,
        fixedContentPos: false,
        fixedBgPos: true
    });

    /* ========================================================================= */
    /*	Portfolio Filtering Hook
    /* =========================================================================  */
    var mixer = mixitup('.portfolio-items-wrapper');

    /* ========================================================================= */
    /*	Testimonial Carousel
    /* =========================================================================  */
    $("#testimonials").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* ========================================================================= */
    /*	Animated section
    /* ========================================================================= */
    var wow = new WOW(
        {
            offset: 100,
            mobile: false
        }
    );
    wow.init();

    /* ========================================================================= */
    /*	Smooth Scroll
    /* ========================================================================= */
    var scroll = new SmoothScroll('a[href*="#"]');

    /* ========================================================================= */
    /*	Timer count
    /* ========================================================================= */

    var count = {
        initialized: false,
        initialize: function () {
            if (this.initialized)
                return;


            this.initialized = true;
            this.build();
        },
        build: function () {
            this.animations();
        },
        animations: function () {
            // Count To
            $(".counters-item [data-to]").each(function () {
                var $this = $(this);
                $this.appear(function () {
                    $this.countTo({});
                }, {
                    accX: 0,
                    accY: -150
                });
            });
        },
    };
    count.initialize();

    /* ========================================================================= */
    /*   Contact Form Validating
    /* ========================================================================= */
    $('#contact-submit').on('click', function (e) {

        e.preventDefault();

        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        if (name.length == 0) {
            var error = true;
            $('#name').css("border", "1px solid #D8000C");
        } else {
            $('#name').css("border", "1px solid rgba(103, 108, 114, 0)");
        }
        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
            $('#email').css("border", "1px solid #D8000C");
        } else {
            $('#email').css("border", "1px solid rgba(103, 108, 114, 0)");
        }
        if (subject.length == 0) {
            var error = true;
            $('#subject').css("border", "1px solid #D8000C");
        } else {
            $('#subject').css("border", "1px solid rgba(103, 108, 114, 0)");
        }
        if (message.length == 0) {
            var error = true;
            $('#message').css("border", "1px solid #D8000C");
        } else {
            $('#message').css("border", "1px solid rgba(103, 108, 114, 0)");
        }

        if (error == false) {
            $('#contact-submit').attr({
                'disabled': 'false',
                'value': 'Sending...'
            });

            //Send ajax call and after response show message
            $('#mail-success').fadeIn(500);
            // $('#mail-fail').fadeIn(500);
            $('#contact-submit').removeAttr('disabled').attr('value', 'Send');
        }
    });

    /**
     * Resize window
     */
    windowElement.resize(function () {
        calculateNavHeight();
    });

    /**
     * Function for calculate menu height
     */
    function calculateNavHeight() {
        var heigt = parseInt(windowElement.height(), 10) - 70;
        $('#navSec').css("max-height", heigt);
    }

});
