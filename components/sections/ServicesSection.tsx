"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const ServicesSection = () => {
  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-amber-400">
            Our Services
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tighter text-amber-50 md:text-5xl">
            Planning Services & Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100/60">
            Everything you need to plan your home project with confidence, from budget analysis to material recommendations.
          </p>
        </motion.div>

        {/* Moving Cards */}
        <div className="relative">
          <InfiniteMovingCards
            items={services}
            direction="right"
            speed="slow"
            pauseOnHover
            className="py-4"
          />
        </div>

        {/* Second Row - Opposite Direction */}
        <div className="relative mt-4">
          <InfiniteMovingCards
            items={additionalServices}
            direction="left"
            speed="slow"
            pauseOnHover
            className="py-4"
          />
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    quote:
      "Get personalized budget analysis and recommendations tailored to your financial situation. Understand what's possible within your budget and make informed decisions.",
    name: "Budget Planning & Analysis",
    title: "Smart budget guidance",
  },
  {
    quote:
      "Receive expert recommendations on materials that balance cost, quality, and safety. Find the best options for your specific project and budget range.",
    name: "Material Recommendations",
    title: "Quality within budget",
  },
  {
    quote:
      "Explore different layout options and see how they impact your budget. Visualize various floor plans and understand the cost implications of each design.",
    name: "Layout Design Options",
    title: "Explore possibilities",
  },
  {
    quote:
      "Get accurate cost estimates for your entire project before you begin. Understand material costs, labor estimates, and identify areas to optimize your spending.",
    name: "Cost Estimation Tools",
    title: "Plan with confidence",
  },
];

const additionalServices = [
  {
    quote:
      "Perfect for first-time homeowners who need step-by-step guidance through the planning process. Learn what to consider and how to avoid common mistakes.",
    name: "First-Time Homeowner Guidance",
    title: "Expert support",
  },
  {
    quote:
      "Support for community planning projects with tools to help multiple families plan together. Ideal for community development initiatives.",
    name: "Community Planning Support",
    title: "Community-focused",
  },
  {
    quote:
      "Access comprehensive planning resources even without construction expertise. Clear explanations and guidance for every step of your home planning journey.",
    name: "Accessible Planning Resources",
    title: "No expertise needed",
  },
  {
    quote:
      "Compare different material and design options side-by-side. See how choices affect your budget and make decisions that align with your priorities.",
    name: "Option Comparison Tools",
    title: "Compare & decide",
  },
];

export default ServicesSection;

