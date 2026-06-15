"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Activity 
} from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

const SERVICES_DATA = [
  {
    num: "01",
    name: "Root Canal Treatment",
    slug: "root-canal-treatment-chidambaram",
    desc: "Expert endodontic procedure to clean and seal infected root canals, resolving throbbing tooth pain while conserving your natural tooth. Done under precise local numbing.",
    duration: "1 - 2 Sessions",
    discomfort: "Painless (Anesthesia)",
    benefit: "Saves natural tooth structure and restores chewing power.",
    pricing: "Custom Zirconia Caps"
  },
  {
    num: "02",
    name: "Tooth Extraction",
    slug: "tooth-extraction-chidambaram",
    desc: "Gentle removal of heavily decayed or wisdom teeth. Focused on socket preservation, strict post-op follow-ups, and pain elimination.",
    duration: "30 - 60 Mins",
    discomfort: "Painless",
    benefit: "Eliminates tooth infection and severe dental pressure.",
    pricing: "Affordable Package"
  },
  {
    num: "03",
    name: "Teeth Cleaning & Polishing",
    slug: "teeth-cleaning-chidambaram",
    desc: "Advanced dental scaling utilizing ultrasonic tools to clear plaque and deep food/tobacco stains, followed by a professional polishing run.",
    duration: "30 - 45 Mins",
    discomfort: "None to Minimal",
    benefit: "Prevents gum bleedings, decay, and bad breath.",
    pricing: "Standard Care Pack"
  },
  {
    num: "04",
    name: "Dental Fillings",
    slug: "dental-fillings-chidambaram",
    desc: "Premium tooth-colored composite resin fillings. Chemical bonding seals the cavity margins, preserving maximum natural tooth enamel.",
    duration: "20 - 40 Mins",
    discomfort: "None",
    benefit: "Restores broken structures with natural shade-matched finishes.",
    pricing: "Highly Cost-Effective"
  },
  {
    num: "05",
    name: "Crowns & Bridges",
    slug: "crowns-bridges-chidambaram",
    desc: "Durable ceramic, metal-free, or E-Max zirconia crowns and bridges custom-fabricated to replace missing teeth and restore bite balance.",
    duration: "2 Sessions",
    discomfort: "Minimal",
    benefit: "Protects weak teeth and restores natural facial biting strength.",
    pricing: "Custom Lab Options"
  },
  {
    num: "06",
    name: "Teeth Whitening",
    slug: "teeth-whitening-chidambaram",
    desc: "Clinically supervised bleaching procedures that clear staining pigments and raise enamel color levels safely by multiple shades.",
    duration: "45 - 60 Mins",
    discomfort: "Minor temporary sensitivity",
    benefit: "Lifts discolored layers, giving a clean, radiant smile.",
    pricing: "Aesthetic Design"
  },
  {
    num: "07",
    name: "Dentures",
    slug: "dentures-chidambaram",
    desc: "Custom-fitted complete and partial removable plates designed for normal mastication, speech alignment, and natural jaw bone support.",
    duration: "3 - 4 clinical steps",
    discomfort: "Mild adjustment period",
    benefit: "Restores chewing and speaking patterns for senior patients.",
    pricing: "Material Variations"
  },
  {
    num: "08",
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dental-procedures-chidambaram",
    desc: "Esthetic treatments including porcelain veneers, gap closures, smile contouring, and custom smile makeovers.",
    duration: "Varies by procedure",
    discomfort: "Minimal",
    benefit: "Aligns tooth shapes and colors to match your aesthetic goals.",
    pricing: "Individual Quotation"
  }
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Our Services</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary font-display leading-tight">
            Specialized Oral Solutions
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed font-sans font-light">
            Sri Deepam Multispeciality Dental Clinic provides expert clinical care under one roof, using advanced diagnostics and prioritizing patient safety.
          </p>
          <div className="h-[1px] w-full bg-accent/15 pt-2" />
        </div>
      </section>

      {/* Services List (Alternating Left-Right Layout to break grid templates) */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={service.slug}
                className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 border-b border-border-subtle/60 pb-12 last:border-0 last:pb-0 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number & Basic Info */}
                <div className="lg:w-1/3 space-y-3">
                  <span className="font-display text-2xl font-light text-accent">{service.num}</span>
                  <h2 className="text-2xl font-medium text-primary font-display">
                    {service.name}
                  </h2>
                  <span className="inline-block text-[9px] font-bold text-accent bg-accent-light border border-accent/25 py-1 px-3 rounded-full font-sans uppercase tracking-wider">
                    {service.pricing}
                  </span>
                </div>

                {/* Description & Metrics */}
                <div className="lg:w-2/3 space-y-6 text-left">
                  <p className="text-slate-655 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {service.desc}
                  </p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-border-subtle/60 text-xs text-slate-500 font-sans">
                    <div className="flex gap-2.5 items-center">
                      <Clock className="h-4.5 w-4.5 text-accent shrink-0" />
                      <div>
                        <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">Average Duration</span>
                        <span className="font-bold text-primary">{service.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <Activity className="h-4.5 w-4.5 text-accent shrink-0" />
                      <div>
                        <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">Comfort Rating</span>
                        <span className="font-bold text-primary">{service.discomfort}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Benefit */}
                  <div className="flex gap-3 items-start text-xs bg-stone-bg/60 p-4 rounded-xl border border-border-subtle/50 font-sans">
                    <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-primary block">Primary Advantage</span>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">{service.benefit}</p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-all group hover-editorial-line"
                    >
                      View Patient Guide
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="py-2.5 px-5 bg-primary hover:bg-primary-hover text-white rounded-xl text-[10px] font-bold uppercase tracking-wider border border-accent/20 cursor-pointer active:scale-97 transition-all shadow-sm"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* sterile protocols banner */}
      <section className="py-16 md:py-24 bg-stone-bg border-t border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary border border-accent/25 rounded-3xl p-8 md:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full translate-x-16 -translate-y-16" />
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block font-sans">Sanitation Protocol</span>
            <h2 className="text-2xl sm:text-3xl font-light font-display leading-tight">
              Autoclave Sanitation Standards
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto font-sans font-light leading-relaxed">
              Our clinical safety standards dictate that every diagnostic and extraction tool is sterilized via high-pressure autoclave runs in sealed pouch packs, opened only at your chairside.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 bg-white hover:bg-stone-bg text-primary rounded-xl font-bold uppercase tracking-wider text-[10px] border border-accent/20 shadow-md cursor-pointer transition-all active:scale-97"
              >
                Book Consultation
              </button>
              <a
                href="tel:+919489516326"
                className="w-full py-3 bg-primary hover:bg-primary-hover border border-white/10 text-white rounded-xl font-bold uppercase tracking-wider text-[10px] transition-all text-center block"
              >
                Call Support: +91 94895 16326
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
