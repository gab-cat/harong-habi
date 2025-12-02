"use client";

import { motion } from "motion/react";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { Send } from "lucide-react";

const CTASection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 py-24">
      {/* Decorative Golden Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-amber-400">
              Get Started
            </span>
            <h2 className="font-serif text-4xl font-bold tracking-tighter text-amber-50 md:text-5xl">
              Ready to Plan
              <br />
              <span className="italic text-amber-300">Your Dream Home?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-amber-100/70">
              Start your home planning journey today. Get personalized budget recommendations, material guidance, and layout options that match what you can realistically afford. No construction expert needed—we&apos;re here to help you make smarter decisions.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <ContactItem
                icon={<IconPhone className="h-5 w-5" aria-hidden="true" />}
                label="Call Us"
                value="+63 912 345 6789"
              />
              <ContactItem
                icon={<IconMail className="h-5 w-5" aria-hidden="true" />}
                label="Email"
                value="hello@harong-habi.ph"
              />
              <ContactItem
                icon={<IconMapPin className="h-5 w-5" aria-hidden="true" />}
                label="Visit Us"
                value="Makati City, Metro Manila"
              />
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-amber-800/30 bg-stone-900/50 p-8 backdrop-blur-sm"
            >
              <h3 className="mb-6 font-serif text-2xl font-bold text-amber-100">
                Start Your Planning Journey
              </h3>

              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormInput
                    label="First Name"
                    name="firstName"
                    placeholder="Juan"
                  />
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    placeholder="Dela Cruz"
                  />
                </div>

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="juan@email.com"
                />

                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+63 912 345 6789"
                />

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-amber-200"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-amber-800/30 bg-stone-800/50 px-4 py-3 text-amber-100 placeholder:text-amber-200/40 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    aria-label="Select service"
                  >
                    <option value="">Select a service</option>
                    <option value="budget-planning">Budget Planning & Analysis</option>
                    <option value="material-recommendations">Material Recommendations</option>
                    <option value="layout-design">Layout Design Options</option>
                    <option value="cost-estimation">Cost Estimation Tools</option>
                    <option value="first-time-guidance">First-Time Homeowner Guidance</option>
                    <option value="community-planning">Community Planning Support</option>
                    <option value="general-consultation">General Planning Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-amber-200"
                  >
                    Tell Us About Your Planning Needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share your budget, project goals, and any questions you have..."
                    className="w-full resize-none rounded-lg border border-amber-800/30 bg-stone-800/50 px-4 py-3 text-amber-100 placeholder:text-amber-200/40 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    aria-label="Message"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600/90 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-900/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-900"
                  aria-label="Submit planning consultation request"
                >
                  <span>Send Request</span>
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600/20 text-amber-400">
        {icon}
      </div>
      <div>
        <p className="text-sm text-amber-200/60">{label}</p>
        <p className="font-medium text-amber-100">{value}</p>
      </div>
    </div>
  );
};

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-amber-200"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-amber-800/30 bg-stone-800/50 px-4 py-3 text-amber-100 placeholder:text-amber-200/40 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        aria-label={label}
      />
    </div>
  );
};

export default CTASection;

