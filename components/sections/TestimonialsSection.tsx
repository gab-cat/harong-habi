"use client";

import { motion } from "motion/react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative w-full bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-amber-600/10 blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-amber-400">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tighter text-amber-50 md:text-5xl">
            Stories from Our Users
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100/60">
            Hear from families who used Harong Habi to plan their homes and make smarter, budget-friendly decisions.
          </p>
        </motion.div>

        {/* Animated Testimonials */}
        <div className="[&_h3]:text-amber-100 [&_p]:text-amber-200/70 [&_button]:bg-amber-800/50 [&_button]:hover:bg-amber-700/50 [&_svg]:text-amber-300">
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote:
      "As a first-time homeowner with a limited budget, I had no idea where to start. Harong Habi helped me understand what was realistic for my budget and recommended materials that were both affordable and safe. The layout planning tools showed me exactly how to maximize my space. I finally felt confident making decisions!",
    name: "Maria Santos",
    designation: "First-Time Homeowner from Quezon City",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I'm an OFW planning to build a home for my family back in the Philippines. Without access to construction experts here, I was lost. Harong Habi's platform gave me clear guidance on budget planning and material recommendations. The cost estimation tools helped me understand exactly what I could afford, and I could share the plans with my family back home.",
    name: "Roberto Cruz",
    designation: "OFW from Dubai, Planning Home in Pampanga",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The material recommendations feature was a lifesaver! I didn't know which materials were safe and within my budget. Harong Habi showed me options I never knew existed, and the comparison tools helped me see the cost differences clearly. I saved money without compromising on quality or safety.",
    name: "Ana Reyes",
    designation: "Young Professional Planning Home in Cavite",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Our community was planning a housing project for several families, but we didn't have construction experts to guide us. Harong Habi's community planning support helped us understand budget considerations and material options for multiple homes. The platform made it easy to plan together and ensure everyone got safe, affordable housing.",
    name: "Pedro Garcia",
    designation: "Community Planner from Leyte",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I thought I needed a construction expert to plan my home renovation, but Harong Habi proved me wrong. The layout planning tools showed me different options, and the budget analysis helped me prioritize what was most important. I made smarter decisions and stayed within my budget. The platform is so easy to use!",
    name: "Elena Mendoza",
    designation: "Homeowner Planning Renovation in Laguna",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default TestimonialsSection;

