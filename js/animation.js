/* Run on DOMContentLoaded*/
document.addEventListener("DOMContentLoaded", async () => {
    gsap.registerPlugin(ScrollTrigger);

    // GLOBAL REVEAL ANIMATION
    gsap.utils.toArray(".section, .details-card, .faq-card, .entourage-card, .img-box, .timeline-item, .spotify-card, .story-wrapper")
    .forEach((el) => {
        gsap.fromTo(
        el,
        {
            opacity: 0,
            y: 60,
            scale: 0.98
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
            }
        }
        );
    });

    // Staggered Section Titles
    gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
        trigger: title,
        start: "top 80%"
        }
    });
    });

    // Hero Entrance Animation
    gsap.timeline()
    .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.8 })
    .from(".hero h2", { opacity: 0, y: 20, duration: 0.8 }, "-=0.4")
    .from(".hero h1", { opacity: 0, y: 40, duration: 1 })
    .from(".hero-date", { opacity: 0, y: 20, duration: 0.6 }, "-=0.5")
    .from(".countdown .time-box", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.3
    }, "-=0.3");

    // Image Zoom-on-Scroll
    gsap.utils.toArray("img").forEach((img) => {
    gsap.fromTo(
        img,
        { scale: 1.1 },
        {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: img,
            start: "top 90%"
        }
        }
    );
    });

    // Timeline “Draw Effect”
    gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.from(item, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
        trigger: item,
        start: "top 85%"
        }
    });
    });

    // Floating Subtle Parallax (Hero)
    gsap.to(".hero-content", {
    y: 30,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
    });
});