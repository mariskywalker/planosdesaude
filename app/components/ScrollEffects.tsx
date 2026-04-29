"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (elements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        // threshold 0.1 + margem negativa deixavam blocos altos/parciais sem nunca bater o limiar (conteúdo invisível)
        { threshold: 0, rootMargin: "0px 0px 12% 0px" },
      );

      elements.forEach((el) => observer.observe(el));

      let raf = 0;
      const onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const hero = document.querySelector<HTMLElement>("#hero");
          const scrollSpace = document.querySelector<HTMLElement>("[data-hero-scrollspace]");
          if (hero && scrollSpace) {
            const y = Math.max(0, window.scrollY);
            const start = hero.offsetTop;
            const span = Math.max(1, scrollSpace.offsetHeight);
            const p = Math.max(0, Math.min(1, (y - start) / span));
            document.documentElement.style.setProperty("--hero-progress", String(p));
          }

          document.documentElement.style.setProperty("--page-scroll", String(Math.max(0, window.scrollY)));
        });
      };

      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
      };
    }

    // No reveal elements: still drive scroll CSS vars.
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const hero = document.querySelector<HTMLElement>("#hero");
        const scrollSpace = document.querySelector<HTMLElement>("[data-hero-scrollspace]");
        if (hero && scrollSpace) {
          const y = Math.max(0, window.scrollY);
          const start = hero.offsetTop;
          const span = Math.max(1, scrollSpace.offsetHeight);
          const p = Math.max(0, Math.min(1, (y - start) / span));
          document.documentElement.style.setProperty("--hero-progress", String(p));
        }

        document.documentElement.style.setProperty("--page-scroll", String(Math.max(0, window.scrollY)));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}

