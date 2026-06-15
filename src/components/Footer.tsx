import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const clinicPhone = "+919489516326";

  return (
    <footer className="bg-primary text-stone-200 border-t border-accent/15">
      {/* Top Footer Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Clinic Identity */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="h-9 w-9 rounded-full border border-accent/40 bg-white/5 flex items-center justify-center text-accent">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-semibold text-white text-lg font-display tracking-tight uppercase">
                Sri Deepam
              </span>
            </Link>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Bespoke dental care utilizing advanced diagnostics and sterile environments. Serving the Chidambaram community with expert clinical knowledge and empathy.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-accent text-xs font-semibold">
                ⭐ 5.0 Google Rating (45+ Reviews)
              </div>
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans mb-5 border-b border-white/5 pb-2.5">
              Explore
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-400">
              <li>
                <Link href="/" className="hover:text-accent transition-colors font-medium">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors font-medium">
                  About Clinic
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors font-medium">
                  Our Treatments
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-accent transition-colors font-medium">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors font-medium">
                  FAQ Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors font-medium">
                  Contact Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans mb-5 border-b border-white/5 pb-2.5">
              Clinical Hours
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <Clock className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-200 font-bold">Monday - Saturday</p>
                  <p className="text-stone-400 text-xs mt-1">09:30 AM - 01:30 PM</p>
                  <p className="text-stone-400 text-xs mt-0.5">04:30 PM - 08:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 border-t border-white/5 pt-3">
                <Clock className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-200 font-bold">Sunday</p>
                  <p className="text-stone-400 text-xs mt-1">10:00 AM - 01:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans mb-5 border-b border-white/5 pb-2.5">
              Location
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <span className="text-stone-300 leading-relaxed text-xs">
                  Cuddalore Main Road, <br />
                  Near BSNL Office, Vandigate, <br />
                  Chidambaram, TN 608001
                </span>
              </div>
              <a href={`tel:${clinicPhone}`} className="flex items-center gap-2.5 hover:text-accent transition-colors font-bold text-stone-200">
                <Phone className="h-4.5 w-4.5 text-accent shrink-0" />
                <span>+91 94895 16326</span>
              </a>
              <div className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <Mail className="h-4.5 w-4.5 text-accent shrink-0" />
                <span className="text-xs">contact@srideepamdental.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary-hover pt-8 pb-28 md:py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} Sri Deepam Multispeciality Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Cosmetic & Implant Care Excellence</span>
            <Link href="/contact" className="hover:text-stone-300 underline underline-offset-4 decoration-accent/30">
              Vandigate Landmark
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
