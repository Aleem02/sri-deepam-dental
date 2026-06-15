"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Root Canal Treatment",
  "Tooth Extraction",
  "Dental Fillings",
  "Teeth Cleaning & Polishing",
  "Teeth Whitening",
  "Dentures",
  "Crowns & Bridges",
  "Cosmetic Dentistry",
  "General Consultation"
];

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: SERVICES[0],
    date: "",
    time: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    const clinicPhone = "+919489516326";
    const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    }) : "Not specified";
    
    const text = `Hi Sri Deepam Dental Clinic, I would like to book an appointment.

*Patient Details*:
👤 *Name*: ${formData.name}
📞 *Phone*: ${formData.phone}
🦷 *Service*: ${formData.service}
📅 *Preferred Date*: ${formattedDate}
🕒 *Preferred Time*: ${formData.time || "Not specified"}
📝 *Notes*: ${formData.notes || "None"}

Please confirm my slot. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${clinicPhone.replace("+", "")}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };



  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      service: SERVICES[0],
      date: "",
      time: "",
      notes: ""
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-primary-hover/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", duration: 0.45 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-stone-bg shadow-2xl z-10 border border-border-subtle"
          >
            {/* Header */}
            <div className="bg-primary px-6 py-5 text-white flex justify-between items-center border-b border-accent/20">
              <div>
                <div className="flex items-center gap-1.5 text-accent">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[9px] font-bold uppercase tracking-widest font-sans">Premium Care</span>
                </div>
                <h3 className="text-xl font-medium font-display tracking-wide mt-1">Book Appointment</h3>
              </div>
              <button
                onClick={resetForm}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
              {!isSubmitted ? (
                <form className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-accent" /> Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-border-subtle bg-stone-bg/25 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-slate-800 text-xs sm:text-sm placeholder-slate-400 font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-accent" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-border-subtle bg-stone-bg/25 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-slate-800 text-xs sm:text-sm placeholder-slate-400 font-sans"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Preferred Treatment</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-border-subtle bg-stone-bg/25 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-slate-800 text-xs sm:text-sm font-sans"
                    >
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-accent" /> Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-border-subtle bg-stone-bg/25 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-slate-800 text-xs sm:text-sm font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-accent" /> Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-border-subtle bg-stone-bg/25 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-slate-800 text-xs sm:text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Notes (Optional)</label>
                    <textarea
                      name="notes"
                      rows={2}
                      placeholder="Symptoms or details"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-border-subtle bg-stone-bg/25 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-slate-800 text-xs sm:text-sm placeholder-slate-400 font-sans"
                    />
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2">
                    {/* Primary WhatsApp Booking */}
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold uppercase tracking-wider text-[10px] flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md active:scale-97"
                    >
                      <MessageSquare className="h-4 w-4 fill-white" />
                      Book via WhatsApp
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="h-14 w-14 text-emerald-500" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-800 font-display">Inquiry Registered</h4>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto mt-2 leading-relaxed font-sans">
                    Thank you, <span className="font-semibold text-primary">{formData.name}</span>. We have logged your request for <span className="font-semibold text-primary">{formData.service}</span>.
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-stone-bg border border-border-subtle text-left max-w-sm mx-auto text-xs space-y-2 font-sans">
                    <p className="text-slate-650 text-slate-600"><span className="font-semibold text-primary">Clinic Address:</span> Vandigate, Chidambaram (Near BSNL Office)</p>
                    <p className="text-slate-650 text-slate-600"><span className="font-semibold text-primary">Phone:</span> +91 94895 16326</p>
                    {formData.date && (
                      <p className="text-slate-650 text-slate-600">
                        <span className="font-semibold text-primary">Requested Date/Time:</span> {new Date(formData.date).toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {formData.time || "Not specified"}
                      </p>
                    )}
                  </div>

                  <p className="text-[10px] text-slate-400 mt-6 max-w-xs mx-auto leading-relaxed">
                    Our team will contact you shortly to confirm your clinical time slot.
                  </p>

                  <button
                    onClick={resetForm}
                    className="mt-6 py-2 px-6 bg-primary hover:bg-primary-hover text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
