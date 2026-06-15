"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Award, Sparkles } from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

const TESTIMONIALS = [
  {
    name: "Subramanian R.",
    treatment: "Root Canal Treatment",
    rating: 5,
    date: "2 weeks ago",
    badge: "Local Guide",
    text: "Best dental clinic in Chidambaram. The treatment was completely painless and the doctor explained everything very patiently. The clinic is extremely neat and clean. Highly recommended for family dental needs!"
  },
  {
    name: "Priya Sundar",
    treatment: "Crowns & Bridges",
    rating: 5,
    date: "1 month ago",
    badge: "Verified Patient",
    text: "Excellent service. Very clean and sterile environment. The root canal treatment and zirconia crown were done with advanced equipment. The cost was very reasonable compared to other clinics. Doctor is very gentle."
  },
  {
    name: "Arun Kumar",
    treatment: "Teeth Whitening",
    rating: 5,
    date: "3 months ago",
    badge: "Local Guide",
    text: "Highly professional dentist. I went for teeth whitening and cleaning. The results are amazing. Friendly staff, neat maintenance, and clear treatment process explained by the doctor."
  },
  {
    name: "Meera Krishnan",
    treatment: "Pediatric Care",
    rating: 5,
    date: "4 months ago",
    badge: "Verified Patient",
    text: "Brought my 8-year-old daughter for tooth filling. She was very nervous, but the doctor handled her with extreme patience and care. She didn't cry at all. Very child-friendly environment!"
  },
  {
    name: "Venkatesh K.",
    treatment: "Wisdom Tooth Extraction",
    rating: 5,
    date: "5 months ago",
    badge: "Local Guide",
    text: "I had my wisdom tooth removed here. I was expecting a painful surgical process, but the doctor completed the extraction in under 20 minutes with zero pain. The post-operative care instructions were very detailed and helpful."
  },
  {
    name: "Revathi M.",
    treatment: "Dental Fillings",
    rating: 5,
    date: "6 months ago",
    badge: "Verified Patient",
    text: "I had three cavities filled with composite resin. The process was quick and the doctor was very gentle. I cannot even tell where the fillings are, they look so natural. The pricing is also very transparent."
  },
  {
    name: "Manikandan S.",
    treatment: "Teeth Cleaning & Scaling",
    rating: 5,
    date: "8 months ago",
    badge: "Local Guide",
    text: "I went for scaling and polishing. The clinic was very hygienic, and the doctor cleared all my tea/coffee stains. My teeth feel incredibly clean and my breath is much fresher. Will visit every 6 months!"
  },
  {
    name: "Prakash M.",
    treatment: "Cosmetic Smile Makeover",
    rating: 5,
    date: "10 months ago",
    badge: "Verified Patient",
    text: "I had a gap between my front teeth closed with composite bonding. The treatment was finished in one visit and looked very natural. I am much more confident when smiling now. Thank you, Sri Deepam Clinic!"
  },
  {
    name: "Rajesh K.",
    treatment: "Custom Dentures",
    rating: 5,
    date: "1 year ago",
    badge: "Verified Patient",
    text: "We got complete dentures for my father. The doctor was very patient during the measurements and trial sessions. The fit is secure and he is now able to eat comfortably. Excellent care for elderly patients."
  }
];

export default function Reviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Reviews</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary font-display leading-tight">
            Patient Experience Stories
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed font-sans font-light">
            Read verified reviews and healing highlights from families in Chidambaram who have visited Sri Deepam clinic.
          </p>

          {/* Rating Summary Bar */}
          <div className="inline-flex flex-wrap items-center justify-start gap-4 bg-white px-5 py-3 rounded-2xl border border-border-subtle shadow-sm mt-2 text-xs font-bold font-sans">
            <div className="flex items-center gap-1 border-r border-border-subtle pr-4 text-primary">
              <span className="text-sm font-extrabold">5.0</span>
              <div className="flex text-accent">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1 text-slate-550 text-slate-500 font-light">
              <Award className="h-4 w-4 text-accent" />
              <span>45+ Google Reviews</span>
            </div>
          </div>
          <div className="h-[1px] w-full bg-accent/15 pt-2" />
        </div>
      </section>

      {/* Masonry Testimonial Stream */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_auto] space-y-6">
            {TESTIMONIALS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="break-inside-avoid bg-stone-bg p-6 rounded-2xl border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-shadow duration-300 mb-6"
              >
                <div className="space-y-4">
                  {/* Row 1: Name and Badge */}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-primary font-display">{review.name}</h3>
                      <span className="text-[9px] text-accent font-bold uppercase tracking-widest mt-0.5 block">
                        {review.treatment}
                      </span>
                    </div>
                    <span className="text-[8px] font-bold bg-white text-slate-400 border border-border-subtle py-1 px-2.5 rounded-full shrink-0">
                      {review.badge}
                    </span>
                  </div>

                  {/* Stars / Date */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex text-accent">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider">{review.date}</span>
                  </div>

                  {/* Text */}
                  <p className="text-slate-655 text-slate-600 text-xs sm:text-sm leading-relaxed italic font-sans font-light">
                    "{review.text}"
                  </p>
                </div>

                {/* Footer Signoff */}
                <div className="pt-4 border-t border-border-subtle/70 mt-4 flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-full bg-white border border-border-subtle text-accent flex items-center justify-center text-xs font-bold font-display uppercase">
                    {review.name[0]}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Google Reviewer</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Conversion */}
      <section className="py-16 md:py-24 bg-stone-bg border-t border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary border border-accent/25 rounded-3xl p-8 md:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 h-40 w-40 bg-white/5 rounded-full -translate-x-16 -translate-y-16" />
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block font-sans">Join Our Patients</span>
            <h2 className="text-2xl sm:text-3xl font-light font-display leading-tight">
              Ready to Experience Pain-Free Dental Care?
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto font-sans font-light leading-relaxed">
              Book a session with our specialists and let us help you achieve a healthier, brighter smile today.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 bg-white hover:bg-stone-bg text-primary rounded-xl font-bold uppercase tracking-wider text-[10px] border border-accent/20 shadow-md cursor-pointer transition-all active:scale-97"
              >
                Request Slot
              </button>
              <a
                href="tel:+919489516326"
                className="w-full py-3 bg-primary hover:bg-primary-hover border border-white/10 text-white rounded-xl font-bold uppercase tracking-wider text-[10px] transition-all text-center block"
              >
                Call Clinic: +91 94895 16326
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
