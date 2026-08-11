import AnnouncementBar from "@/components/landing/AnnouncementBar";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ReviewsTab from "@/components/landing/ReviewsTab";
import HelpWidget from "@/components/landing/HelpWidget";
import NewArrivalsCatalog from "@/components/products/NewArrivalsCatalog";

export const metadata = {
  title: "New Arrivals — reki.life",
  description: "Browse all Reki wooden games — puzzles, smart chess, memory, and intuitive play for kids.",
};

export default function NewArrivalsPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main style={{ background: "var(--cream)" }}>
        <NewArrivalsCatalog />
      </main>
      <Footer />
      <ReviewsTab />
      <HelpWidget />
    </>
  );
}
