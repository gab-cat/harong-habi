"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-linear-to-b from-stone-950 via-stone-900 to-stone-950">
      {/* Lamp Container with Golden Theme */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 flex flex-col items-center gap-8 px-4 text-center"
        >
          <h2 className="bg-linear-to-br from-amber-200 via-amber-100 to-amber-300 bg-clip-text py-4 font-serif text-4xl font-medium tracking-tighter text-transparent md:text-6xl lg:text-7xl">
            Making Home Planning
            <br />
            <span className="italic">Accessible to Everyone</span>
          </h2>

          <p className="max-w-3xl pt-8 font-normal text-base leading-relaxed text-amber-100/60 md:text-lg">
            Harong Habi was created to help families make smarter, budget-friendly decisions when building or improving their homes. We simplify the entire planning process by recommending the best materials and layout options based on your available budget. Whether you&apos;re a first-time homeowner, planning a community project, or simply need guidance without access to construction experts, we&apos;re here to make decent, safe housing more accessible to everyone.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <StatCard number="5,000+" label="Families Helped" />
            <StatCard number="10,000+" label="Budget Plans Created" />
            <StatCard number="95%" label="User Satisfaction" />
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center gap-2"
    >
      <span className="font-serif text-4xl font-bold text-amber-400 md:text-5xl">
        {number}
      </span>
      <span className="text-sm uppercase tracking-widest text-amber-200/70">
        {label}
      </span>
    </motion.div>
  );
};

// Custom Lamp Container with Golden Theme
const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-120 bg-gradient-conic from-amber-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-transparent h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-transparent bottom-0 z-20 mask-[linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-120 bg-gradient-conic from-transparent via-transparent to-amber-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-transparent bottom-0 z-20 mask-[linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-transparent h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-stone-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-amber-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-amber-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-120 -translate-y-28 bg-amber-400"
        ></motion.div>

        <div className="absolute inset-auto z-60 h-44 w-full -translate-y-50 bg-stone-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export default AboutSection;

