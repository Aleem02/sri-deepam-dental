"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onBookClick: () => void;
}

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Clinic", path: "/about" },
  { name: "Treatments", path: "/services" },
  { name: "Patient Reviews", path: "/reviews" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" }
];

export default function Header({ onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_10px_rgba(13,60,54,0.03)] border-b border-border-subtle/40 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Elegant boutique branding */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="h-9 w-9 rounded-full border border-accent/30 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Sparkles className="h-4.5 w-4.5 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-primary text-base md:text-lg leading-none font-display tracking-tight group-hover:text-secondary transition-colors">
                Sri Deepam
              </span>
              <span className="text-[9px] text-accent font-bold tracking-widest uppercase mt-0.5 leading-none">
                Multispeciality Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors relative py-1 hover:text-accent ${
                    isActive ? "text-primary font-extrabold" : "text-slate-500"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onBookClick}
              className="py-2.5 px-6 bg-primary hover:bg-primary-hover text-white border border-accent/20 hover:border-accent/40 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 active:scale-97"
            >
              <Calendar className="h-3.5 w-3.5 text-accent" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-stone-bg border-b border-border-subtle overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 shadow-inner">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-accent-light text-primary font-extrabold border-l-2 border-accent"
                        : "text-slate-655 text-slate-650 text-slate-600 hover:bg-white hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-3 px-4">
                <button
                  onClick={() => {
                    closeMenu();
                    onBookClick();
                  }}
                  className="w-full py-3.5 px-4 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-primary/10 cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-accent" />
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
