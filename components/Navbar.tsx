"use client";

import { useState, useEffect } from "react";
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

const navItems = [
  { name: "About", link: "#about" },
  { name: "Features", link: "#features" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = navItems.map((item) => item.link.substring(1)); // Remove # from links

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the middle portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // If at the very top, clear active section
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Find the entry with the highest intersection ratio (most visible)
      let maxRatio = 0;
      let activeId = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeId = entry.target.id;
        }
      });

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll to clear highlight at top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    // Check initial scroll position (only once on mount)
    const checkInitialSection = () => {
      // If at the very top, don't set any active section
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(checkInitialSection, 100);

    // Add scroll listener to handle top of page
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <NavItems items={navItems} onItemClick={handleItemClick} activeSection={activeSection} />

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
          {navItems.map((item, idx) => {
            const sectionId = item.link.substring(1); // Remove # from link
            const isActive = activeSection === sectionId;
            return (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={handleItemClick}
                className={cn(
                  "block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-0",
                  isActive
                    ? "bg-amber-500/40 text-amber-50"
                    : "text-amber-100 hover:bg-amber-900/30 hover:text-amber-50"
                )}
              >
                {item.name}
              </a>
            );
          })}
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

