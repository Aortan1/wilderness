(function ($) {
    //Video
    var methods = {
        init: function () {
            var $this = $(this);
            var cVideo = $this.find('video').get(0);
            var video = document.createElement('video');
            $this.append('<a href="javascript:void(0);" class="play-btn"></a>');
            video.autoplay = true;
            video.src = 'data:video/mp4;base64,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';
            video.load();
            video.style.display = 'none';
            video.playing = false;
            //cVideo.defaultPlaybackRate = 0.5;
            //cVideo.playbackRate = 0.5;
            //video.play();
            video.onplay = function () {
                this.playing = true;
            };
            video.oncanplay = function () {
                if (!video.playing) {
                    $('.play-btn').fadeIn();
                }
            };
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                $('.play-btn').fadeIn();
            }
            $this.on('click', function () {
                var v = $(this).find('video').get(0);
                var btn = $(this).find('.play-btn');
                if (v.paused) {
                    $.each($("video"), function (i, v) {
                        v.pause();
                    });
                    $('.play-btn').fadeIn();
                    v.play();
                    btn.fadeOut();
                } else {
                    v.pause();
                    btn.fadeIn();
                }
            });
        }
    };
    $.fn.playVideo = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Undefined method: ' + method);
        }
    };
    //Video Play
    if($('.play-video-container').length){
        $('.play-video-container').playVideo();
    }

})(jQuery);

/* Splide options */
const options ={
    type   : 'loop',
    perPage: 3,
    rewind: true,
    gap: '1.5rem',
    autoplay: false,
    interval: 5000,
    breakpoints: {
        767:{
            //fixedWidth: '80rem',
            //fixedHeight: '80rem',
            //gap: '4rem',
            perPage: 1,
        }
    }
}

$(document).ready(function(){

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
        wrapper: '#main',
        content: '#main-content',
        smooth: 1.2,
    });

    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        scale: 0.7,
        duration: 1,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top center'
        }
    });
    gsap.from('.title-content', {
        scale: 0.1,
        opacity: 0.5,
        scrollTrigger: {
            trigger: ".awards-section",
            start: "top bottom", // Start when the top of the element hits the bottom of the viewport
            end: "center center",  // End when the bottom of the element hits the top of the viewport
            scrub: true, // Smoothly animate the scale based on scroll
            markers: false, // Optional: Show start/end markers for debugging
        },
    });
    gsap.from('.awards', {
        scale: 0.1,
        opacity: 0.5,
        scrollTrigger: {
            trigger: ".awards-section",
            start: "30% bottom",
            end: "center center",
            scrub: true,
        },
    });

    gsap.to('.reveal-mask.left', {
        x: '-100%',
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '.reveal-wrapper',
            start: 'top 80%',
            //toggleActions: 'play play play play',
            toggleActions: 'play none none none',
            once: false
        },
    });

    gsap.to('.reveal-mask.right', {
        x: '100%',
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '.reveal-wrapper',
            start: 'top 80%',
            //toggleActions: 'play play play play',
            toggleActions: 'play none none none',
            once: false
        },
    });
    gsap.from('#destinations-title-block', {
        scale: 0.1,
        opacity: 0.5,
        scrollTrigger: {
            trigger: ".destinations-section",
            start: "top bottom",
            end: "center center",
            scrub: true,
        },
    });

    /*****/

    //$('.play-video-container').playVideo();

    var splide = new Splide( '.splide', options );

    splide.mount();

    const ArrowToLeft = document.querySelector('.splide__arrow--prev')
    const ArrowTORight = document.querySelector('.splide__arrow--next')
    if (ArrowToLeft) ArrowToLeft.innerHTML = '';
    if (ArrowTORight) ArrowTORight.innerHTML = '';

    const progressEl = document.querySelector('.camp-slides-progress');

    function updateProgress(index) {
        const totalScreens = Math.ceil(splide.length / splide.options.perPage);
        const currentScreen = Math.floor(index / splide.options.perPage) + 1;

        // Let's add a leading zero
        const format = (n) => String(n).padStart(2, '0');
        progressEl.innerHTML = `${format(currentScreen)}<span> / ${format(totalScreens)}</span>`;
    }

    splide.on('mounted move', (newIndex) => {
        updateProgress(newIndex);
    });



});