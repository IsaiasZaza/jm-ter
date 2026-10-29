/* Hero entrance — GSAP + matchMedia (prefers-reduced-motion) */
(function () {
  if (typeof gsap === "undefined") return;

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const items = gsap.utils.toArray(
      ".hero__place, .hero__brand, .hero__lead, .hero__actions"
    );
    const sheen = document.querySelector(".hero__sheen");

    gsap.set(items, { autoAlpha: 0, y: 14, scale: 0.98 });
    if (sheen) gsap.set(sheen, { autoAlpha: 0, xPercent: -6 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(items, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.55,
      stagger: 0.07,
    });

    if (sheen) {
      tl.to(
        sheen,
        { autoAlpha: 1, xPercent: 0, duration: 0.9, ease: "power2.out" },
        0.15
      );
    }

    return () => tl.kill();
  });
})();
