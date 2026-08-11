"use client";

import AnnouncementBar from "@/components/landing/AnnouncementBar";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Categories from "@/components/landing/Categories";
import ProductGallery from "@/components/landing/ProductGallery";
import TrustStrip from "@/components/landing/TrustStrip";
import PackagingStory from "@/components/landing/PackagingStory";
import WaitlistCTA from "@/components/landing/WaitlistCTA";
import Footer from "@/components/landing/Footer";
import ReviewsTab from "@/components/landing/ReviewsTab";
import HelpWidget from "@/components/landing/HelpWidget";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <Categories />
        <ProductGallery />
        <TrustStrip />
        <PackagingStory />
        <WaitlistCTA />
        <Footer />
      </main>
      <ReviewsTab />
      <HelpWidget />
    </>
  );
}
