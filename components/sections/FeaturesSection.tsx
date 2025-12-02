"use client";

import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconHome,
  IconShield,
  IconCoin,
  IconLeaf,
  IconUsers,
  IconHeart,
} from "@tabler/icons-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 py-24">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-amber-400">
            Our Pillars
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tighter text-amber-50 md:text-5xl">
            How We Help You Plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100/60">
            Our platform provides six key features that simplify home planning and help you make informed decisions within your budget.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid className="mx-auto max-w-6xl md:auto-rows-[22rem]">
          {features.map((feature, i) => (
            <BentoGridItem
              key={i}
              title={feature.title}
              description={feature.description}
              header={<FeatureHeader gradient={feature.gradient} />}
              icon={feature.icon}
              className={`${feature.className} border-amber-800/30 bg-stone-900/50 backdrop-blur-sm hover:border-amber-600/50 hover:bg-stone-800/60`}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

const FeatureHeader = ({ gradient }: { gradient: string }) => {
  return (
    <div
      className={`flex h-full min-h-[8rem] w-full items-center justify-center rounded-xl ${gradient}`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-stone-900/80 to-transparent" />
    </div>
  );
};

const features = [
  {
    title: "Budget-Based Recommendations",
    description:
      "Get personalized material and layout recommendations tailored to your specific budget. Our smart system analyzes your available funds and suggests the best options that maximize value without compromising safety or quality.",
    icon: (
      <IconCoin className="h-5 w-5 text-amber-400" aria-hidden="true" />
    ),
    gradient: "bg-gradient-to-br from-green-600/40 to-amber-700/40",
    className: "md:col-span-2",
  },
  {
    title: "Material Selection Guidance",
    description:
      "Navigate the complex world of building materials with confidence. We help you choose safe, durable options that fit your budget and local availability.",
    icon: (
      <IconHome className="h-5 w-5 text-amber-400" aria-hidden="true" />
    ),
    gradient: "bg-gradient-to-br from-amber-600/40 to-orange-800/40",
    className: "md:col-span-1",
  },
  {
    title: "Layout Planning Tools",
    description:
      "Explore different layout options and see how they work with your budget. Visualize your space and understand the cost implications of each design choice.",
    icon: (
      <IconUsers className="h-5 w-5 text-amber-400" aria-hidden="true" />
    ),
    gradient: "bg-gradient-to-br from-blue-600/40 to-indigo-800/40",
    className: "md:col-span-1",
  },
  {
    title: "Cost Estimation",
    description:
      "Get accurate cost estimates for your project before you start. Understand where your budget goes and identify areas where you can save without sacrificing quality.",
    icon: (
      <IconShield className="h-5 w-5 text-amber-400" aria-hidden="true" />
    ),
    gradient: "bg-gradient-to-br from-red-600/40 to-amber-800/40",
    className: "md:col-span-2",
  },
  {
    title: "Safety Standards Information",
    description:
      "Access essential information about building safety standards and requirements. Make informed decisions that ensure your home meets safety regulations.",
    icon: (
      <IconShield className="h-5 w-5 text-amber-400" aria-hidden="true" />
    ),
    gradient: "bg-gradient-to-br from-emerald-600/40 to-teal-800/40",
    className: "md:col-span-1",
  },
  {
    title: "Accessible Planning Support",
    description:
      "No construction expert needed. Our platform provides clear guidance for first-time homeowners, community planners, and anyone looking to make smart home planning decisions.",
    icon: (
      <IconHeart className="h-5 w-5 text-amber-400" aria-hidden="true" />
    ),
    gradient: "bg-gradient-to-br from-rose-600/40 to-amber-700/40",
    className: "md:col-span-2",
  },
];

export default FeaturesSection;

