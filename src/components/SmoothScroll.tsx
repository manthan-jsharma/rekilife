"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      overscroll: false,
      infinite: false,
      anchors: true,
    });

    const onScroll = () => {
      ScrollTrigger.update();
      const limit = lenis.limit;
      if (limit > 0 && lenis.scroll > limit) {
        lenis.scrollTo(limit, { immediate: true });
      }
    };
    lenis.on("scroll", onScroll);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      gsap.ticker.remove(tickerCallback);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
