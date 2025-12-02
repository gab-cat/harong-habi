"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const VideoHero = () => {
  const mainQuote =
    "Empowering Filipino families in building smarter, safer, and more affordable homes.";

  const handleScrollToSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-[0.6] contrast-125"
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark Contrast Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Vintage Golden Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-amber-800/50 to-stone-900/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(20,15,10,0.8)_100%)]" />

      {/* Subtle Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Feather/Fade Transition at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent pointer-events-none z-10" />

      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(212, 175, 55, 0.4)"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="rgba(255, 215, 128, 0.25)"
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-serif text-6xl font-bold tracking-tighter text-amber-100 drop-shadow-lg md:text-8xl lg:text-9xl">
            Harong
            <span className="font-light italic text-amber-300">-</span>
            Habi
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-amber-200/80">
            Smart Planning, Smart Homes
          </p>
        </motion.div>

        {/* Main Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 max-w-4xl"
        >
          <h2 className="font-serif text-3xl font-semibold tracking-tighter text-amber-50 md:text-5xl lg:text-6xl">
            Plan Your Dream Home
            <br />
            <span className="italic text-amber-300">Within Your Budget</span>
          </h2>
        </motion.div>

        {/* Main Quote with Text Generate Effect - Smaller */}
        <div className="max-w-3xl">
          <TextGenerateEffect
            words={mainQuote}
            className="text-amber-100/80"
            duration={0.8}
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-4"
        >
          <button
            type="button"
            onClick={handleScrollToSection}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-amber-300/50 backdrop-blur-sm px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-900/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-900"
            tabIndex={0}
            aria-label="Start planning your home"
          >
            <span className="relative z-10">Start Planning</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleScrollToSection}
            className="group flex items-center justify-center gap-2 rounded-full border border-amber-300/40 bg-transparent px-8 py-3.5 text-base font-medium text-amber-100 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/60 hover:bg-amber-300/5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-900"
            tabIndex={0}
            aria-label="Learn more about our planning platform"
          >
            <span>Learn More</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-amber-200/70">
            Scroll
          </span>
          <svg
            className="h-6 w-6 text-amber-300/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoHero;
