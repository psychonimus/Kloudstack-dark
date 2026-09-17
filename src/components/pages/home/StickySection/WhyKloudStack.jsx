import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyKloudStack.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const preloadImages = (container) => {
  const images = Array.from(container.querySelectorAll('.content__img'));
  if (!images.length) return Promise.resolve();

  const promises = images.map((el) => {
    return new Promise((resolve) => {
      if (el.tagName && el.tagName.toLowerCase() === 'img') {
        if (el.complete) {
          resolve();
        } else {
          el.addEventListener('load', resolve, { once: true });
          el.addEventListener('error', resolve, { once: true });
        }
      } else {
        resolve();
      }
    });
  });

  return Promise.all(promises);
};

const DEFAULT_SECTIONS = [
  {
    id: 1,
    img: '/images/business-first-thinking.png',
    titleItalic: 'Business',
    title: 'First Thinking',
    text: "Every solution begins with your business goals.",
    bgClass: 'bg-1',
  },
  {
    id: 2,
    img: '/images/ai-that-delivers.png',
    titleItalic: 'AI',
    title: 'That Delivers',
    text: 'Practical AI solutions that create measurable business impact.',
    bgClass: 'bg-2',
  },
  {
    id: 3,
    img: '/images/security-built-in.png',
    titleItalic: 'Security',
    title: 'Built In',
    text: 'Cyber resilience is embedded into every layer, not added as an afterthought.',
    bgClass: 'bg-3',
  },
  {
    id: 4,
    img: '/images/cloud-without-complexity.png',
    titleItalic: 'Cloud',
    title: 'Without Complexity',
    text: 'Scalable cloud and hybrid environments designed for agility and performance.',
    bgClass: 'bg-4',
  },
  {
    id: 5,
    img: '/images/experience-that-matters.png',
    titleItalic: 'Experience',
    title: 'That Matters',
    text: 'Decades of collective expertise helping businesses navigate technology with confidence.',
    bgClass: 'bg-5',
  },

];

export default function WhyKloudStack({
  sections = DEFAULT_SECTIONS,
} = {}) {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ctx = null;

    const initAnimation = () => {
      ctx = gsap.context(() => {
        const contentElements = gsap.utils.toArray('.content--sticky', container);
        const totalContentElements = contentElements.length;

        contentElements.forEach((el, position) => {
          const isLast = position === totalContentElements - 1;
          const innerImg = el.querySelector('.content__img');
          const innerTitle = el.querySelector('.content__title');
          const innerText = el.querySelector('.content__text');

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: () => (isLast ? 'top top' : 'bottom top'),
              end: '+=100%',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // Animate sticky section element upward
          if (!isLast) {
            tl.to(
              el,
              {
                ease: 'none',
                yPercent: -100,
              },
              0
            );
          }

          // Animate the inner image with subtle rotation, scale, and upward float (starts at rest 0 so it never overlaps text)
          if (innerImg) {
            tl.fromTo(
              innerImg,
              {
                yPercent: 0,
                rotation: 0,
                scale: 1,
              },
              {
                ease: 'none',
                yPercent: -20,
                rotation: -3,
                scale: 1.05,
              },
              0
            );
          }

          // Animate title and text harmoniously in the same upward direction
          if (innerTitle) {
            tl.fromTo(
              innerTitle,
              { yPercent: 0, opacity: 1 },
              { yPercent: -12, opacity: 0.9, ease: 'none' },
              0
            );
          }

          if (innerText) {
            tl.fromTo(
              innerText,
              { yPercent: 0, opacity: 1 },
              { yPercent: -8, opacity: 0.85, ease: 'none' },
              0
            );
          }
        });
      }, container);

      // Refresh ScrollTrigger to recalculate dimensions
      ScrollTrigger.refresh();
    };

    // Preload images before initializing
    let isMounted = true;
    preloadImages(container).then(() => {
      if (isMounted) {
        setIsLoading(false);
        // Ensure DOM has settled before calculating trigger points
        requestAnimationFrame(() => {
          initAnimation();
        });
      }
    });

    // Cleanup on unmount
    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, [sections]);

  return (
    <div
      ref={containerRef}
      className={`sticky-sections-root demo-9 ${isLoading ? 'loading' : ''}`}
    >
      <main>

        <div className="container os-left mb-5 pt-5">
          {/* <p className="os-eyebrow mb-2">Why Kloudstack</p> */}
          <h2 className="os-headline section-heading text-start mb-2">
            Why KloudStack
          </h2>
          {/* <p className="os-body">
            Beyond our strategic AI and Security imperatives, our holistic
            infrastructure practices ensure secure, highly available, and
            scalable operations across your entire digital estate.
          </p> */}

        </div>



        {/* Sticky Sections Wrapper */}
        <div className="container wrap">
          {sections.map((sec, idx) => (
            <div
              key={sec.id || idx}
              className={`content content--sticky content--half ${sec.bgClass || `bg-${(idx % 6) + 1}`}`}
            >
              <img
                className="content__img content__img--small"
                src={sec.img}
                alt={sec.title}
              />
              <h2 className="content__title">
                {sec.titleItalic && <i>{sec.titleItalic} </i>}
                {sec.title}
              </h2>
              <p className="content__text content__text--narrow text-meta">
                {sec.text}
              </p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
