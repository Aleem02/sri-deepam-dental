"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Clock,
  MapPin,
  Building,
  Users,
  Check
} from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

const VALUES = [
  {
    title: "Clinical Excellence",
    desc: "Highest standards in diagnostics and treatment, using advanced dental techniques and components.",
    icon: Award,
    num: "01"
  },
  {
    title: "Patient Empathy",
    desc: "Understanding that dental visits can cause anxiety. Our gentle care approach prioritizes your peace of mind.",
    icon: Heart,
    num: "02"
  },
  {
    title: "Hygienic Safety",
    desc: "Rigorous sterilization and infection control protocols are strictly maintained for every procedure.",
    icon: ShieldCheck,
    num: "03"
  },
  {
    title: "Modern Innovations",
    desc: "Continuously updating our clinic with modern diagnostic tools for precise, pain-free outcomes.",
    icon: Sparkles,
    num: "04"
  }
];

const PHILOSOPHIES = [
  {
    title: "Preventative Approach First",
    desc: "We focus on saving your natural teeth. Our dentists recommend conservative treatment paths, prioritizing long-term oral hygiene education over unnecessary dental runs."
  },
  {
    title: "Informed Decision Making",
    desc: "We display digital X-rays and imaging to explain exactly what is happening in your mouth. You will always know the options, costs, and timeline before we begin."
  },
  {
    title: "Comfort & Pain Relief",
    desc: "From optimized local anesthesia to dental chairs designed for long-session relaxation, we minimize treatment friction and eliminate dental anxiety."
  }
];

