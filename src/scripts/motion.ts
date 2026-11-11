import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Immediate visibility fallback for reduced motion
  if (prefersReduced) {
    gsap.set([
      '.hero-line',
      '.hero-subline',
      '.hero-scroll-cue',
      '.wisdom-card',
      '.music-card',
      '.memory-card',
      '#footer-content',
      '#contact',
      '#split-horizon-viewport',
      '#horizon-seam'
    ], {
      opacity: 1,
      y: 0,
      yPercent: 0,
      scale: 1,
      scaleY: 1,
      clearProps: 'transform'
    });
    return;
  }

  // 1. HERO ENTRANCE CHOREOGRAPHY (Coordinated with particle gathering)
  const heroLines = document.querySelectorAll('.hero-line');
  if (heroLines.length) {
    gsap.fromTo(heroLines,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 1.35
      }
    );

    gsap.fromTo('.hero-subline',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        delay: 1.70
      }
    );

    gsap.fromTo('.hero-scroll-cue',
      { opacity: 0 },
      {
        opacity: 0.8,
        duration: 0.8,
        ease: 'power2.out',
        delay: 2.15
      }
    );
  }

  // 2. AWARD-WINNING HERO -> NEXT SECTION SCROLL TRANSITION
  const heroEl = document.getElementById('hero');
  const heroText = document.getElementById('hero-text-block');
  const heroCue = document.querySelector('.hero-scroll-cue');

  if (heroEl && heroText) {
    // Parallax lift & soft fade out on hero text as user scrolls down
    gsap.to(heroText, {
      y: -65,
      opacity: 0.15,
      ease: 'none',
      scrollTrigger: {
        trigger: heroEl,
        start: 'top top',
        end: 'bottom 40%',
        scrub: true
      }
    });

    if (heroCue) {
      gsap.to(heroCue, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: '20% top',
          scrub: true
        }
      });
    }
  }

  // 3. SPLIT HORIZON SECTION ENTRANCE
  const workSection = document.getElementById('work');
  const viewport = document.getElementById('split-horizon-viewport');
  const seam = document.getElementById('horizon-seam');

  if (workSection && viewport) {
    gsap.fromTo(viewport,
      { scale: 0.96, opacity: 0.75 },
      {
        scale: 1.0,
        opacity: 1.0,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: workSection,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );

    if (seam) {
      gsap.fromTo(seam,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: workSection,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }

  // 4. UNIFORM SECTION HEADINGS & INTROS
  const sectionWraps = document.querySelectorAll('.section-title-wrap');
  sectionWraps.forEach((wrap) => {
    const heading = wrap.querySelector('h2');
    const desc = wrap.querySelector('.section-desc');

    if (heading) {
      gsap.fromTo(heading,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (desc) {
      gsap.fromTo(desc,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.12,
          scrollTrigger: {
            trigger: wrap,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });

  // 5. CARDS GRIDS STAGGERED REVEALS (Uniform across all sections)
  // Wisdom Cards
  const wisdomCards = gsap.utils.toArray('.wisdom-card');
  if (wisdomCards.length) {
    gsap.to(wisdomCards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#wisdom-grid',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });
  }

  // Music Cards
  const musicCards = gsap.utils.toArray('.music-card');
  const musicGrid = document.getElementById('music-grid');
  if (musicCards.length && musicGrid) {
    gsap.fromTo(musicCards,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: musicGrid,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Living Memory Bento Cards
  const memoryCards = gsap.utils.toArray('.memory-card');
  if (memoryCards.length) {
    gsap.to(memoryCards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#memory-grid',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 6. AESTHETIC FOOTER SHUTTER REVEAL EFFECT
  const footerEl = document.getElementById('contact');
  if (footerEl) {
    // Shutter-like slide up and uncurtain effect
    gsap.fromTo(footerEl,
      {
        y: 80,
      },
      {
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerEl,
          start: 'top bottom',
          end: 'top 70%',
          scrub: 0.8,
        }
      }
    );
  }

  // Footer / Correspondence Content Reveal
  const footerContent = document.getElementById('footer-content');
  if (footerContent) {
    gsap.to(footerContent, {
      y: 0,
      opacity: 1,
      duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }
}

export function cleanupMotion() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
