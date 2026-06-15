"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

interface ClientBookingTriggerProps {
  serviceName?: string;
  buttonText?: string;
}

export default function ClientBookingTrigger({ 
  serviceName, 
  buttonText = "Book Appointment" 
}: ClientBookingTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto py-3.5 px-8 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-xs shadow-md shadow-primary/15 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
      >
        <Calendar className="h-4.5 w-4.5" />
        {buttonText}
      </button>

      <AppointmentModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
