import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import MarqueeSection from "@/components/MarqueeSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActions from "@/components/FloatingActions";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Apexify — We Build Websites, Mobile Apps & Custom Software That Scale",
  description:
    "Full-service digital agency specializing in web development, mobile apps, custom software, SEO & business automation. 100+ projects delivered. Get your free consultation today.",
  alternates: { canonical: "https://apexify.dev" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://apexify.dev/#organization",
      name: "Apexify",
      url: "https://apexify.dev",
      description:
        "Full-service digital agency building world-class websites, mobile apps, custom software, and automation systems.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-83299-88006",
        contactType: "customer service",
        email: "info@apexify.dev",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Apexify",
      telephone: "+91-83299-88006",
      email: "info@apexify.dev",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBanner />
        <About />
        <ClientLogos />
        <WhyChooseUs />
        <Services />
        <Process />
        <Portfolio />
        <MarqueeSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
