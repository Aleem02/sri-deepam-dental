"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTAs from "./StickyCTAs";
import AppointmentModal from "./AppointmentModal";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-bg text-slate-text">
      {/* Dynamic Navigation Header */}
      <Header onBookClick={() => setIsModalOpen(true)} />

      {/* Main Content Area: Padding top offsets the fixed header, padding bottom offsets the mobile sticky bar */}
      <main className="flex-grow pt-16 md:pt-20 pb-28 md:pb-0">
        {children}
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Conversions: Sticky mobile/desktop Quick-Action buttons */}
      <StickyCTAs onBookClick={() => setIsModalOpen(true)} />

      {/* Interactive scheduling modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
