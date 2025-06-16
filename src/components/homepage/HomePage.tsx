import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { NotificationBanner } from "./NotificationBanner";
import { ServicesGrid } from "./ServicesGrid";
import { NewsSection } from "./NewsSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main>
        <HeroSection />
        <NotificationBanner />
        <ServicesGrid />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
