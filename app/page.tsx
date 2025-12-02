import VideoHero from "@/components/sections/VideoHero";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* About Section with Lamp Effect */}
      <AboutSection />

      {/* Features Section with Bento Grid */}
      <FeaturesSection />

      {/* Services Section with Infinite Moving Cards */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section with Contact Form */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
