// Scroll-triggered reveal animation for cards and section heads.
// Replaces the old GSAP/ScrollTrigger + Locomotive Scroll + canvas setup —
// lighter weight, no extra dependencies, respects prefers-reduced-motion.

(function () {
    const revealEls = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window) || revealEls.length === 0) {
        revealEls.forEach((el) => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px',
        }
    );

    revealEls.forEach((el) => observer.observe(el));
})();