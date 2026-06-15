"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import AppointmentModal from "@/components/AppointmentModal";

const FAQ_CATEGORIES = [
  {
    category: "Tooth Pain & Emergencies",
    items: [
      {
        question: "What should I do in case of a sudden severe toothache?",
        answer: "Sudden tooth pain is usually a sign of decay reaching the nerve or an infection. Rinse your mouth with warm salt water, gently floss to clear trapped debris, and avoid placing painkillers directly on the gums. Contact us immediately at +91 94895 16326 for an emergency consultation slot."
      },
      {
        question: "How do I know if my dental issue is an emergency?",
        answer: "Emergency dental situations include severe pain that keeps you awake, uncontrolled bleeding, a knocked-out tooth, structural jaw damage, or rapid swelling in your gums, cheek, or neck. Swelling can indicate an active infection that requires immediate antibiotic therapy or treatment."
      }
    ]
  },
  {
    category: "Root Canal & Cleaning Myths",
    items: [
      {
        question: "Is root canal treatment extremely painful?",
        answer: "This is a common myth. A root canal treatment does not cause pain; it eliminates it. We use modern local anesthetics to completely numb the area, making the procedure feel similar to getting a standard dental filling."
      },
      {
        question: "Does regular teeth cleaning make teeth loose or cause gaps?",
        answer: "No. Teeth cleaning (scaling) removes calcified plaque (tartar) that has pushed gums back. When tartar is cleaned away, you may feel temporary gaps which were previously filled with bacteria and mineral deposits. Gums will heal, tighten, and strengthen around the teeth once the tartar is removed."
      }
    ]
  },
  {
    category: "Teeth Whitening Safety",
    items: [
      {
        question: "Is professional teeth whitening safe for my enamel?",
        answer: "Yes, professional teeth whitening is completely safe. The whitening gels temporarily open the pores in your enamel to lift stains without altering the tooth's structure. Over-the-counter DIY kits can be abrasive, but professional gel application protects your enamel and gums."
      },
      {
        question: "How long do the whitening effects last?",
        answer: "Whitening results generally last between 1 to 2 years. The duration depends on your diet and lifestyle habits. Avoiding heavy staining foods (coffee, tea, spices) and maintaining routine professional cleanings will help keep your teeth white."
      }
    ]
  },
  {
    category: "Children's Dental Care",
    items: [
      {
        question: "When should a child have their first dental visit?",
        answer: "A child should visit the dentist by their first birthday or within 6 months of their first baby tooth erupting. Early visits help children get used to the clinic environment and allow us to monitor tooth development."
      },
      {
        question: "How can I prevent cavities in my child's teeth?",
        answer: "Encourage brushing twice a day with a small amount of fluoride toothpaste, limit sugary snacks and juices, and ask about preventative treatments like dental sealants and fluoride varnishes during routine check-ups."
      }
    ]
  }
];

export default function FAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<{ catIndex: number; itemIndex: number } | null>(null);

  const toggleAccordion = (catIndex: number, itemIndex: number) => {
    if (activeItem && activeItem.catIndex === catIndex && activeItem.itemIndex === itemIndex) {
      setActiveItem(null);
    } else {
      setActiveItem({ catIndex, itemIndex });
    }
  };

  const flatFaqList = FAQ_CATEGORIES.flatMap(cat => cat.items);

  return (
    <div className="relative bg-stone-bg min-h-screen">
      <SchemaMarkup type="FAQ" data={flatFaqList} />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block font-sans">Patient Help</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary font-display leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed font-sans font-light">
            Read dental guides, emergency steps, and treatment guidelines formulated by our clinical team.
          </p>
          <div className="h-[1px] w-full bg-accent/15 pt-2" />
        </div>
      </section>

      {/* Accordions (Clean Line-Divided Accordions) */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {FAQ_CATEGORIES.map((categoryGroup, catIdx) => (
              <div key={catIdx} className="space-y-4">
                {/* Category Header */}
                <h2 className="text-base font-bold text-primary font-display border-b border-border-subtle/80 pb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {categoryGroup.category}
                </h2>

                {/* List items */}
                <div className="space-y-1">
                  {categoryGroup.items.map((item, itemIdx) => {
                    const isOpen = activeItem && activeItem.catIndex === catIdx && activeItem.itemIndex === itemIdx;
                    return (
                      <div
                        key={itemIdx}
                        className="border-b border-border-subtle/50 py-1 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleAccordion(catIdx, itemIdx)}
                          className="w-full py-4.5 flex justify-between items-center text-left text-primary hover:text-accent transition-colors font-bold text-xs sm:text-sm font-display cursor-pointer"
                        >
                          {item.question}
                          <ChevronDown className={`h-4.5 w-4.5 text-slate-400 transition-transform duration-350 ${isOpen ? "rotate-180 text-accent" : ""}`} />
                        </button>

                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-[300px] pb-4 pt-1" : "max-h-0"
                          } overflow-hidden`}
                        >
                          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-light">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Banner */}
      <section className="py-16 md:py-24 bg-stone-bg border-t border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary border border-accent/25 rounded-3xl p-8 md:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full translate-x-16 -translate-y-16" />
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block font-sans">Support Lines</span>
            <h2 className="text-2xl sm:text-3xl font-light font-display leading-tight">
              Have a Specific Treatment Inquiry?
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto font-sans font-light leading-relaxed">
              If your question is not listed, call us or start a direct WhatsApp inquiry. Our clinical team is happy to assist.
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
                Call Support: +91 94895 16326
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
