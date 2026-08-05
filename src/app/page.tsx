"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Categories from "@/components/landing/Categories";
import ProductGallery from "@/components/landing/ProductGallery";
import WhyReki from "@/components/landing/WhyReki";
import OpsInvestigator from "@/components/landing/OpsInvestigator";
import WaitlistCTA from "@/components/landing/WaitlistCTA";
import Footer from "@/components/landing/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    if (!loaderDone) return;
    // Recalculate scroll positions after loader reveals content
    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, [loaderDone]);

  return (
    <>
      {!loaderDone && <Loader onComplete={() => setLoaderDone(true)} />}
      {loaderDone && (
        <SmoothScroll>
          <Nav />
          <main>
            <Hero />
            <Categories />
            <ProductGallery />
            <WhyReki />
            <OpsInvestigator />
            <WaitlistCTA />
            <Footer />
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
