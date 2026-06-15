"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  Calendar,
  Star,
  CheckCircle,
  Clock,
  Sparkles,
  ChevronRight,
  Activity,
  ChevronDown
} from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

// Clinic Stats
const STATS = [
  { value: "5.0", label: "Google Rating", subtitle: "45+ verified stars" },
  { value: "8+", label: "Years Practice", subtitle: "Serving Chidambaram" },
  { value: "10k+", label: "Happy Smiles", subtitle: "Trusted care history" },
];

// Minimal Trust Items (No boxes)
const TRUST_ITEMS = [
  { title: "Expert Care", desc: "Consultations led by specialized clinicians." },
  { title: "Advanced Diagnostics", desc: "Low-radiation digital imaging setups." },
  { title: "Sanitized Space", desc: "Strict autoclave sterilization cycles." },
  { title: "Painless Focus", desc: "Care customized for dental anxiety." },
];

// Detailed Treatments catalog for the Interactive Tabbed Accordion
const TREATMENTS_CATALOG = [
  {
    num: "01",
    name: "Root Canal Treatment",
    slug: "root-canal-treatment-chidambaram",
    desc: "Expert endodontic procedure to clean and seal infected root canals, resolving throbbing tooth pain while conserving your natural tooth structure.",
    duration: "1 - 2 Sessions",
    discomfort: "Painless under anesthesia",
    benefit: "Saves natural tooth structure and restores chewing power."
  },
  {
    num: "02",
    name: "Tooth Extraction",
    slug: "tooth-extraction-chidambaram",
    desc: "Gentle extraction of damaged or impacted wisdom teeth under optimized local numbing, prioritizing fast healing and socket comfort.",
    duration: "30 - 60 Mins",
    discomfort: "Painless under anesthesia",
    benefit: "Eliminates tooth infection risks and relieves heavy jaw pressure."
  },
  {
    num: "03",
    name: "Teeth Cleaning & Polishing",
    slug: "teeth-cleaning-chidambaram",
    desc: "Advanced scale cleaning using ultrasonic technology to clear calculus, plaque, and dark stains, followed by a prophy polishing cycle.",
    duration: "30 - 45 Mins",
    discomfort: "None to Minimal",
    benefit: "Prevents gum diseases, bad breath, and future tooth decay."
  },
  {
    num: "04",
    name: "Dental Fillings",
    slug: "dental-fillings-chidambaram",
    desc: "Premium tooth-colored composite resin fillings configured to repair cavity spots and seal teeth with organic, invisible matches.",
    duration: "20 - 40 Mins",
    discomfort: "None",
    benefit: "Stops active enamel decay and restores original tooth shape."
  },
  {
    num: "05",
    name: "Crowns & Bridges",
    slug: "crowns-bridges-chidambaram",
    desc: "Custom-fitted zirconia, ceramic, or porcelain caps and bridges to reinforce structurally weak teeth and fill dental gaps securely.",
    duration: "2 Sessions (5-7 days apart)",
    discomfort: "Minimal",
    benefit: "Protects weak teeth and restores natural facial biting strength."
  },
  {
    num: "06",
    name: "Teeth Whitening",
    slug: "teeth-whitening-chidambaram",
    desc: "Safe, dentist-supervised bleaching procedures that clear staining pigments and raise enamel color levels by multiple shades.",
    duration: "45 - 60 Mins",
    discomfort: "Slight temporary sensitivity",
    benefit: "Lifts discolored layers, giving a clean, radiant smile."
  },
  {
    num: "07",
    name: "Dentures",
    slug: "dentures-chidambaram",
    desc: "Custom acrylic or metal-reinforced partial and complete removable plates configured for normal chewing, eating, and speech alignment.",
    duration: "3 - 4 clinical steps",
    discomfort: "Mild adjustments period",
    benefit: "Restores facial support and speaking clarity for seniors."
  },
  {
    num: "08",
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dental-procedures-chidambaram",
    desc: "Aesthetic procedures including porcelain veneers, gap closures, smile contouring, and customized aesthetic makeovers.",
    duration: "Varies by procedure",
    discomfort: "Minimal",
    benefit: "Aligns tooth shapes and colors to match your aesthetic goals."
  }
];

