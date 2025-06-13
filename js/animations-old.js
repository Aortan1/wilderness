

$(document).ready(function() {

    const isDesktop = window.matchMedia('(min-width: 1200px)').matches;

    if (isDesktop) {

        let smoother = ScrollSmoother.create({
            wrapper: '#main',
            content: '#main-content',
            smooth: 1.2,
        });

        gsap.to(".header", {
            backgroundColor: "rgba(0, 0, 0, 1)",
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "center top",
                scrub: true
            }
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
        gsap.from('#video-title-block', {
            scale: 0.6,
            opacity: 0.5,
            scrollTrigger: {
                trigger: ".video-section",
                start: "top bottom",
                end: "center center",
                scrub: true,
            },
        });

        /*gsap.from('.title-content', {
            scale: 0.6,
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
            scale: 0.4,
            opacity: 0.5,
            scrollTrigger: {
                trigger: ".awards-section",
                start: "30% bottom",
                end: "center center",
                scrub: true,
            },
        }); */

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

        /*gsap.from('#destinations-title-block', {
            scale: 0.6,
            opacity: 0.5,
            scrollTrigger: {
                trigger: ".destinations-section",
                start: "top center",
                end: "center center",
                scrub: true,
            },
        });*/


        const destination_tl_1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".destinations-section",
                start: "top 50%",
                toggleActions: "play none none none",
                // scroller: "#smooth-wrapper"
            }
        });
        const destination_tl_2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".destinations-section",
                start: "top 0%",
                toggleActions: "play none none none",
                // scroller: "#smooth-wrapper"
            }
        });
        destination_tl_1.to("#card-1", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-2", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-3", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-4", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
        destination_tl_2.to("#card-5", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-6", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-7", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-8", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })


        const how_it_works_tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".how-it-works-section",
                start: "top 70%",
                toggleActions: "play none none none",
                // scroller: "#smooth-wrapper"
            }
        });
        const camps_tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".camps-section",
                start: "top 70%",
                toggleActions: "play none none none",
                // scroller: "#smooth-wrapper"
            }
        });
        how_it_works_tl.to("#how-img-1", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" })
            .to("#how-img-3", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, "+=0.2")
            .to("#how-img-2", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, "+=0.2")
            .to("#how-img-4", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, "+=0.2")
            .to("#how-text-col", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, "+=0.2");

        camps_tl.to("#splide01-slide01", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" })
            .to("#splide01-slide02", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, "+=0.2")
            .to("#splide01-slide03", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, "+=0.2");

        ///////////////

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".cta-section-inner", {
            y: "300vh",
            ease: "none",
            scrollTrigger: {
                trigger: ".cta-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".cta-background-mask", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".cta-section",
                start: "top top",
                end: "30% top",
                scrub: true
            }
        });

        gsap.to(".cta-background", {
            scale: 1.3,
            scrollTrigger: {
                trigger: ".cta-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to("#cta-content", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".cta-section",
                start: "top top",
                end: "30% top",
                scrub: true
            }
        });

        ///////////////

        gsap.to(".b-cta-background-mask", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".bottom-cta-section",
                start: "top top",
                end: "90% top",
                scrub: true
            }
        });

        gsap.to(".b-cta-background", {
            scale: 1.4,
            scrollTrigger: {
                trigger: ".bottom-cta-section",
                start: "top top",
                end: "50% top",
                scrub: true
            }
        });

        gsap.to("#b-cta-content", {
            opacity: 1,
            y: "40vh",
            ease: "none",
            scrollTrigger: {
                trigger: ".bottom-cta-section",
                start: "top top",
                end: "50% top",
                scrub: true
            }
        });

        /*** Elements with classes 'appear-1,appear-2,...'appear one after another, regardless of their number.***/
        document.querySelectorAll("section").forEach(section => {

            const appearElements = Array.from(section.querySelectorAll("[class*='appear-']"))
                .sort((a, b) => {
                    const getOrder = el => {
                        const match = el.className.match(/appear-(\d+)/);
                        return match ? parseInt(match[1]) : 0;
                    };
                    return getOrder(a) - getOrder(b);
            });

            if (appearElements.length){
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 60%",
                        toggleActions: "play none none none",
                    }
                });
                appearElements.forEach(el => {
                    tl.to(el, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    }, "+=0.1");
                });

            }

        })
        /////

        gsap.registerPlugin(ScrollToPlugin);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                const targetID = this.getAttribute("href");
                const targetElem = document.querySelector(targetID);

                if (targetElem) {
                    e.preventDefault();

                    ScrollSmoother.get().scrollTo(targetElem, {
                        offsetY: 80,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            });
        });

    }

})


