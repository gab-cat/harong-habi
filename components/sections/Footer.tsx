"use client";

import { motion } from "motion/react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-b from-stone-950 to-stone-900 pt-16 pb-8">
      {/* Top Border Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-serif text-3xl font-bold text-amber-100">
              Harong
              <span className="font-light italic text-amber-400">-</span>
              Habi
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-amber-200/60">
              Helping families make smarter, budget-friendly decisions when building or improving their homes. Making decent, safe housing more accessible to everyone.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <SocialLink
                href="#"
                icon={<IconBrandFacebook className="h-5 w-5" />}
                label="Facebook"
              />
              <SocialLink
                href="#"
                icon={<IconBrandInstagram className="h-5 w-5" />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<IconBrandYoutube className="h-5 w-5" />}
                label="YouTube"
              />
              <SocialLink
                href="#"
                icon={<IconBrandLinkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-semibold uppercase tracking-wider text-amber-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Planning Services" />
              <FooterLink href="#" label="Budget Planning" />
              <FooterLink href="#" label="Material Guide" />
              <FooterLink href="#" label="Testimonials" />
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-semibold uppercase tracking-wider text-amber-300">
              Services
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#" label="Budget Planning & Analysis" />
              <FooterLink href="#" label="Material Recommendations" />
              <FooterLink href="#" label="Layout Design Options" />
              <FooterLink href="#" label="Cost Estimation Tools" />
              <FooterLink href="#" label="First-Time Homeowner Guide" />
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-semibold uppercase tracking-wider text-amber-300">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-amber-200/70">
              <li>
                <strong className="text-amber-100">Address:</strong>
                <br />
                123 Bahay Kubo Street, Makati City, Metro Manila 1226
              </li>
              <li>
                <strong className="text-amber-100">Phone:</strong>
                <br />
                +63 912 345 6789
              </li>
              <li>
                <strong className="text-amber-100">Email:</strong>
                <br />
                hello@harong-habi.ph
              </li>
              <li>
                <strong className="text-amber-100">Hours:</strong>
                <br />
                Mon-Sat: 8:00 AM - 6:00 PM
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-amber-800/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-amber-200/50">
              © {currentYear} Harong-Habi. All rights reserved. Made with{" "}
              <span className="text-amber-400">❤</span> in the Philippines.
            </p>
            <div className="flex gap-6 text-sm text-amber-200/50">
              <a
                href="#"
                className="transition-colors hover:text-amber-300"
                tabIndex={0}
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="transition-colors hover:text-amber-300"
                tabIndex={0}
                aria-label="Terms of Service"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="transition-colors hover:text-amber-300"
                tabIndex={0}
                aria-label="Sitemap"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-800/30 text-amber-400 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-300"
      tabIndex={0}
      aria-label={label}
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-amber-200/70 transition-colors hover:text-amber-300"
        tabIndex={0}
        aria-label={label}
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;

