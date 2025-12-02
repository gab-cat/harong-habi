"use client";

import { useState } from "react";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "Services", link: "#services" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <ResizableNavbar className="z-50">
      <NavBody>
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToTop();
          }}
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
        >
          <span className="font-serif text-xl font-bold tracking-tighter text-amber-100">
            Harong
            <span className="font-light italic text-amber-300">-</span>
            Habi
          </span>
        </a>

        {/* Desktop Navigation Items */}
        <NavItems items={navItems} onItemClick={handleItemClick} />

        {/* CTA Button */}
        <div className="relative z-20 ml-auto">
          <NavbarButton
            href="#contact"
            variant="gradient"
            onClick={handleItemClick}
          >
            Get Started
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToTop();
            }}
            className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
          >
            <span className="font-serif text-lg font-bold tracking-tighter text-amber-100">
              Harong
              <span className="font-light italic text-amber-300">-</span>
              Habi
            </span>
          </a>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={handleItemClick}
              className={cn(
                "block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors",
                "text-amber-100 hover:bg-amber-900/30 hover:text-amber-50"
              )}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton
            href="#contact"
            variant="gradient"
            className="mt-4 w-full"
            onClick={handleItemClick}
          >
            Get Started
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};

export default Navbar;

