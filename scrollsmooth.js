document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 767) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Initialize ScrollSmoother
    let smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true // Ensures effects like scale and blur are smoothed as well
    });

    gsap.to('[data-sticky-section="header"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="header"]',
        start: 'top top',
        end: () => `+=${window.innerHeight * 2}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    // Animation for elements with class 'section-cover' and 'section-spacer'
    gsap.to("[section-cover=cover-1905]", {
      scale: 4,
      opacity: 0,
      filter: "blur(20px)",
      ease: "none",
      scrollTrigger: {
        trigger: "[section-cover=trigger-1905]",
        start: "top bottom",
        end: "top 20%",
        scrub: true,
        markers: false, // Ensure markers are off to prevent issues
        onLeave: () => smoother.scroll(), // Ensures ScrollSmoother updates after the animation ends
        onUpdate: self => {
          if (self.progress === 1 && !self.isActive) {
            gsap.set("[section-cover=cover-1905]", {
              scale: 4,
              opacity: 0,
              filter: "blur(20px)"
            });
          }
        }
      }
    });

    gsap.to('[data-sticky-section="1905"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="1905"]',
        start: 'top top',
        end: () => `+=${window.innerHeight}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to("[section-cover=cover-1930]", {
      scale: 3.5,
      opacity: 0,
      filter: "blur(18px)",
      ease: "none",
      scrollTrigger: {
        trigger: "[section-cover=trigger-1930]",
        start: "top bottom",
        end: "top 20%",
        scrub: true,
        markers: false,
        onLeave: () => smoother.scroll(),
        onUpdate: self => {
          if (self.progress === 1 && !self.isActive) {
            gsap.set("[section-cover=cover-1930]", {
              scale: 3.5,
              opacity: 0,
              filter: "blur(18px)"
            });
          }
        }
      }
    });

    gsap.to('[data-sticky-section="1930"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="1930"]',
        start: 'top top',
        end: () => `+=${window.innerHeight}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to('[data-sticky-section="model"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="model"]',
        start: 'top top',
        end: () => `+=${window.innerHeight * 2}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to("[section-cover=cover-1943]", {
      scale: 4,
      opacity: 0,
      filter: "blur(20px)",
      ease: "none",
      scrollTrigger: {
        trigger: "[section-cover=trigger-1943]",
        start: "top bottom",
        end: "top 20%",
        scrub: true,
        markers: false,
        onLeave: () => smoother.scroll(),
        onUpdate: self => {
          if (self.progress === 1 && !self.isActive) {
            gsap.set("[section-cover=cover-1943]", {
              scale: 4,
              opacity: 0,
              filter: "blur(20px)"
            });
          }
        }
      }
    });

    gsap.to('[data-sticky-section="1943"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="1943"]',
        start: 'top top',
        end: () => `+=${window.innerHeight}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to('[data-sticky-section="war-image"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="war-image"]',
        start: 'top top',
        end: () => `+=${window.innerHeight * 2}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to("[section-cover=cover-1945]", {
      scale: 3,
      opacity: 0,
      filter: "blur(15px)",
      ease: "none",
      scrollTrigger: {
        trigger: "[section-cover=trigger-1945]",
        start: "top bottom",
        end: "top 20%",
        scrub: true,
        markers: false,
        onLeave: () => smoother.scroll(),
        onUpdate: self => {
          if (self.progress === 1 && !self.isActive) {
            gsap.set("[section-cover=cover-1945]", {
              scale: 3,
              opacity: 0,
              filter: "blur(15px)"
            });
          }
        }
      }
    });

    gsap.to('[data-sticky-section="1945"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="1945"]',
        start: 'top top',
        end: () => `+=${window.innerHeight}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to('[data-sticky-section="joseph"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="joseph"]',
        start: 'top top',
        end: () => `+=${window.innerHeight * 2}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to('[paper-block="first"]', {
      scrollTrigger: {
        trigger: '[paper-block="first"]',
        start: 'top top',
        end: () => `+=${window.innerHeight * 2}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to('[paper-block="second"]', {
      scrollTrigger: {
        trigger: '[paper-block="second"]',
        start: 'top top',
        end: () => `+=${window.innerHeight}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this based on your layout needs
        scrub: true,
        markers: false // Turn off markers to avoid interference
      }
    });

    gsap.to("[section-cover=cover-legacy]", {
      scale: 2,
      opacity: 0,
      filter: "blur(10px)",
      ease: "none",
      scrollTrigger: {
        trigger: "[section-cover=trigger-legacy]",
        start: "top bottom",
        end: "top 20%",
        scrub: true,
        markers: false,
        onLeave: () => smoother.scroll(),
        onUpdate: self => {
          if (self.progress === 1 && !self.isActive) {
            gsap.set("[section-cover=cover-legacy]", {
              scale: 2,
              opacity: 0,
              filter: "blur(10px)"
            });
          }
        }
      }
    });

    gsap.to('[data-sticky-section="legacy"]', {
      scrollTrigger: {
        trigger: '[data-sticky-section="legacy"]',
        start: 'top top',
        end: () => `+=${window.innerHeight}`, // Element stays sticky for the viewport height
        pin: true,
        pinSpacing: false, // Adjust this​⬤
