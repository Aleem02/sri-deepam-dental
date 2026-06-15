"use client";

import { MessageSquare, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface StickyCTAsProps {
  onBookClick: () => void;
}

export default function StickyCTAs({ onBookClick }: StickyCTAsProps) {
  const clinicPhone = "+919489516326";
  const whatsappUrl = `https://wa.me/919489516326?text=Hi%20Sri%20Deepam%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border-subtle shadow-[0_-4px_16px_rgba(13,60,54,0.04)] px-4 py-3 flex items-center justify-between gap-3 md:hidden">
        {/* Call Now Button */}
        <a
          href={`tel:${clinicPhone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2.5 text-slate-500 hover:text-accent transition-colors text-[9px] font-bold uppercase tracking-wider gap-1.5"
        >
          <div className="p-2.5 rounded-full bg-stone-bg border border-border-subtle">
            <Phone className="h-4 w-4 text-primary" />
          </div>
          Call Now
        </a>

        {/* Primary Book Appointment button */}
        <button
          onClick={onBookClick}
          className="flex-[2.5] py-3.5 px-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider text-[10px] flex items-center justify-center gap-2 border border-accent/25 cursor-pointer active:scale-97 transition-all shadow-md shadow-primary/10"
        >
          <Calendar className="h-4 w-4 text-accent" />
          Book Appointment
        </button>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2.5 text-slate-500 hover:text-emerald-700 transition-colors text-[9px] font-bold uppercase tracking-wider gap-1.5"
        >
          <div className="p-2.5 rounded-full bg-emerald-50 border border-emerald-100">
            <MessageSquare className="h-4 w-4 text-emerald-600 fill-emerald-50" />
          </div>
          WhatsApp
        </a>
      </div>

      {/* Desktop Sticky Floating Bubbles */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3.5">
        {/* Call Bubble */}
        <motion.a
          href={`tel:${clinicPhone}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center h-12 w-12 bg-primary hover:bg-primary-hover text-white border border-accent/20 rounded-full shadow-lg cursor-pointer relative group transition-all"
          title="Call Clinic"
        >
          <Phone className="h-4.5 w-4.5" />
          <span className="absolute right-14 bg-primary text-white text-[10px] font-bold uppercase tracking-wider py-2 px-3 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-accent/20">
            Call Clinic: +91 94895 16326
          </span>
        </motion.a>

        {/* WhatsApp Bubble */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center h-12 w-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg cursor-pointer relative group transition-all"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="h-4.5 w-4.5 fill-white" />
          <span className="absolute right-14 bg-primary text-white text-[10px] font-bold uppercase tracking-wider py-2 px-3 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-accent/20">
            WhatsApp Booking Chat
          </span>
        </motion.a>
      </div>
    </>
  );
}
