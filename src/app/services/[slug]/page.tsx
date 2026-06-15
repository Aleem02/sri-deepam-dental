import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Phone, 
  ArrowLeft, 
  CheckCircle, 
  ShieldAlert, 
  Clock, 
  FileText,
  UserCheck,
  Award
} from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import ClientBookingTrigger from "./ClientBookingTrigger";

interface ServiceData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  tagline: string;
  keywords: string[];
  overview: string[];
  whyNeeded: string[];
  benefits: string[];
  steps: { title: string; desc: string }[];
  recovery: string[];
  faqs: { question: string; answer: string }[];
  testimonial: { text: string; author: string; city: string };
  priceGuide: string;
}

// Data catalog (same copy, optimized keywords)
const SERVICES_CATALOG: Record<string, ServiceData> = {
  "root-canal-treatment-chidambaram": {
    title: "Root Canal Treatment",
    metaTitle: "Painless Root Canal Treatment Chidambaram | Sri Deepam Clinic",
    metaDesc: "Save infected teeth with painless root canal treatment at Sri Deepam Dental Clinic, Chidambaram. State-of-the-art endodontics near BSNL office Vandigate.",
    tagline: "Save your natural smile with precise, comfortable, and painless root canal therapy.",
    keywords: ["Root Canal Treatment Chidambaram", "Best Endodontist Chidambaram", "Painless Root Canal Chidambaram", "Dental Clinic Chidambaram"],
    overview: [
      "Root Canal Treatment (RCT) is a highly specialized endodontic procedure designed to save a natural tooth that has become severely decayed, infected, or damaged. When a cavity is left untreated, it eats through the tooth enamel and dentin, eventually reaching the dental pulp. The pulp contains sensitive blood vessels, connective tissues, and nerve fibers. Once bacteria enter this chamber, they cause a painful infection which, if left unchecked, can lead to severe swelling, bone loss around the root, and tooth loss.",
      "At Sri Deepam Multispeciality Dental Clinic in Chidambaram, we prioritize saving your natural teeth wherever possible. Removing a tooth and replacing it with a bridge or implant is often more invasive and expensive. A root canal treatment removes the diseased tissue, eliminates the active infection, and seals the internal canals of the tooth. This restores normal function, chewing strength, and natural dental alignment without needing extraction.",
      "Many patients associate root canals with intense pain. However, thanks to modern dental technology, advanced local anesthetics, and our experienced clinical approach at Vandigate, the procedure is no more uncomfortable than receiving a standard dental filling. In fact, root canal treatment is the most effective way to eliminate the throbbing pain caused by an infected tooth pulp."
    ],
    whyNeeded: [
      "Severe, persistent toothache that increases while biting, chewing, or applying pressure.",
      "Prolonged tooth sensitivity to hot and cold food or drinks, even after the temperature source is removed.",
      "Discoloration or darkening of the infected tooth, indicating nerve decay.",
      "Swelling, tenderness, or pimple-like bumps (abscesses) on the gums near the painful tooth area.",
      "Sudden localized swelling in the jaw, face, or neck accompanied by a mild fever."
    ],
    benefits: [
      "Preservation of your natural tooth structure, preventing jaw bone recession and maintaining dental alignment.",
      "Complete elimination of painful infections and throbbing headaches caused by tooth pulp decay.",
      "Restoration of efficient chewing function, allowing you to eat normal foods without discomfort.",
      "Protects adjacent teeth from excessive wear or strain caused by shifting bite patterns.",
      "Enhanced cosmetic look of the tooth once restored with a matching porcelain or zirconia crown."
    ],
    steps: [
      {
        title: "Clinical Diagnosis & Imaging",
        desc: "We perform high-resolution digital X-rays to assess the shape of the root canals and check if the infection has spread to the surrounding bone."
      },
      {
        title: "Effective Local Anesthesia",
        desc: "We apply a numbing gel followed by localized anesthesia to ensure the entire treatment area is completely numb and you feel no pain."
      },
      {
        title: "Access & Pulp Extirpation",
        desc: "A small, precise opening is created in the crown of the tooth. Using specialized micro-files, we gently remove the infected pulp and bacteria."
      },
      {
        title: "Cleaning & Shaping the Canals",
        desc: "The root canals are thoroughly irrigated with antibacterial solutions and shaped to ensure all microscopic nerve remnants are eliminated."
      },
      {
        title: "Filling & Sealing",
        desc: "The cleaned canals are filled with a biocompatible material called gutta-percha and sealed using adhesive dental cements."
      },
      {
        title: "Final Tooth Restoration",
        desc: "Because a root canal tooth becomes brittle, we place a custom-fabricated dental crown (porcelain or zirconia) to restore its natural strength."
      }
    ],
    recovery: [
      "Avoid eating hard or sticky foods until the final dental crown has been fitted.",
      "Take mild over-the-counter pain medication as prescribed by our doctor to manage minor tenderness.",
      "Maintain regular brushing and flossing routines, taking extra care around the treated tooth.",
      "Call the clinic immediately if you experience severe swelling or your temporary filling falls out."
    ],
    faqs: [
      {
        question: "How many visits are required for a root canal treatment?",
        answer: "In most cases, root canal treatment can be completed in a single session of 45 to 60 minutes. However, if there is a severe active abscess or complex canal structures, we may place an antibacterial medicine inside the tooth and schedule a second visit to ensure complete sterilization before sealing."
      },
      {
        question: "Is the tooth dead after a root canal?",
        answer: "Yes, the tooth will no longer feel thermal sensitivity (hot and cold) because the nerve has been removed. However, the tooth is not completely 'dead' because it remains anchored in the jawbone and receives hydration and structural support from the surrounding gum tissues."
      },
      {
        question: "How long does a root canal restoration last?",
        answer: "With proper oral hygiene, regular cleanings, and a high-quality dental crown, a root canal restoration can last a lifetime. Routine brushing, flossing, and avoiding chewing ice or hard shells are key to longevity."
      }
    ],
    testimonial: {
      text: "I was extremely scared of getting a root canal, but the doctors at Sri Deepam Dental Clinic made it completely painless. They explained every step on the digital screen. The zirconia crown looks exactly like my natural teeth.",
      author: "Sundar Rajan",
      city: "Chidambaram"
    },
    priceGuide: "Varies depending on single-visit vs multi-visit and choice of dental crown material (Metal-Ceramic, E-Max, or Zirconia)."
  },
  "tooth-extraction-chidambaram": {
    title: "Tooth Extraction",
    metaTitle: "Safe & Painless Tooth Extraction Chidambaram | Sri Deepam",
    metaDesc: "Get gentle, pain-free tooth extraction and wisdom teeth removal at Sri Deepam Dental Clinic, Chidambaram. Emergency care available near Vandigate.",
    tagline: "Relieve persistent discomfort with safe, hygienic, and pain-free tooth extraction.",
    keywords: ["Tooth Extraction Chidambaram", "Wisdom Tooth Removal Chidambaram", "Dental Clinic Chidambaram", "Emergency Dentist Chidambaram"],
    overview: [
      "A tooth extraction is the complete removal of a tooth from its socket in the jawbone. While our primary clinical goal at Sri Deepam Multispeciality Dental Clinic is to preserve your natural teeth, there are situations where a tooth is damaged beyond repair. Severe decay, advanced periodontal (gum) disease, structural fractures, or impacted wisdom teeth can threaten your entire oral health. In such cases, a professional extraction is the safest path to protect adjacent teeth and bone structures.",
      "We perform extraction procedures under local anesthesia, focusing entirely on patient comfort. We categorize extractions into simple extractions (for teeth visible in the mouth) and surgical extractions (for teeth that are broken at the gum line or remain impacted beneath the bone, which is common with wisdom teeth). Our specialists use advanced dental instruments to gently expand the socket and retrieve the tooth with minimal trauma to the surrounding gum tissue.",
      "Following a tooth extraction, our clinical team provides comprehensive guidance on socket preservation, home care, and options for tooth replacement (like dental implants or bridges). Replacing a missing tooth quickly is important to prevent neighboring teeth from shifting, which can alter your bite alignment and cause long-term jaw discomfort."
    ],
    whyNeeded: [
      "Severe tooth decay that has destroyed the structural crown and root beyond restorative capability.",
      "Advanced gum disease (periodontitis) that has caused severe bone loss, making the tooth loose.",
      "Impacted wisdom teeth that cannot erupt properly, causing pain, cysts, or decay on adjacent molars.",
      "To create space for orthodontic braces (teeth alignment treatments) in cases of severe dental crowding.",
      "Fractured teeth where the crack extends deep below the gum line into the root structure."
    ],
    benefits: [
      "Immediate relief from severe toothache and localized nerve pressure.",
      "Eliminates the risk of dental infections spreading to the jaw, cheek, or bloodstream.",
      "Prevents damage, cavities, and crowding in neighboring healthy teeth.",
      "Prepares your jaw for functional and natural-looking replacements like dental implants.",
      "Stops gum bleeding and bad breath caused by heavily infected, loose teeth."
    ],
    steps: [
      {
        title: "Radiographic Evaluation",
        desc: "We take a detailed digital X-ray to examine the shape, length, and position of the tooth root and surrounding bone structure."
      },
      {
        title: "Numbing the Area",
        desc: "We administer local anesthesia to completely numb the tooth, jawbone, and surrounding gums, eliminating pain during the process."
      },
      {
        title: "Tooth Luxation",
        desc: "Using specialized dental elevators, we gently rock the tooth back and forth to expand the socket and detach the periodontal fibers."
      },
      {
        title: "Tooth Extraction",
        desc: "Once loosened, the tooth is carefully lifted out of its socket using dental forceps with steady, controlled pressure."
      },
      {
        title: "Cleaning & Hemostasis",
        desc: "The socket is cleaned of debris, and we place a sterile cotton gauze over the site to encourage a healthy blood clot to form."
      }
    ],
    recovery: [
      "Keep biting firmly on the cotton gauze for 45 to 60 minutes after the extraction.",
      "Apply an ice pack to your cheek externally to reduce potential post-extraction swelling.",
      "Avoid spitting, rinsing, or using a straw for 24 hours to prevent dislodging the blood clot (dry socket prevention).",
      "Eat soft, cool foods like yogurt, ice cream, or smoothies on the first day."
    ],
    faqs: [
      {
        question: "Does tooth extraction cause facial changes?",
        answer: "A single extraction near the back of the mouth rarely changes your facial shape. However, losing multiple teeth can cause the jawbone to resorb over time, leading to a slightly sunken facial appearance. This is why we recommend replacing missing teeth with bridges or dental implants."
      },
      {
        question: "What is a dry socket and how do I prevent it?",
        answer: "A dry socket occurs when the blood clot in the extraction site is dislodged or dissolves prematurely, exposing the underlying bone and nerves. To prevent it, avoid smoking, spitting, hot liquids, and vigorous rinsing for the first 24 to 48 hours."
      },
      {
        question: "When can I resume normal activities?",
        answer: "Most patients can return to routine work or school the day after the extraction. However, we advise avoiding heavy physical activity, running, or heavy lifting for 48 hours to prevent bleeding."
      }
    ],
    testimonial: {
      text: "I had my wisdom tooth removed here. I was expecting a painful surgical process, but the doctor completed the extraction in under 20 minutes. The healing was quick and I had very little swelling.",
      author: "Venkatesh K.",
      city: "Chidambaram"
    },
    priceGuide: "Depends on whether the procedure is a simple extraction or a complex surgical extraction (wisdom teeth)."
  },
  "dental-fillings-chidambaram": {
    title: "Dental Fillings",
    metaTitle: "Composite Dental Fillings Chidambaram | Sri Deepam Clinic",
    metaDesc: "Restore cavities with tooth-colored composite dental fillings at Sri Deepam Dental Clinic, Chidambaram. Affordable and durable fillings near Vandigate.",
    tagline: "Halt decay and restore your tooth structure with natural-looking composite fillings.",
    keywords: ["Dental Fillings Chidambaram", "Cavity Treatment Chidambaram", "Tooth Colored Fillings Chidambaram", "Dental Clinic Chidambaram"],
    overview: [
      "Dental fillings are the primary method used to treat tooth decay (cavities) and restore damaged teeth. When food particles and bacteria accumulate on the teeth, they form a sticky film called plaque. The bacteria in plaque produce acids that eat away at the tooth's enamel, creating small holes or cavities. If diagnosed early, a filling can stop the decay from spreading deeper into the dentin and pulp, avoiding the need for a root canal or extraction.",
      "At Sri Deepam Multispeciality Dental Clinic in Chidambaram, we specialize in modern, metal-free composite restorations. Unlike traditional silver amalgam fillings, which contain mercury and turn dark over time, composite fillings are made of a biocompatible resin mixture. We shade-match the resin to your natural tooth color, making the filling invisible when you laugh or smile.",
      "Composite fillings bond directly to the tooth structure. This requires less tooth removal than old silver fillings, preserving more of your natural enamel. They are cured instantly with a specialized UV light, allowing you to chew and speak normally shortly after your appointment."
    ],
    whyNeeded: [
      "Small holes or dark spots visible on the surface of your teeth.",
      "Mild sensitivity or sharp pain when eating sweet, hot, or cold foods.",
      "Food constantly getting trapped between certain teeth.",
      "Chips or minor fractures on the chewing surfaces of front or back teeth.",
      "Replacing old, cracked, or leaking silver amalgam fillings."
    ],
    benefits: [
      "Stops tooth decay from spreading deeper into the dentin and pulp.",
      "Natural-looking results that match the exact color of your tooth.",
      "Saves healthy tooth structure due to chemical bonding of the resin.",
      "Strengthens the tooth against cracks by restoring its original shape.",
      "Quick, single-visit treatment that is completely painless."
    ],
    steps: [
      {
        title: "Cavity Preparation",
        desc: "We gently remove the decayed portion of the tooth using modern handpieces, leaving only healthy enamel."
      },
      {
        title: "Etching and Bonding",
        desc: "A mild conditioning gel is applied to create microscopic pores, followed by a bonding agent that secures the filling."
      },
      {
        title: "Resin Placement",
        desc: "We apply the composite resin in thin layers, shaping it to rebuild the natural contours of your tooth."
      },
      {
        title: "Light Curing",
        desc: "A specialized blue curing light is directed at the tooth to harden the composite material in seconds."
      },
      {
        title: "Polishing and Bite Adjustment",
        desc: "We check your bite alignment and polish the filling so that it feels smooth to your tongue and matches neighboring teeth."
      }
    ],
    recovery: [
      "You can eat and drink immediately after the appointment since the composite is fully cured.",
      "Expect mild sensitivity to temperature for 24-48 hours, which resolves on its own.",
      "Maintain regular brushing and flossing to prevent new decay around the filling margins."
    ],
    faqs: [
      {
        question: "How long do composite fillings last?",
        answer: "Composite fillings generally last between 5 to 10 years, depending on the location of the filling, size of the cavity, and your oral hygiene habits. Avoiding biting on hard items like ice or pins extends their life."
      },
      {
        question: "Are silver fillings better than composite fillings?",
        answer: "Silver amalgam fillings are durable, but they require removing more healthy tooth structure, contain mercury, and contract with temperature changes, which can cause teeth to crack. Composite fillings look natural, bond chemically, and preserve more enamel."
      },
      {
        question: "Can dental fillings fall out?",
        answer: "It is rare, but a filling can loosen if the tooth suffers secondary decay around the margins, or if you bite into extremely hard food. If a filling falls out, visit us immediately to reseal the cavity and prevent sensitivity."
      }
    ],
    testimonial: {
      text: "I had three cavities filled with composite resin. The process was quick and the doctor was very gentle. I cannot even tell where the fillings are, they look so natural.",
      author: "Revathi M.",
      city: "Chidambaram"
    },
    priceGuide: "Affordable standard rate per tooth, based on the size of the cavity (one surface vs multiple surfaces)."
  },
  "teeth-cleaning-chidambaram": {
    title: "Teeth Cleaning & Polishing",
    metaTitle: "Professional Teeth Cleaning Chidambaram | Sri Deepam Clinic",
    metaDesc: "Get professional teeth cleaning, scaling, and polishing at Sri Deepam Dental Clinic, Chidambaram. Affordable plaque and tartar removal near Vandigate.",
    tagline: "Maintain healthy gums and refresh your breath with professional ultrasonic scaling.",
    keywords: ["Teeth Cleaning Chidambaram", "Dental Scaling Chidambaram", "Plague Removal Chidambaram", "Dental Clinic Chidambaram"],
    overview: [
      "Professional teeth cleaning, clinically known as scaling and polishing, is a key preventative treatment. Even with regular brushing and flossing, soft plaque can harden into a calcified substance called tartar or calculus. Tartar cannot be removed by home brushing and forms a breeding ground for bacteria. If left on the teeth, it can lead to gum swelling, bleeding (gingivitis), bone loss, and bad breath.",
      "At Sri Deepam Multispeciality Dental Clinic, we utilize advanced ultrasonic scalers to remove plaque and tartar gently. These devices use micro-vibrations and a cooling water spray to lift calcified deposits without scratching your tooth enamel. The procedure is non-invasive and is recommended for patients of all ages.",
      "Following scaling, we polish your teeth with a specialized paste to remove surface stains from tea, coffee, or food. We also offer individual advice on brushing techniques and flossing to help you maintain your results at home."
    ],
    whyNeeded: [
      "Bleeding gums during brushing or flossing, indicating early gum inflammation.",
      "Yellow or brown mineral deposits (tartar) visible along the gum line.",
      "Persistent bad breath (halitosis) that does not improve with mouthwash.",
      "Red, swollen, or tender gums that feel irritated.",
      "Stains on teeth from coffee, tea, smoking, or certain foods."
    ],
    benefits: [
      "Removes hardened tartar that home brushing cannot clear.",
      "Prevents gum recession and bone loss caused by periodontal disease.",
      "Eliminates bacteria that cause bad breath, leaving your mouth fresh.",
      "Removes surface stains, brightening your smile naturally.",
      "Helps detect other oral issues early during the cleaning process."
    ],
    steps: [
      {
        title: "Oral Examination",
        desc: "We check your teeth and gums to identify areas with heavy plaque build-up or signs of inflammation."
      },
      {
        title: "Ultrasonic Scaling",
        desc: "Using ultrasonic tips, we gently vibrate tartar deposits loose from the surfaces of the teeth and under the gum line."
      },
      {
        title: "Fine Hand Scaling",
        desc: "We use manual instruments to double-check and clear any remaining small deposits in tight spaces between the teeth."
      },
      {
        title: "Prophy Polishing",
        desc: "We polish the teeth using a specialized handpiece and polishing paste to smooth the enamel and remove stains."
      },
      {
        title: "Fluoride Application (Optional)",
        desc: "If you have mild sensitivity, we apply a professional fluoride gel to strengthen the enamel and protect against decay."
      }
    ],
    recovery: [
      "Avoid extremely hot, cold, or spicy foods for 24 hours if you experience mild temporary sensitivity.",
      "Resume normal brushing and flossing immediately, using a soft-bristled toothbrush.",
      "Schedule your next routine check-up and cleaning in 6 months to maintain oral health."
    ],
    faqs: [
      {
        question: "Does teeth cleaning make teeth loose or create gaps?",
        answer: "No, this is a common myth. Scaling does not make teeth loose or create gaps. If you have heavy tartar buildup, it can act as a fake support while gums recede. Once the tartar is cleaned, you may feel the actual gaps where gum tissue was lost due to inflammation. The gums will heal and tighten after the cleaning."
      },
      {
        question: "Is teeth cleaning painful?",
        answer: "For most patients, teeth cleaning is comfortable. You will feel minor vibrations and water spray. If you have sensitive gums or heavy tartar, you may feel slight irritation. We can apply a numbing gel to ensure you are comfortable."
      },
      {
        question: "How long does a cleaning appointment take?",
        answer: "A standard scaling and polishing session takes about 30 to 45 minutes, depending on the amount of tartar buildup and stain levels."
      }
    ],
    testimonial: {
      text: "I went for scaling and polishing. The clinic was very hygienic, and the doctor cleared all my coffee stains. My teeth feel incredibly clean and my breath is much fresher.",
      author: "Manikandan S.",
      city: "Chidambaram"
    },
    priceGuide: "Affordable flat-rate package for complete mouth scaling and polishing."
  },
  "teeth-whitening-chidambaram": {
    title: "Teeth Whitening",
    metaTitle: "Safe Teeth Whitening Chidambaram | Sri Deepam Dental Clinic",
    metaDesc: "Brighten your smile with professional teeth whitening at Sri Deepam Dental Clinic, Chidambaram. Safe, effective whitening options near Vandigate.",
    tagline: "Enhance your smile safely with professional whitening treatments.",
    keywords: ["Teeth Whitening Chidambaram", "Laser Teeth Whitening Chidambaram", "Cosmetic Dentist Chidambaram", "Dental Clinic Chidambaram"],
    overview: [
      "Professional teeth whitening is a popular cosmetic procedure designed to brighten your smile. Over time, teeth can lose their brightness due to aging, smoking, or consuming staining substances like coffee, tea, or certain spices. Professional whitening uses safe bleaching agents to lift deep stains without damaging your enamel.",
      "At Sri Deepam Multispeciality Dental Clinic, we offer both in-office whitening and customized take-home kits. Our in-office whitening is a single-session treatment where we apply a high-concentration gel and activate it with a specialized light, brightening your teeth by several shades in about an hour.",
      "Before recommending whitening, we perform an oral check-up. This ensures your gums are healthy and any cavities are filled, preventing sensitivity. Please note that whitening agents only work on natural enamel and do not change the color of existing crowns, fillings, or veneers."
    ],
    whyNeeded: [
      "Discolored or yellowed teeth due to age or lifestyle habits.",
      "Stains from frequent consumption of tea, coffee, or colored foods.",
      "A desire to brighten your smile for special events like weddings or interviews.",
      "Dull teeth caused by previous tobacco use."
    ],
    benefits: [
      "A brighter, more radiant smile in a single clinic visit.",
      "Safe, controlled application that protects your gums and enamel.",
      "Customized treatment to match your preferred shade of brightness.",
      "Long-lasting results when combined with good oral care.",
      "Boosts confidence and enhances your overall appearance."
    ],
    steps: [
      {
        title: "Preparation & Shade Matching",
        desc: "We record your current tooth shade to track improvement and clean your teeth to remove plaque."
      },
      {
        title: "Gum Protection",
        desc: "We apply a protective barrier to your gums to shield them from the whitening gel."
      },
      {
        title: "Whitening Gel Application",
        desc: "We apply the whitening gel containing hydrogen peroxide to the surfaces of your teeth."
      },
      {
        title: "Light Activation",
        desc: "A specialized light is used to activate the gel, accelerating the stain removal process."
      },
      {
        title: "Rinsing and Review",
        desc: "We rinse the gel away and evaluate the shade change, repeating the process if necessary."
      }
    ],
    recovery: [
      "Avoid colored foods and drinks (like coffee, tea, red wine, and soy sauce) for 48 hours.",
      "Use a desensitizing toothpaste if you experience temporary sensitivity to hot or cold temperatures.",
      "Brush and rinse your mouth after meals to help maintain your whitening results."
    ],
    faqs: [
      {
        question: "Is teeth whitening safe for enamel?",
        answer: "Yes, professional teeth whitening is completely safe when performed by a dentist. The whitening agents temporarily open the pores in your enamel to lift stains but do not damage the structure of the tooth."
      },
      {
        question: "How long do whitening results last?",
        answer: "Whitening results typically last from 1 to 2 years, depending on your diet and lifestyle. Avoiding smoking and staining foods, along with regular dental cleanings, helps maintain the brightness."
      },
      {
        question: "Does whitening work on crowns or fillings?",
        answer: "No, whitening treatments only affect natural tooth enamel. They do not change the color of crowns, veneers, bridges, or composite fillings. If you plan to replace restorations, we recommend whitening your natural teeth first."
      }
    ],
    testimonial: {
      text: "I chose the in-office whitening package before my wedding. The difference was immediate and my teeth looked much brighter. The procedure was comfortable and there was no pain.",
      author: "Sneha P.",
      city: "Chidambaram"
    },
    priceGuide: "In-office single session whitening packages and custom take-home kits."
  },
  "dentures-chidambaram": {
    title: "Dentures",
    metaTitle: "Complete & Partial Dentures Chidambaram | Sri Deepam Clinic",
    metaDesc: "Restore your chewing ability and speech with custom dentures at Sri Deepam Dental Clinic, Chidambaram. Affordable dentures near Vandigate.",
    tagline: "Restore comfort, speech, and chewing function with custom-fabricated dentures.",
    keywords: ["Dentures Chidambaram", "Complete Dentures Chidambaram", "Partial Dentures Chidambaram", "Dental Clinic Chidambaram"],
    overview: [
      "Dentures are custom-made removable appliances designed to replace missing teeth and restore your smile. If you have lost teeth due to decay, injury, or gum disease, dentures make it easier to chew, speak clearly, and support your facial muscles. They prevent the cheeks and lips from sagging, which can make you look older.",
      "At Sri Deepam Multispeciality Dental Clinic, we offer both complete and partial dentures. Complete dentures are used when all teeth in an arch are missing, while partial dentures replace selected missing teeth and are secured by clasps on neighboring natural teeth. We use premium acrylics and cobalt-chromium alloys to ensure durability and a comfortable fit.",
      "Adapting to new dentures takes a little time. Our clinical team works closely with you through adjustments to make sure they fit securely and comfortably, helping you return to your normal eating and speaking habits."
    ],
    whyNeeded: [
      "Loss of all or multiple teeth in the upper or lower jaw.",
      "Difficulty chewing food properly, leading to digestive discomfort.",
      "Changes in speech or difficulty pronouncing certain words clearly.",
      "Sagging facial muscles due to missing back teeth."
    ],
    benefits: [
      "Restores the ability to eat a wide variety of healthy foods.",
      "Improves speech clarity and confidence when talking.",
      "Supports facial structures, maintaining a youthful look.",
      "Natural-looking replacement options customized to your smile.",
      "An affordable option for replacing multiple missing teeth."
    ],
    steps: [
      {
        title: "Impressions and Measurements",
        desc: "We take precise impressions of your gums and record jaw measurements to plan the shape of your dentures."
      },
      {
        title: "Wax Try-in Session",
        desc: "We create a wax model of the dentures to check the fit, bite alignment, and look in your mouth before final fabrication."
      },
      {
        title: "Denture Fabrication",
        desc: "Our dental lab processes the measurements into a durable acrylic or metal-frame denture."
      },
      {
        title: "Fitting and Adjustments",
        desc: "We place the completed dentures in your mouth, adjust the fit to eliminate high spots, and check your bite."
      }
    ],
    recovery: [
      "Start by eating soft foods cut into small pieces, chewing on both sides of your mouth.",
      "Practice reading aloud to help your tongue adjust to the new dentures.",
      "Clean your dentures daily with a soft brush and soak them in water overnight."
    ],
    faqs: [
      {
        question: "How long does it take to get used to new dentures?",
        answer: "It typically takes 2 to 4 weeks to adjust to new dentures. You may experience temporary excess saliva or minor soreness as your cheek and tongue muscles learn to keep them in place. We schedule follow-up visits to adjust the fit as needed."
      },
      {
        question: "Should I wear my dentures to sleep?",
        answer: "We recommend removing your dentures before sleeping. This gives your gums and jaw bone a chance to rest and prevents gum irritation or fungal infections."
      },
      {
        question: "How do I clean and maintain my dentures?",
        answer: "Brush your dentures daily with a non-abrasive denture cleanser or mild soap and a soft brush. Keep them in water or a denture soaking solution when not in use to prevent them from drying out or losing their shape."
      }
    ],
    testimonial: {
      text: "We got complete dentures for my father. The doctor was very patient during the measurements and trial sessions. The fit is secure and he is now able to eat comfortably.",
      author: "Rajesh K.",
      city: "Chidambaram"
    },
    priceGuide: "Flexible pricing based on partial vs complete arches, and choice of material (regular acrylic vs flexible Valplast)."
  },
  "crowns-bridges-chidambaram": {
    title: "Crowns & Bridges",
    metaTitle: "Dental Crowns & Bridges Chidambaram | Sri Deepam Clinic",
    metaDesc: "Restore broken or missing teeth with dental crowns and bridges at Sri Deepam Dental Clinic, Chidambaram. Ceramic, metal-free options near Vandigate.",
    tagline: "Restore structural strength and bridge gaps with premium crowns and bridges.",
    keywords: ["Dental Crowns Chidambaram", "Dental Bridges Chidambaram", "Zirconia Crowns Chidambaram", "Dental Clinic Chidambaram"],
    overview: [
      "Dental crowns and bridges are fixed restorations used to repair damaged teeth or replace missing ones. A crown, often called a cap, completely covers a damaged tooth to restore its strength, size, and appearance. A bridge is used to replace one or more missing teeth, using healthy neighboring teeth as supports to span the gap.",
      "At Sri Deepam Multispeciality Dental Clinic, we offer metal-ceramic, E-Max, and metal-free Zirconia crowns. Zirconia restorations are highly durable and copy the translucency of natural teeth, making them ideal for both front and back teeth.",
      "The process is completed in two sessions. During the first visit, we prepare the support teeth, take impressions, and place temporary restorations. In the second visit, we fit and cement the custom-fabricated crown or bridge, restoring your bite and natural smile."
    ],
    whyNeeded: [
      "To protect a weak tooth (from decay or fracture) from breaking.",
      "To restore an already broken or severely worn tooth.",
      "To cover and protect a tooth that has undergone root canal treatment.",
      "To replace missing teeth using a bridge supported by adjacent teeth.",
      "To cover dental implants or severely discolored teeth."
    ],
    benefits: [
      "Restores structural strength and chewing function to weak teeth.",
      "Bridges gaps, preventing adjacent teeth from shifting out of alignment.",
      "Long-lasting and durable restoration options.",
      "Shade-matched to blend with your surrounding natural teeth.",
      "Improves speech clarity and facial structure support."
    ],
    steps: [
      {
        title: "Preparation & Shaping",
        desc: "We gently reshape the outer surface of the tooth to create space for the crown or bridge."
      },
      {
        title: "Dental Impression",
        desc: "We take a precise impression of your prepared teeth and record your bite layout."
      },
      {
        title: "Temporary Restoration",
        desc: "We place a temporary crown or bridge to protect your prepared teeth while the lab fabricates the permanent one."
      },
      {
        title: "Fit & Cementation",
        desc: "At the second visit, we remove the temporary cap, check the fit and color of the permanent crown, and bond it securely in place."
      }
    ],
    recovery: [
      "Avoid hard or sticky foods on the side of the mouth with the temporary restoration.",
      "Clean the margins around your new crown or bridge carefully when brushing and flossing.",
      "Visit us if the crown feels high or uneven when biting down."
    ],
    faqs: [
      {
        question: "What is the difference between a crown and a bridge?",
        answer: "A crown is a custom cap that fits over a single damaged tooth to protect it. A bridge is used to replace one or more missing teeth, using crowns on healthy neighboring teeth (anchors) to support the replacement teeth in the middle."
      },
      {
        question: "How long do zirconia crowns last?",
        answer: "Zirconia crowns are extremely strong and typically last between 10 to 15 years or longer with good oral care. Regular cleanings and avoiding using your teeth as tools are important for longevity."
      },
      {
        question: "Does getting a crown hurt?",
        answer: "No, we reshape the tooth under local anesthesia, so you will feel no discomfort. You may experience mild temporary sensitivity for a few days after cementation, which is normal."
      }
    ],
    testimonial: {
      text: "I got a bridge done to replace my missing molar. The fit is perfect and feels just like my natural teeth. Chewing has become much easier now. Excellent care.",
      author: "Kathiravan A.",
      city: "Chidambaram"
    },
    priceGuide: "Depends on choice of material: basic Metal-Ceramic, premium Zirconia, or cosmetic E-Max ceramic."
  },
  "cosmetic-dental-procedures-chidambaram": {
    title: "Cosmetic Dentistry",
    metaTitle: "Cosmetic Dentistry & Smile Makeovers Chidambaram | Sri Deepam",
    metaDesc: "Enhance your smile with cosmetic dentistry, veneers, and gap closures at Sri Deepam Dental Clinic, Chidambaram. Custom smile design near Vandigate.",
    tagline: "Achieve a balanced, harmonious, and beautiful smile with custom cosmetic treatments.",
    keywords: ["Cosmetic Dentistry Chidambaram", "Veneers Chidambaram", "Smile Makeover Chidambaram", "Dental Clinic Chidambaram"],
    overview: [
      "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. While general dentistry addresses oral health and disease, cosmetic procedures refine the aesthetics of your smile, including tooth color, alignment, shape, and overall balance. A beautiful smile can enhance your confidence in both personal and professional interactions.",
      "At Sri Deepam Multispeciality Dental Clinic, we offer customized smile makeovers. Our cosmetic options include composite bonding (to fix small chips or close gaps), porcelain veneers (thin shells bonded to the front of teeth), tooth contouring, and gum contouring.",
      "We begin with a detailed consultation to understand your goals. Using photos and dental models, we plan a custom smile design that matches your facial features and preferences, ensuring natural-looking and long-lasting results."
    ],
    whyNeeded: [
      "Visible gaps or spaces between your front teeth.",
      "Chipped, cracked, or unevenly worn tooth edges.",
      "Stubborn, deep staining that does not respond to standard whitening.",
      "Misshapen, pointed, or slightly misaligned teeth.",
      "A desire to enhance your overall smile appearance."
    ],
    benefits: [
      "Improves the aesthetic alignment, shape, and color of your teeth.",
      "Customized design that matches your natural facial structure.",
      "Veneers and bonding help strengthen slightly chipped teeth.",
      "Long-lasting solutions that resist staining over time.",
      "Boosts confidence and encourages you to smile freely."
    ],
    steps: [
      {
        title: "Smile Consultation",
        desc: "We discuss your goals, take photos, and analyze your smile layout to design a custom treatment plan."
      },
      {
        title: "Trial Design (Mock-up)",
        desc: "We create a temporary mockup on your teeth so you can see and approve the proposed shape and size before we begin."
      },
      {
        title: "Tooth Preparation (Veneers)",
        desc: "For veneers, we gently prepare a microscopic layer of enamel from the front of the teeth to ensure a flush fit."
      },
      {
        title: "Bond Placement",
        desc: "We bond the custom veneers or composite resin to the teeth, using curing lights and polishes to finish."
      }
    ],
    recovery: [
      "Avoid biting directly into very hard foods with your front teeth (use back teeth instead).",
      "Maintain good oral hygiene, as veneers still require healthy support teeth.",
      "Wear a nightguard if you have a habit of grinding your teeth (bruxism)."
    ],
    faqs: [
      {
        question: "What is the difference between bonding and veneers?",
        answer: "Composite bonding is a quick, single-visit procedure where we apply a tooth-colored resin directly to shape the tooth. Veneers are custom porcelain shells fabricated in a lab and bonded to the front of the teeth, offering greater durability and stain resistance."
      },
      {
        question: "Does cosmetic dentistry require extensive tooth grinding?",
        answer: "No, modern cosmetic procedures are minimally invasive. Composite bonding requires zero grinding, and porcelain veneers only require removing a microscopic layer of enamel (about 0.5mm) to make space for the shell."
      },
      {
        question: "How long do dental veneers last?",
        answer: "Porcelain veneers typically last between 10 to 15 years with proper care, while composite bonding lasts 3 to 7 years. Good hygiene and avoiding biting on hard objects help maximize their lifespan."
      }
    ],
    testimonial: {
      text: "I had a gap between my front teeth closed with composite bonding. The treatment was finished in one visit and looked very natural. I am much more confident when smiling now.",
      author: "Prakash M.",
      city: "Chidambaram"
    },
    priceGuide: "Custom quotation based on the number of teeth and selection of bonding vs porcelain veneers."
  }
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_CATALOG).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const service = SERVICES_CATALOG[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const service = SERVICES_CATALOG[slug];

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Treatments", url: "/services" },
    { name: service.title, url: `/services/${slug}` }
  ];

  return (
    <div className="relative bg-stone-bg min-h-screen">
      <SchemaMarkup type="FAQ" data={service.faqs} />
      <SchemaMarkup type="Breadcrumb" data={breadcrumbs} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
          <Link href="/services" className="hover:text-accent flex items-center gap-1 transition-colors">
            <ArrowLeft className="h-3 w-3" /> Treatments
          </Link>
          <span>/</span>
          <span className="text-primary font-extrabold">{service.title}</span>
        </div>
      </div>

      {/* Editorial Hero Box */}
      <section className="pb-12 pt-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-border-subtle p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full translate-x-10 -translate-y-10" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent-light text-primary text-[9px] font-bold uppercase tracking-widest font-sans">
              <Award className="h-3.5 w-3.5 text-accent" />
              Advanced Clinical Care
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary font-display leading-tight">
              {service.title} <span className="italic text-accent">Chidambaram</span>
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-2xl">
              {service.tagline}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <ClientBookingTrigger serviceName={service.title} buttonText="Schedule Appointment" />
              
              <a
                href="tel:+919489516326"
                className="w-full sm:w-auto py-3.5 px-6 bg-white hover:bg-stone-bg text-primary border border-border-subtle rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-accent" />
                Call +91 94895 16326
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Copy (1200+ Words Structure) */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section 1: Overview */}
          <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-medium text-primary font-display flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              Clinical Overview
            </h2>
            <div className="h-[1px] w-full bg-border-subtle" />
            <div className="space-y-4 text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-light">
              {service.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Section 2: Common Indicators */}
          <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-medium text-primary font-display flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-accent" />
              Symptoms & Indicators
            </h2>
            <div className="h-[1px] w-full bg-border-subtle" />
            <p className="text-slate-400 text-xs font-sans font-light">
              If you experience any of these dental issues, contact our clinic at Vandigate:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-sans font-light text-slate-500">
              {service.whyNeeded.map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Benefits */}
          <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-medium text-primary font-display flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              Patient Advantages
            </h2>
            <div className="h-[1px] w-full bg-border-subtle" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-sans font-light text-slate-550 text-slate-500">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Linear Clinical Steps (Beautiful Handcrafted timeline) */}
          <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-medium text-primary font-display flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Procedural Steps
            </h2>
            <div className="h-[1px] w-full bg-border-subtle" />
            
            <div className="relative border-l border-accent/20 pl-6 ml-2 space-y-8 py-2">
              {service.steps.map((step, i) => (
                <div key={i} className="relative space-y-1">
                  {/* Timeline point */}
                  <span className="absolute -left-10 top-0.5 h-8 w-8 rounded-full bg-stone-bg border border-accent/30 text-primary text-[10px] font-bold flex items-center justify-center font-display shadow-sm">
                    0{i + 1}
                  </span>
                  <h4 className="text-sm font-bold text-primary font-display">{step.title}</h4>
                  <p className="text-slate-500 text-xs font-sans font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Aftercare */}
          <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-medium text-primary font-display flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-accent" />
              Aftercare & Recovery
            </h2>
            <div className="h-[1px] w-full bg-border-subtle" />
            <div className="space-y-3 text-xs sm:text-sm font-sans font-light text-slate-500">
              {service.recovery.map((tip, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Specific Testimonial */}
          <div className="bg-primary text-white border border-accent/25 rounded-3xl p-8 shadow-md relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full translate-x-10 -translate-y-10" />
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block font-sans">Patient Review</span>
            <p className="text-stone-200 text-xs sm:text-sm italic font-light leading-relaxed">
              "{service.testimonial.text}"
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold font-display">
                {service.testimonial.author[0]}
              </div>
              <div className="text-[10px]">
                <span className="font-bold block uppercase text-accent tracking-wider">{service.testimonial.author}</span>
                <span className="text-stone-400 block">{service.testimonial.city}</span>
              </div>
            </div>
          </div>

          {/* Section 7: Service FAQs */}
          <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-medium text-primary font-display">Service FAQ</h2>
            <div className="h-[1px] w-full bg-border-subtle" />
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-4.5 rounded-xl border border-border-subtle bg-stone-bg/30 space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold text-primary font-display">
                    {faq.question}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8: Estimate & Booking */}
          <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm text-center space-y-6">
            <h3 className="text-base font-bold text-primary font-display uppercase tracking-widest text-xs">Estimate Guide</h3>
            <p className="text-slate-555 text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-sans font-light">
              {service.priceGuide} We discuss all details and customize plans after diagnostic check-ups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-sm mx-auto">
              <ClientBookingTrigger serviceName={service.title} buttonText="Request Slot" />
              <Link
                href="/contact"
                className="w-full sm:w-auto py-3.5 px-6 bg-slate-50 hover:bg-slate-100 text-primary border border-border-subtle rounded-xl text-xs font-bold uppercase tracking-wider text-center block transition-all active:scale-97"
              >
                Find Location
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