const FACILITIES = [
  "Advanced Digital X-Ray Imaging (reduced radiation exposure)",
  "Modern Autoclave Sterilization systems for all clinical tools",
  "Premium, ergonomic dental chairs for complete patient relaxation",
  "Clean, air-conditioned consultation chambers and waiting lounge",
  "Dedicated pediatric dental kit for children's treatments",
  "Ultrasonic tooth scalers for gentle plaque removal"
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Our Practice</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary font-display leading-tight">
            About Sri Deepam Clinic
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed font-sans font-light">
            Providing advanced clinical treatments, child-friendly care, and a reputation built on local trust in Chidambaram.
          </p>
          <div className="h-[1px] w-full bg-accent/15 pt-2" />
        </div>
      </section>

      {/* Section 1: Story (Split Grid Layout) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Our Foundations</span>
              <h2 className="text-2xl sm:text-3xl text-primary font-medium font-display leading-tight">
                An 8-Year Journey of Professional Smile Restorations
              </h2>
              <p className="text-slate-550 text-slate-500 text-xs sm:text-sm leading-relaxed font-light font-sans">
                Sri Deepam Multispeciality Dental Clinic was established to bring premium, multi-disciplinary dental care to the local families of Chidambaram, Tamil Nadu. Over the years, we have served thousands of patients, growing into a trusted local healthcare brand.
              </p>
              <p className="text-slate-555 text-slate-500 text-xs sm:text-sm leading-relaxed font-light font-sans">
                Many local families postponed dental treatment due to anxiety, high costs, or a lack of understanding. We designed our practice to solve these challenges, making treatments completely transparent, comfortable, and affordable.
              </p>
              <p className="text-primary font-bold text-xs sm:text-sm leading-relaxed font-sans border-l-2 border-accent pl-4">
                Today, near the Vandigate BSNL Office, we operate a clinical facility equipped with digital diagnostics and sterilization frameworks that meet global healthcare standards.
              </p>
            </div>

            {/* Timelines / Milestones panel (Minimalist Gold dividers) */}
            <div className="lg:col-span-5 bg-stone-bg p-8 border border-border-subtle rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full translate-x-10 -translate-y-10" />
              <h3 className="text-lg font-bold text-primary font-display border-b border-border-subtle/80 pb-4">Clinic Milestones</h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex gap-4 items-start">
                  <span className="font-bold text-accent min-w-[70px] uppercase font-sans">8+ Years</span>
                  <span className="text-slate-500 font-light leading-relaxed">Serving Chidambaram and Cuddalore districts with care.</span>
                </div>
                <div className="flex gap-4 items-start border-t border-border-subtle/50 pt-4">
                  <span className="font-bold text-accent min-w-[70px] uppercase font-sans">10,000+</span>
                  <span className="text-slate-500 font-light leading-relaxed">Smiles restored and dental procedures completed.</span>
                </div>
                <div className="flex gap-4 items-start border-t border-border-subtle/50 pt-4">
                  <span className="font-bold text-accent min-w-[70px] uppercase font-sans">5.0 Star</span>
                  <span className="text-slate-500 font-light leading-relaxed">Highly rated patient reviews for comfort and quality.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Values (Line-divided grid without boxes) */}
      <section className="py-20 md:py-28 bg-stone-bg border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-16 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Core Values</span>
            <h2 className="text-3xl font-medium text-primary font-display leading-tight">Our Philosophy of Care</h2>
            <div className="h-0.5 w-12 bg-accent/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border-subtle/80 bg-white">
            {VALUES.map((value, i) => (
              <div key={i} className="p-8 border-r border-b border-border-subtle/80 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-accent font-display">{value.num}</span>
                  <h3 className="text-base font-bold text-primary font-display">{value.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">{value.desc}</p>
                </div>
                <div className="h-8 w-8 rounded-full border border-border-subtle flex items-center justify-center text-slate-400">
                  <value.icon className="h-4 w-4 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Patient Care Philosophy */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Patient Care</span>
            <h2 className="text-3xl font-medium text-primary font-display">Philosophy of Conservative Dentistry</h2>
            <div className="h-0.5 w-12 bg-accent/40 mx-auto" />
          </div>

          <div className="space-y-8">
            {PHILOSOPHIES.map((p, i) => (
              <div key={i} className="flex gap-6 items-start border-b border-border-subtle/50 pb-8 last:border-0 last:pb-0">
                <span className="text-xl font-medium text-accent font-display">
                  0{i + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-primary font-display">{p.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Modern Facilities & Sterile Approach */}
      <section className="py-20 md:py-28 bg-stone-bg border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Facilities</span>
              <h2 className="text-3xl font-medium text-primary font-display leading-tight">
                Sterile Settings & Digital Imaging Hardware
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-sans font-light">
                Our clinic conforms to global sanitation standards. All diagnostic procedures are conducted in clean, air-conditioned dental chambers equipped with ergonomic chairs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {FACILITIES.map((facility, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-xs sm:text-sm font-sans font-light">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Statement Box (Deep primary, gold accent border) */}
            <div className="lg:col-span-5 bg-primary border border-accent/20 rounded-3xl p-8 text-white space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full translate-x-12 -translate-y-12" />
              
              <h3 className="text-lg font-bold text-white font-display border-b border-white/5 pb-4">Our Standard</h3>
              <p className="text-stone-300 text-xs leading-relaxed font-sans font-light">
                By investing in preloaded low-radiation digital dental imaging systems and ultrasonic scalers, we improve clinical diagnosing speeds. This reduces session lengths and ensures a transparent treatment path for every patient.
              </p>
              <div className="pt-2 text-[10px] font-bold uppercase tracking-widest text-accent flex justify-between items-center">
                <span>⚡ Faster Diagnostics</span>
                <span>⭐ Exact Tooth Outlines</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Why Local Families Trust Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Community Connect</span>
            <h2 className="text-3xl font-medium text-primary font-display">Local Patient Relationships</h2>
            <div className="h-0.5 w-12 bg-accent/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 border-l border-border-subtle pl-6">
              <div className="h-8 w-8 rounded-full bg-stone-bg border border-border-subtle flex items-center justify-center text-accent">
                <Users className="h-4 w-4" />
              </div>
              <h4 className="text-base font-bold text-primary font-display">Multigenerational Plans</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">
                Formulating dental options for pediatric first-checkups as well as secure denture fittings for seniors.
              </p>
            </div>

            <div className="space-y-4 border-l border-border-subtle pl-6">
              <div className="h-8 w-8 rounded-full bg-stone-bg border border-border-subtle flex items-center justify-center text-accent">
                <MapPin className="h-4 w-4" />
              </div>
              <h4 className="text-base font-bold text-primary font-display">BSNL Vandigate Landmarks</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">
                Accessible clinical chambers on Cuddalore Main Road with direct bus routes and nearby parking spaces.
              </p>
            </div>

            <div className="space-y-4 border-l border-border-subtle pl-6">
              <div className="h-8 w-8 rounded-full bg-stone-bg border border-border-subtle flex items-center justify-center text-accent">
                <Building className="h-4 w-4" />
              </div>
              <h4 className="text-base font-bold text-primary font-display">Treatment Transparency</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">
                Our clinical guides document diagnostics, price ranges, and recovery checks without hidden billing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Contact CTA */}
      <section className="py-16 md:py-24 bg-stone-bg border-t border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary border border-accent/25 rounded-3xl p-8 md:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 h-40 w-40 bg-white/5 rounded-full -translate-x-16 -translate-y-16" />
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block font-sans">Request Slot</span>
            <h2 className="text-2xl sm:text-3xl font-light font-display leading-tight">
              Request Your Diagnostics Appointment Today
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto font-sans font-light leading-relaxed">
              We look forward to answering your questions and organizing your dental treatment pathways.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 bg-white hover:bg-stone-bg text-primary rounded-xl font-bold uppercase tracking-wider text-[10px] border border-accent/20 shadow-md cursor-pointer transition-all active:scale-97"
              >
                Book Consultation
              </button>
              <a
                href="tel:+919489516326"
                className="w-full py-3.5 bg-primary hover:bg-primary-hover border border-white/10 text-white rounded-xl font-bold uppercase tracking-wider text-[10px] transition-all text-center block"
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
