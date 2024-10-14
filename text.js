document.addEventListener("DOMContentLoaded", function() {
  // Split text into spans
  const anElements = ['an1', 'an2', 'an3', 'an4', 'an5', 'an6', 'an7'];

  const existingSelectors = anElements
    .filter(an => document.querySelector(`[data-gsap="${an}"]`))
    .map(an => `[data-gsap="${an}"]`)
    .join(', ');

  if (existingSelectors) {
    let typeSplit = new SplitType(existingSelectors, {
      types: "words, chars",
      tagName: "span"
    });
  }

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }

  let an1 = document.querySelector('[data-gsap="an1"]');
  if (an1) {
    gsap.set("[data-gsap='an1']", { opacity: 1 });

    document.querySelectorAll("[data-gsap='an1']").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: { amount: 0.5 }
      });
      createScrollTrigger(element, tl);
    });
  }

  let an2 = document.querySelector('[data-gsap="an2"]');
  if (an2) {
    gsap.set("[data-gsap='an2']", { opacity: 1 });

    document.querySelectorAll("[data-gsap='an2']").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.set(element.querySelectorAll(".word"), { transformPerspective: 1000 });
      tl.from(element.querySelectorAll(".word"), {
        rotationX: -90,
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.6 }
      });
      createScrollTrigger(element, tl);
    });
  }

  let an3 = document.querySelector('[data-gsap="an3"]');
  if (an3) {
    gsap.set("[data-gsap='an3']", { opacity: 1 });

    document.querySelectorAll("[data-gsap='an3']").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".word"), {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: { amount: 0.6, from: "random" }
      });
      createScrollTrigger(element, tl);
    });
  }

  let an4 = document.querySelector('[data-gsap="an4"]');
  if (an4) {
    gsap.set("[data-gsap='an4']", { opacity: 1 });

    document.querySelectorAll("[data-gsap='an4']").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".char"), {
        opacity: 0,
        duration: 0.8,
        ease: "power1.out",
        stagger: { amount: 0.8 }
      });

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => tl.play(),
        markers: false
      });
    });
  }

  let an5 = document.querySelector('[data-gsap="an5"]');
  if (an5) {
    gsap.set("[data-gsap='an5']", { opacity: 1 });

    document.querySelectorAll("[data-gsap='an5']").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".char"), {
        yPercent: 110,
        duration: 0.2,
        ease: "power1.out",
        stagger: { amount: 0.6 }
      });
      createScrollTrigger(element, tl);
    });
  }

  let an6 = document.querySelector('[data-gsap="an6"]');
  if (an6) {
    gsap.set("[data-gsap='an6']", { opacity: 1 });

    document.querySelectorAll("[data-gsap='an6']").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".word"), {
        opacity: 0,
        x: "1em",
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.2 }
      });
      createScrollTrigger(element, tl);
    });
  }

  let an7 = document.querySelector('[data-gsap="an7"]');
  if (an7) {
    gsap.set("[data-gsap='an7']", { opacity: 1 });

    document.querySelectorAll("[data-gsap='an7']").forEach((element) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 0%",
          scrub: true
        }
      });
      tl.from(element.querySelectorAll(".word"), {
        opacity: 0.2,
        duration: 0.2,
        ease: "power1.out",
        stagger: { each: 0.4 }
      });
    });
  }
});
