import CTA from "@/components/CTA";
import { ContactFormWidget, ElfsightScript, InstagramWidget, ReviewsWidget } from "@/components/ElfsightSections";
import FloatingAppointment from "@/components/FloatingAppointment";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ElfsightScript />
      <Navbar />
      <Hero />
      <TrustBar />
      <InstagramWidget />
      <Services />
      <ReviewsWidget />
      <CTA />
      <ContactFormWidget />
      <Footer />
      <FloatingAppointment />
      <FloatingWhatsApp />
    </main>
  );
}