// Single Highlight Testimonials Showcase
const HIGHLIGHT_REVIEWS = [
  {
    name: "Subramanian R.",
    treatment: "Root Canal Treatment",
    text: "Best dental clinic in Chidambaram. The treatment was completely painless and the doctor explained everything very patiently. The clinic is extremely neat and clean. Highly recommended for family dental needs!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Priya Sundar",
    treatment: "Crowns & Bridges",
    text: "Excellent service. Very clean and sterile environment. The root canal treatment and zirconia crown were done with advanced equipment. The cost was very reasonable. Doctor is extremely gentle.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Venkatesh K.",
    treatment: "Wisdom Tooth Extraction",
    text: "I had my wisdom tooth removed here. I was expecting a painful surgical process, but the doctor completed the extraction in under 20 minutes with zero pain. The post-operative care guidelines were very detailed.",
    rating: 5,
    date: "3 months ago"
  }
];

const FAQS = [
  {
    question: "How often should I visit the dentist for a scaling?",
    answer: "We recommend scheduling a professional dental scaling and cleaning every 6 months. Regular cleanings prevent tartar buildup, gum recession, and bad breath."
  },
  {
    question: "Is root canal treatment painful?",
    answer: "No, root canal treatment is painless. We use advanced local numbing agents. The procedure actually eliminates the sharp pain caused by active nerve pulp infection."
  },
  {
    question: "How do you maintain clinic hygiene?",
    answer: "We maintain strict autoclave sterilization standards. All diagnostic instruments are packed in sterile pouches and cycled in thermal autoclaves before every use."
  },
  {
    question: "What are composite dental fillings?",
    answer: "Composite fillings are metal-free, tooth-colored resin mixtures. They are shade-matched to your natural enamel, chemically bond to the tooth structure, and require less drilling."
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState<typeof TREATMENTS_CATALOG[0] | null>(TREATMENTS_CATALOG[0]);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % HIGHLIGHT_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + HIGHLIGHT_REVIEWS.length) % HIGHLIGHT_REVIEWS.length);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="relative">
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative pt-12 pb-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent-light text-primary text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Advanced Dental Care. Trusted Smiles.
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary font-medium tracking-tight leading-none font-display">
                  Trusted Dental <br className="hidden sm:inline" />
                  Care in <span className="italic text-accent">Chidambaram</span>
                </h1>
                <p className="text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed font-sans font-light">
                  Providing advanced dental treatments with a patient-first approach. We build long-term relationships focusing on comfortable, precise healthcare and lasting oral well-being.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto py-3.5 px-8 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-accent/35 shadow-md transition-all active:scale-97 cursor-pointer"
                >
                  Book Appointment
                </button>
                <a
                  href="tel:+919489516326"
                  className="w-full sm:w-auto py-3.5 px-8 bg-white hover:bg-stone-bg text-primary border border-border-subtle rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 active:scale-97"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  Call +91 94895 16326
                </a>
              </div>

              {/* Minimal Stats list */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-subtle/80 max-w-lg">
                {STATS.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-medium font-display text-primary">{stat.value}</span>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">{stat.label}</p>
                    <p className="text-slate-500 text-[10px] hidden sm:block font-light font-sans">{stat.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Graphic (Premium Framed Photograph in Full Color) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[40px] border border-border-subtle bg-white p-3 shadow-2xl relative group">
                {/* Decorative Accent Outline offset behind */}
                <div className="absolute -inset-1 rounded-[42px] border border-accent/20 -z-10 group-hover:scale-[1.01] transition-transform duration-500" />
                
                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-stone-bg">
                  <img 
                    src="/doctors_hero.png" 
                    alt="Sri Deepam Dental Clinic Doctors in White Coats" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none" 
                  />
                  
                  {/* Floating Google Stars Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-accent/30 py-1.5 px-3 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    <span className="text-[9px] font-bold text-primary tracking-widest uppercase">5.0 rated</span>
                  </div>

                  {/* Gradient Text overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent p-6 pt-16 flex flex-col justify-end text-white">
                    <h3 className="text-base font-bold font-display tracking-wide">Clinic Specialists</h3>
                    <p className="text-[9px] text-accent font-bold uppercase tracking-widest mt-1">Vandigate, Chidambaram</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: MINIMAL TRUST BAR (Thin border layouts) */}
      <section className="bg-white border-y border-border-subtle py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_ITEMS.map((item, i) => (
              <div key={i} className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <h4 className="text-primary font-bold text-xs uppercase tracking-wider font-sans">{item.title}</h4>
                </div>
                <p className="text-slate-400 text-[11px] sm:text-xs font-light leading-relaxed pl-3.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT CLINIC PREVIEW (Asymmetric magazine layout) */}
      <section className="py-20 md:py-28 bg-stone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Quote */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Our Practice Philosophy</span>
              <h2 className="text-3xl sm:text-4xl text-primary font-medium font-display leading-tight">
                "We believe in preserving your natural teeth with minimal intervention and high hygiene."
              </h2>
              <div className="h-0.5 w-16 bg-accent/40 mt-4" />
            </div>

            {/* Description Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Serving Chidambaram</span>
              <p className="text-slate-500 text-sm leading-relaxed font-light font-sans">
                Sri Deepam Multispeciality Dental Clinic has built a reputation for clinical expertise and patient comfort. Centrally located at Vandigate, Chidambaram, near the BSNL office, we combine digital diagnostics with a warm, welcoming approach.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed font-light font-sans">
                Our team understands dental anxiety. We explain every step clearly, offer customized options, and avoid template plans. From minor scaling sessions to major root canal restorations, your comfort is integrated into our process.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="py-3 px-6 bg-primary hover:bg-primary-hover text-white rounded-xl text-[10px] font-bold uppercase tracking-wider border border-accent/25 transition-all text-center flex items-center justify-center gap-1 shadow-sm active:scale-97"
                >
                  Our Clinic Story
                  <ArrowRight className="h-3.5 w-3.5 text-accent" />
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="py-3 px-6 bg-white hover:bg-stone-bg text-primary border border-border-subtle rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all text-center cursor-pointer"
                >
                  Request Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE EDITORIAL TREATMENTS SHOWCASE (No standard grids!) */}
      <section className="py-20 md:py-28 bg-white border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3 mb-16 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Specialized Care</span>
            <h2 className="text-3xl sm:text-4xl text-primary font-medium font-display leading-tight">
              Oral Treatments & Solutions
            </h2>
            <p className="text-slate-400 text-sm font-sans font-light">
              Select a service from our clinical list below to inspect average session durations, recovery points, and patient benefits.
            </p>
          </div>

          {/* Interactive Split Layout (Desktop Only) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Numbered List */}
            <div className="lg:col-span-5 space-y-1">
              {TREATMENTS_CATALOG.map((treatment) => {
                const isSelected = activeTreatment?.slug === treatment.slug;
                return (
                  <button
                    key={treatment.slug}
                    onClick={() => setActiveTreatment(treatment)}
                    className={`w-full py-4.5 px-4 text-left border-b border-border-subtle/60 flex items-center gap-4 transition-all duration-300 group cursor-pointer ${
                      isSelected 
                        ? "border-accent pl-6 bg-stone-bg" 
                        : "hover:border-slate-300 hover:pl-2"
                    }`}
                  >
                    <span className={`font-display text-sm font-light transition-colors duration-300 ${
                      isSelected ? "text-accent" : "text-slate-300 group-hover:text-primary"
                    }`}>
                      {treatment.num}
                    </span>
                    <span className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                      isSelected ? "text-primary" : "text-slate-500 group-hover:text-primary"
                    }`}>
                      {treatment.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Display Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {activeTreatment && (
                  <motion.div
                    key={activeTreatment.slug}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3 }}
                    className="bg-stone-bg border border-border-subtle p-8 rounded-3xl space-y-6 relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-2xl font-medium text-primary font-display">
                        {activeTreatment.name}
                      </h3>
                      <Link
                        href={`/services/${activeTreatment.slug}`}
                        className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 group hover:text-primary transition-colors"
                      >
                        Full Guide
                        <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {activeTreatment.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-border-subtle/80 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4.5 w-4.5 text-accent" />
                        <div>
                          <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">Average Time</span>
                          <span className="font-bold text-primary">{activeTreatment.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="h-4.5 w-4.5 text-accent" />
                        <div>
                          <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">Comfort</span>
                          <span className="font-bold text-primary">{activeTreatment.discomfort}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start bg-white p-4.5 rounded-xl border border-border-subtle/60 text-xs font-sans">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-primary block">Clinical Focus</span>
                        <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">{activeTreatment.benefit}</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto py-3 px-6 bg-primary hover:bg-primary-hover text-white rounded-xl text-[10px] font-bold uppercase tracking-wider border border-accent/25 transition-all cursor-pointer active:scale-97 text-center"
                      >
                        Book Session
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Interactive Accordion Layout (Mobile Only) */}
          <div className="lg:hidden space-y-3">
            {TREATMENTS_CATALOG.map((treatment) => {
              const isOpen = activeTreatment?.slug === treatment.slug;
              return (
                <div 
                  key={treatment.slug}
                  className="bg-stone-bg border border-border-subtle rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveTreatment(isOpen ? null : treatment)}
                    className="w-full py-4 px-5 flex items-center justify-between text-left cursor-pointer transition-colors duration-300 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-display text-xs font-light transition-colors duration-300 ${isOpen ? "text-accent" : "text-slate-400"}`}>
                        {treatment.num}
                      </span>
                      <span className={`text-sm font-bold transition-colors duration-300 ${isOpen ? "text-primary" : "text-slate-600"}`}>
                        {treatment.name}
                      </span>
                    </div>
                    <ChevronDown className={`h-4.5 w-4.5 text-slate-400 transition-transform duration-350 ${isOpen ? "rotate-180 text-accent" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-border-subtle/40 space-y-4 text-left">
                          <p className="text-slate-600 text-xs leading-relaxed font-sans font-light">
                            {treatment.desc}
                          </p>

                          <div className="grid grid-cols-2 gap-3 py-3 border-y border-border-subtle/60 text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-accent" />
                              <div>
                                <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">Average Time</span>
                                <span className="font-bold text-primary">{treatment.duration}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Activity className="h-4 w-4 text-accent" />
                              <div>
                                <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">Comfort</span>
                                <span className="font-bold text-primary">{treatment.discomfort}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2.5 items-start bg-white p-3.5 rounded-xl border border-border-subtle/60 text-xs font-sans">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-primary block">Clinical Focus</span>
                              <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">{treatment.benefit}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 pt-2">
                            <button
                              onClick={() => setIsModalOpen(true)}
                              className="flex-1 py-3 px-4 bg-primary hover:bg-primary-hover text-white rounded-xl text-[10px] font-bold uppercase tracking-wider border border-accent/25 transition-all cursor-pointer text-center"
                            >
                              Book Session
                            </button>
                            <Link
                              href={`/services/${treatment.slug}`}
                              className="flex-1 py-3 px-4 bg-white hover:bg-stone-bg text-primary border border-border-subtle rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1 group"
                            >
                              Full Guide
                              <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="text-left mt-12 pl-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors hover-editorial-line"
            >
              See All Treatments
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US (Editorial staggered timeline) */}
      <section className="py-20 md:py-28 bg-stone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Statement */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Modern Standards</span>
              <h2 className="text-3xl sm:text-4xl text-primary font-medium font-display leading-tight">
                Designed for Anxiety-Free Dental Treatment
              </h2>
              <div className="h-0.5 w-16 bg-accent/40" />
              <p className="text-slate-500 text-sm font-sans font-light leading-relaxed">
                We believe that dental care shouldn't feel like a factory. We limit patient bookings to dedicate comprehensive clinical sessions to each diagnostic examination, ensuring transparent plans.
              </p>
            </div>

            {/* Right: Offset details */}
            <div className="lg:col-span-7 space-y-8 pt-4">
              <div className="border-l border-accent/20 pl-6 space-y-1">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">01 / Diagnosis</span>
                <h4 className="text-base font-bold text-primary font-display"> 설명 detailed clinical options</h4>
                <p className="text-slate-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  We show digital X-rays to display dental issues. Every cost estimate is written and explained prior to procedure runs.
                </p>
              </div>

              <div className="border-l border-accent/20 pl-6 space-y-1">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">02 / Sanitization</span>
                <h4 className="text-base font-bold text-primary font-display">Sterile clinical setups</h4>
                <p className="text-slate-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  Autoclave pouches are opened directly in front of the patient. We adhere strictly to infection control standards.
                </p>
              </div>

              <div className="border-l border-accent/20 pl-6 space-y-1">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">03 / Pain Management</span>
                <h4 className="text-base font-bold text-primary font-display">Gentle local numbing protocols</h4>
                <p className="text-slate-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  We formulate customized anesthetic application plans, using slow-delivery systems to eliminate treatment prick discomfort.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: SINGLE REVIEWS SPOTLIGHT (Editorial carousel) */}
      <section className="py-20 md:py-28 bg-primary text-white border-y border-accent/10 relative overflow-hidden">
        {/* Absolute design lines */}
        <div className="absolute inset-0 opacity-[0.02] border-r border-t border-white pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <span className="text-[9px] font-bold text-accent uppercase tracking-widest block font-sans">Patient Spotlight</span>
          
          <div className="flex justify-center text-accent">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeReviewIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl font-medium font-display leading-relaxed max-w-2xl mx-auto italic font-light">
                "{HIGHLIGHT_REVIEWS[activeReviewIndex].text}"
              </p>
              
              <div className="pt-4 space-y-1">
                <span className="text-xs font-bold text-accent uppercase tracking-widest block">
                  {HIGHLIGHT_REVIEWS[activeReviewIndex].name}
                </span>
                <span className="text-[10px] text-stone-400 font-sans block">
                  Treated for: {HIGHLIGHT_REVIEWS[activeReviewIndex].treatment}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button 
              onClick={prevReview}
              className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              ←
            </button>
            <div className="flex gap-2">
              {HIGHLIGHT_REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReviewIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    activeReviewIndex === i ? "w-6 bg-accent" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextReview}
              className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              →
            </button>
          </div>

          <div className="pt-6">
            <Link
              href="/reviews"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors hover-editorial-line"
            >
              See All Verified Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ PREVIEW (Clean line dividers) */}
      <section className="py-20 md:py-28 bg-stone-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Patient Help</span>
            <h2 className="text-3xl sm:text-4xl text-primary font-medium font-display">Common Dental Queries</h2>
            <div className="h-0.5 w-12 bg-accent/40 mx-auto" />
          </div>

          <div className="space-y-1">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="border-b border-border-subtle py-4 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-3 flex justify-between items-center text-left text-primary hover:text-accent transition-colors font-bold text-sm sm:text-base font-display cursor-pointer"
                  >
                    {faq.question}
                    <span className={`text-slate-400 text-xs transition-transform duration-350 ${isOpen ? "rotate-45 text-accent" : ""}`}>
                      ＋
                    </span>
                  </button>
                  
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pb-4 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-light"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors hover-editorial-line"
            >
              See All Patient FAQs
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 8: CONVERSION CTA */}
      <section className="py-16 md:py-24 bg-white border-t border-border-subtle/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl text-center space-y-6 border border-accent/25">
            {/* Background elements */}
            <div className="absolute top-0 left-0 h-40 w-40 bg-white/5 rounded-full -translate-x-12 -translate-y-12" />
            
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block font-sans">Book Consultation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-display leading-none">Ready for a Healthier Smile?</h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-sans font-light">
              Schedule a visit with our clinical specialists in Vandigate, Chidambaram. We are here to support your dental recovery.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-6 bg-white hover:bg-stone-bg text-primary rounded-xl font-bold uppercase tracking-wider text-[10px] border border-accent/30 shadow-md cursor-pointer transition-all active:scale-97"
              >
                Book Appointment
              </button>
              <a
                href="tel:+919489516326"
                className="w-full py-3.5 px-6 bg-primary hover:bg-primary-hover border border-white/10 text-white rounded-xl font-bold uppercase tracking-wider text-[10px] transition-all text-center flex items-center justify-center gap-2 active:scale-97"
              >
                <Phone className="h-3.5 w-3.5" />
                Call Clinic Now
              </a>
            </div>
            
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider pt-2">
              📍 Near BSNL Office, Vandigate, Chidambaram, Tamil Nadu
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
