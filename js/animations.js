$(document).ready(function() {
    // Check if the device is a desktop
    const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
    if (!isDesktop) return;

    // Initialize plugins once
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

    // Create smoother with optimal settings
    let smoother = ScrollSmoother.create({
        wrapper: '#main',
        content: '#main-content',
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true
    });

    // Optimization: group animations by triggers
    function setupAnimations() {
        // Hero section animations
        const heroTrigger = '.hero-section';
        gsap.set(['.hero-content', '.header'], { willChange: 'opacity, transform, background-color' });

        gsap.to(".header", {
            backgroundColor: "rgba(0, 0, 0, 1)",
            ease: "none",
            scrollTrigger: {
                trigger: heroTrigger,
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
                trigger: heroTrigger,
                start: 'top center'
            }
        });

        // Video section
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

        // Reveal animations
        const revealTrigger = '.reveal-wrapper';
        gsap.set(['.reveal-mask.left', '.reveal-mask.right'], { willChange: 'transform' });

        gsap.to('.reveal-mask.left', {
            x: '-100%',
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: revealTrigger,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

        gsap.to('.reveal-mask.right', {
            x: '100%',
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: revealTrigger,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

        // Destinations section
        const destinationsTrigger = ".destinations-section";
        gsap.set(['#card-1', '#card-2', '#card-3', '#card-4', '#card-5', '#card-6', '#card-7', '#card-8'], {
            willChange: 'opacity, transform',
            opacity: 0,
            y: 20
        });

        const destination_tl_1 = gsap.timeline({
            scrollTrigger: {
                trigger: destinationsTrigger,
                start: "top 50%",
                toggleActions: "play none none none"
            }
        });

        const destination_tl_2 = gsap.timeline({
            scrollTrigger: {
                trigger: destinationsTrigger,
                start: "top 0%",
                toggleActions: "play none none none"
            }
        });

        destination_tl_1
            .to("#card-1", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-2", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-3", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-4", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" });

        destination_tl_2
            .to("#card-5", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-6", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-7", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" })
            .to("#card-8", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" });

        // How it works section
        const howItWorksTrigger = ".how-it-works-section";
        gsap.set(['#how-img-1', '#how-img-2', '#how-img-3', '#how-img-4', '#how-text-col'], {
            willChange: 'opacity, transform',
            opacity: 0,
            y: 20
        });

        const how_it_works_tl = gsap.timeline({
            scrollTrigger: {
                trigger: howItWorksTrigger,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        how_it_works_tl
            .to("#how-img-1", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" })
            .to("#how-img-3", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, "+=0.2")
            .to("#how-img-2", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, "+=0.2")
            .to("#how-img-4", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, "+=0.2")
            .to("#how-text-col", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, "+=0.2");

        // Camps section
        const campsTrigger = ".camps-section";
        gsap.set(['#splide01-slide01', '#splide01-slide02', '#splide01-slide03'], {
            willChange: 'opacity, transform',
            opacity: 0,
            y: 20
        });

        const camps_tl = gsap.timeline({
            scrollTrigger: {
                trigger: campsTrigger,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        camps_tl
            .to("#splide01-slide01", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" })
            .to("#splide01-slide02", { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, "+=0.2")
            .to("#splide01-slide03", { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, "+=0.2");

        // CTA sections
        const ctaTrigger = ".cta-section";
        gsap.set([".cta-section-inner", ".cta-background-mask", ".cta-background", "#cta-content"], {
            willChange: 'opacity, transform'
        });

        gsap.to(".cta-section-inner", {
            y: "300vh",
            ease: "none",
            scrollTrigger: {
                trigger: ctaTrigger,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".cta-background-mask", {
            opacity: 1,
            scrollTrigger: {
                trigger: ctaTrigger,
                start: "top top",
                end: "30% top",
                scrub: true
            }
        });

        gsap.to(".cta-background", {
            scale: 1.3,
            scrollTrigger: {
                trigger: ctaTrigger,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to("#cta-content", {
            opacity: 1,
            scrollTrigger: {
                trigger: ctaTrigger,
                start: "top top",
                end: "30% top",
                scrub: true
            }
        });

        // Bottom CTA
        const bottomCtaTrigger = ".bottom-cta-section";
        gsap.set([".b-cta-background-mask", ".b-cta-background", "#b-cta-content"], {
            willChange: 'opacity, transform'
        });

        gsap.to(".b-cta-background-mask", {
            opacity: 1,
            scrollTrigger: {
                trigger: bottomCtaTrigger,
                start: "top top",
                end: "90% top",
                scrub: true
            }
        });

        gsap.to(".b-cta-background", {
            scale: 1.4,
            scrollTrigger: {
                trigger: bottomCtaTrigger,
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
                trigger: bottomCtaTrigger,
                start: "top top",
                end: "50% top",
                scrub: true
            }
        });

        // Appear elements
        document.querySelectorAll("section").forEach(section => {
            const appearElements = Array.from(section.querySelectorAll("[class*='appear-']"))
                .sort((a, b) => {
                    const getOrder = el => {
                        const match = el.className.match(/appear-(\d+)/);
                        return match ? parseInt(match[1]) : 0;
                    };
                    return getOrder(a) - getOrder(b);
                });

            if (appearElements.length) {
                gsap.set(appearElements, {
                    willChange: 'opacity, transform',
                    opacity: 0,
                    y: 20
                });

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
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                const targetID = this.getAttribute("href");
                const targetElem = document.querySelector(targetID);

                if (targetElem) {
                    e.preventDefault();
                    smoother.scrollTo(targetElem, {
                        offsetY: 80,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            });
        });
    }

    // Initialize animations
    setupAnimations();

    // Optimization for mobile devices
    function handleResize() {
        if (window.innerWidth < 1200) {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            if (smoother) smoother.kill();
        }
    }

    // Debounce for window resize handler
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
    });
});